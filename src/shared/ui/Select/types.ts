import { ID } from "@shared/config/links";

export interface ISelect {
  disabled?: boolean;
  key?: ID;
  value: ID;
  title?: string;
  label?: string;
}
