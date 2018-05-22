import { State } from "../enums/state.enum";

export interface Item {
  id: string;
  name: string;
  reference: string;
  state: State;
}
