import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
});

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
