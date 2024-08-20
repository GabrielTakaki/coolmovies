import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";

export const moviesEpic: Epic = (
  action$: Observable<SliceAction["fetch"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async () => {
      try {
        const result = await client.query({
          query: retrieveData,
        });
        return actions.normalize({ data: result.data.allMovies });
      } catch (err) {
        return actions.loadError();
      }
    })
  );

const retrieveData = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        movieDirectorId
        userCreatorId
        title
        releaseDate
        nodeId
        userByUserCreatorId {
          id
          name
          nodeId
        }
        movieReviewsByMovieId {
          nodes {
            id
            title
            body
            rating
            userReviewerId
            userByUserReviewerId {
              id
              name
            }
          }
        }
      }
    }
  }
`;
