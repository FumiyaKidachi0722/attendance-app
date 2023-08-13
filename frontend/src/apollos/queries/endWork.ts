import { gql } from "@apollo/client";

export const END_WORK_MUTATION = gql`
  mutation EndWork($userName: String!, $time: String!) {
    endWork(attendanceData: { userName: $userName, time: $time }) {
      message
    }
  }
`;
