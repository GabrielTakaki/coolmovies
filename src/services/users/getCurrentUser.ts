import { gql } from "@apollo/client";
import { client } from "../../core/apolloClient";

const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      id
      name
    }
  }
`;

export const getCurrentUser = async () => {
  const result = await client.query({
    query: CURRENT_USER_QUERY,
  });

  return result.data.currentUser;
};
