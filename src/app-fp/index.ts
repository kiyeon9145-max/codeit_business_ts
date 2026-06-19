import { inject } from "./injector";
import { StateType } from "./ui/console/root-screen";

const state: StateType = {
  user: undefined,
  memos: [],
};
const { main } = inject();
main(state);