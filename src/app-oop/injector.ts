// import { UserRepo } from "./repo/memory/user-repo";
// import { MemoRepo } from "./repo/memory/memo-repo";

import { UserRepo } from "./repo/file/user-repo";
import { MemoRepo } from "./repo/file/memo-repo";

import { AuthService } from "./service/auth-service";
import { MemoService } from "./service/memo-service";

import { AuthScreen } from "./ui/console/auth-screen.js";
import { MemoScreen } from "./ui/console/memo-screen.js";
import { RootScreen } from "./ui/console/root-screen.js";

// import { AuthScreen } from "./ui/browser/auth-screen";
// import { MemoScreen } from "./ui/browser/memo-screen";
// import { RootScreen } from "./ui/browser/root-screen";

export class Injector {
  inject() {
    const userRepo = new UserRepo();
    const memoRepo = new MemoRepo();

    const authService = new AuthService(userRepo);
    const memoService = new MemoService(userRepo, memoRepo);

    const authScreen = new AuthScreen(authService);
    const memoScreen = new MemoScreen(memoService);
    const rootScreen = new RootScreen(authScreen, memoScreen);

    return rootScreen;
  }
}