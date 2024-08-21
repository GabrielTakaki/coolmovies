import { Epic } from "redux-observable";
import { movieActions, SliceAction } from "../slices/moviesSlice";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { getMovies } from "../../services/movies/getMovies";

export const fetchMoviesEpic: Epic = (
  action$: Observable<SliceAction["fetchMovies"]>
) =>
  action$.pipe(
    filter(movieActions.fetchMovies.match),
    switchMap(async () => {
      try {
        const result = await getMovies();
        return movieActions.setMovies(result);
      } catch (err) {
        // return actions.loadError();
      }
    })
  );
