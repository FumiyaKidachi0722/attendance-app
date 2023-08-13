import { gql } from "@apollo/client";

export const START_WORK_MUTATION = gql`
  mutation StartWork($userName: String!, $time: String!) {
    startWork(attendanceData: { userName: $userName, time: $time }) {
      message
    }
  }
`;
