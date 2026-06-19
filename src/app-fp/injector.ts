import { memoRepo } from "./repo/memo-repo";
import { userRepo } from "./repo/user-repo";
import { authService } from "./service/auth-service";
import { memoService } from "./service/memo-service";
import { authScreen } from "./ui/console/auth-screen";
import { memoScreen } from "./ui/console/memo-screen";
import { rootScreen } from "./ui/console/root-screen";

export const inject = () => {
  const userRepoResult = userRepo();
  const memoRepoResult = memoRepo();

  const authServiceResult = authService(userRepoResult);
  const memoServiceResult = memoService(userRepoResult, memoRepoResult);

  const authScreenResult = authScreen(authServiceResult);
  const memoScreenResult = memoScreen(memoServiceResult);
  const rootScreenResult = rootScreen(authScreenResult, memoScreenResult);

  return rootScreenResult;
};
