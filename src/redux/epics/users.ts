import { Epic } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { userActions, SliceAction } from "../slices/userSlice";
import { createUser } from "@services/users/createUser";
import { getCurrentUser } from "@services/users/getCurrentUser";

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

export const fetchCurrentUserEpic: Epic = (
  action$: Observable<SliceAction["fetchCurrentUser"]>
) =>
  action$.pipe(
    filter(userActions.fetchCurrentUser.match),
    switchMap(async () => {
      try {
        const result = await getCurrentUser();
        return userActions.setUser(result);
      } catch (err) {
        // return reviewsActions.loadError();
      }
    })
  );
