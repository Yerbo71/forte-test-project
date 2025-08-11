import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from "../controllers/contactController.js";
import validateContact from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/contacts", validateContact, createContact);
router.get("/contacts", getAllContacts);
router.get("/contacts/:id", getContactById);
router.put("/contacts/:id", validateContact, updateContact);
router.delete("/contacts/:id", deleteContact);

export default router;
