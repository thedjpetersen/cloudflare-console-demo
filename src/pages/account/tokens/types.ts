import { Permission } from "./api-permissions";

export type Policy = {
  effect: "allow" | "deny";
  resources: { [key: string]: string };
  permissions: Permission[];
};
