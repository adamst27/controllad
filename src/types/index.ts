export interface User {
  name: string;
  email: string;
  picture: string;
  role: "member" | "leader";
  projects: string[];
  expenses: string[];
  invoices: string[];
  tasks: string[];
  notifications: string[];
  subscription: string[];
}
