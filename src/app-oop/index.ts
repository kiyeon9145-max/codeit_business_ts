import { Injector } from "./injector";

const injector = new Injector();
const rootScreen = injector.inject();
rootScreen.run();
