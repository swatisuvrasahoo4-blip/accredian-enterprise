import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    countryCode: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    domain: {
      type: String,
      default: "",
    },

    candidates: {
      type: String,
      default: "",
    },

    mode: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry =
  mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);

export default Enquiry;