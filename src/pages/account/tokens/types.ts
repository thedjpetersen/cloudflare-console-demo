export type Policy = {
  effect: "allow" | "deny";
  resources: { [key: string]: string };
  permission_groups: Array<{
    id: string;
    name: string;
  }>;
};
