import { Item } from "../shared/interfaces/item.model";
import { State } from "../shared/enums/state.enum";

export const COLLECTION: Item[] = [
  {
    id: '1qsdf',
    name: 'Christophe',
    reference: '1235',
    state: State.ALIVRER
  },
  {
    id: 'sdfg12',
    name: 'Julie',
    reference: '1452',
    state: State.ENCOURS
  },
  {
    id: '2dfhg',
    name: 'Jean-stephanie',
    reference: '5852',
    state: State.LIVREE
  }
];
