import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  picture: { type: String },
  role: { type: String, enum: ["member", "leader"], default: "member" },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  expenses: [{ type: Schema.Types.ObjectId, ref: "Expense" }],
  invoices: [{ type: Schema.Types.ObjectId, ref: "Invoice" }],
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  subscription: { type: Schema.Types.ObjectId, ref: "Subscription" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const User = models.User || model("User", UserSchema);
