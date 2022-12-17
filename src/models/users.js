const mongoose = require("mongoose");
const moment = require("moment-timezone");
const uuid = require("uuid");

const UserSchema = mongoose.Schema({
    name: { type: String },
    uuid: { type: String, required: false, default: uuid.v4() },
    uidFirebase: { type: String, required: false },
    email: { type: String, required: true },
    active: { type: Boolean, default: true },
    roles: { type: String, enum: ["student", "teacher"], default: "student" },
    createdAt: {
      type: String,
      required: true,
      default: moment().tz("America/Sao_Paulo").format("DD-MM-YYYY HH:mm:ss.SSS"),
    },
    updatedAt: {
      type: String,
      required: true,
      default: moment().tz("America/Sao_Paulo").format("DD-MM-YYYY HH:mm:ss.SSS"),
    },
  });
  
  module.exports = mongoose.model("User", UserSchema);