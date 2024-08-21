import { Epic } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { userActions, SliceAction } from "../slices/userSlice";
import { createUser } from "../../services/users/createUser";

export const createUserEpic: Epic = (
  action$: Observable<SliceAction["createUser"]>
) =>
  action$.pipe(
    filter(userActions.createUser.match),
    switchMap(async (action) => {
      try {
        const user = await createUser(action.payload);
        return userActions.setUser(user);
      } catch (err) {
        // return reviewsActions.loadError();
      }
    })
  );
