import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    security_question: {
      type: String,
      default: "",
    },
    security_answer: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      required: true,
    },
    last_login: {
      type: Number,
    },
    ip_address: {
      type: String,
    },
    nickname: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["On-hold", "Active", "Inactive"],
      default: "Active",
    },

    otp: {
      type: Object,
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    is_archived: {
      type: Boolean,
      default: false,
    },
    is_logged_in: {
      type: Boolean,
      default: false,
    },
    login_tries: { type: Number, default: 0 },
    pin_code: {
      type: Number,
      validate: {
        validator: function (v) {
          // Ensure pin_code is exactly 4 digits
          return /^\d{4}$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid pin code! Pin code must be exactly 4 digits.`,
      },
    },
    save_activity_logs: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
