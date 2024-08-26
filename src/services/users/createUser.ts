import { gql } from "@apollo/client";
import { client } from "@core/apolloClient";

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        name
      }
    }
  }
`;

export const createUser = async (input: { name: string }) => {
  const result = await client.mutate({
    mutation: CREATE_USER,
    variables: { input: { user: input } },
  });

  if (result.errors) {
    throw new Error("Failed to create user");
  }

  return result.data.createUser.user;
};
