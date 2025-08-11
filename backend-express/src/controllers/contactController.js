import {
  getAllContactsService,
  getContactByIdService,
  createContactService,
  updateContactService,
  deleteContactService,
} from "../models/contactModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

export const createContact = async (req, res, next) => {
  const { name, phone, email } = req.body;
  try {
    const newContact = await createContactService({ name, phone, email });
    handleResponse(res, 201, "Contact created successfully", newContact);
  } catch (error) {
    if (
      error.message.includes("Phone number already exists") ||
      error.message.includes("Email already exists")
    ) {
      return handleResponse(res, 400, error.message);
    }
    next(error);
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || null;

    const filter = {
      name: req.query.name || null,
      email: req.query.email || null,
      phone: req.query.phone || null,
    };

    const results = await getAllContactsService({
      page,
      limit,
      filter,
      search,
    });
    handleResponse(res, 200, "Contacts retrieved successfully", results);
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const contact = await getContactByIdService(req.params.id);
    if (!contact) return handleResponse(res, 404, "Contact not found");
    handleResponse(res, 200, "Contact fetched successfully", contact);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  const { name, phone, email } = req.body;
  try {
    const updatedContact = await updateContactService(req.params.id, {
      name,
      phone,
      email,
    });
    if (!updatedContact) return handleResponse(res, 404, "Contact not found");
    handleResponse(res, 200, "Contact updated successfully", updatedContact);
  } catch (error) {
    if (
      error.message.includes("Phone number already exists") ||
      error.message.includes("Email already exists")
    ) {
      return handleResponse(res, 400, error.message);
    }
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const deletedContact = await deleteContactService(req.params.id);
    if (!deletedContact) return handleResponse(res, 404, "Contact not found");
    handleResponse(res, 200, "Contact deleted successfully", deletedContact);
  } catch (error) {
    next(error);
  }
};
