import pool from "../config/db/db.js";

export const getAllContactsService = async ({
  page,
  limit,
  filter,
  search,
}) => {
  const offset = (page - 1) * limit;
  let whereClauses = [];
  const params = [];

  if (search) {
    params.push(`%${search}%`);
    whereClauses.push(
      `(name ILIKE $${params.length} OR phone ILIKE $${params.length})`
    );
  }

  if (filter.name) {
    params.push(`%${filter.name}%`);
    whereClauses.push(`name ILIKE $${params.length}`);
  }

  if (filter.email) {
    params.push(`%${filter.email}%`);
    whereClauses.push(`email ILIKE $${params.length}`);
  }

  if (filter.phone) {
    params.push(`%${filter.phone}%`);
    whereClauses.push(`phone ILIKE $${params.length}`);
  }

  const whereSQL = whereClauses.length
    ? `WHERE ${whereClauses.join(" AND ")}`
    : "";

  const totalResult = await pool.query(
    `SELECT COUNT(*) AS total FROM contacts ${whereSQL}`,
    params
  );
  const total = parseInt(totalResult.rows[0].total, 10);

  params.push(limit, offset);
  const contactsResult = await pool.query(
    `SELECT * FROM contacts
     ${whereSQL}
     ORDER BY id ASC
     LIMIT $${params.length - 1} OFFSET $${params.length}`,
    params
  );

  return {
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
    pageSize: limit,
    data: contactsResult.rows,
  };
};

export const getContactByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM contacts WHERE id = $1", [id]);
  return result.rows[0] || null;
};

export const createContactService = async ({ name, phone, email }) => {
  const checkPhone = await pool.query(
    "SELECT id FROM contacts WHERE phone = $1",
    [phone]
  );
  if (checkPhone.rows.length > 0) {
    throw new Error("Phone number already exists");
  }
  if (email) {
    const checkEmail = await pool.query(
      "SELECT id FROM contacts WHERE email = $1",
      [email]
    );
    if (checkEmail.rows.length > 0) {
      throw new Error("Email already exists");
    }
  }
  const result = await pool.query(
    `INSERT INTO contacts (name, phone, email)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, phone, email]
  );
  return result.rows[0];
};

export const updateContactService = async (id, { name, phone, email }) => {
  const checkPhone = await pool.query(
    "SELECT id FROM contacts WHERE phone = $1 AND id <> $2",
    [phone, id]
  );
  if (checkPhone.rows.length > 0) {
    throw new Error("Phone number already exists");
  }
  if (email) {
    const checkEmail = await pool.query(
      "SELECT id FROM contacts WHERE email = $1 AND id <> $2",
      [email, id]
    );
    if (checkEmail.rows.length > 0) {
      throw new Error("Email already exists");
    }
  }

  const result = await pool.query(
    `UPDATE contacts
     SET name = $1, phone = $2, email = $3
     WHERE id = $4
     RETURNING *`,
    [name, phone, email, id]
  );
  return result.rows[0] || null;
};

export const deleteContactService = async (id) => {
  const result = await pool.query(
    "DELETE FROM contacts WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0] || null;
};
