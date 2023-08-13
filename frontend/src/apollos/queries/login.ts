// /root/dev/attendance-app/frontend/src/queries/login.ts;
import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($userName: String!, $password: String!) {
    login(name: $userName, password: $password) {
      token
      userName
    }
  }
`;
