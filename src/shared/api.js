import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";


const TEAM_ID = "Grupp1"; // Change this to your own team id

// Query example
const teamEventMeanQuery = gql`
  query TeamEventMean($team: String!) {
    teamEventMean(team: $team) {
      type
      value
    }
  }
`;
export const useTeamEventMean = () => {
  const { data } = useQuery(
    teamEventMeanQuery,
    {
      variables: { team: TEAM_ID },
      pollInterval: 1000,
    }
  );

  return data?.teamEventMean;
};

// Mutation example
const addTeamEventMutation = gql`
  mutation AddTeamEvent($input: TeamEventInput) {
    addTeamEvent(input: $input) {

      timestamp
    }
  }
`;
export const useAddTeamEvent = () => {
  const [addTeamEvent] =
    useMutation(addTeamEventMutation);

  return (eventType,data) =>
    addTeamEvent({
      variables: {
        input: {
          team: "GruppEmo",
          type: eventType,
          data: data
        },
      },
    });
};

// Query + subscription example
const teamStateQuery = gql`
  query TeamState($team: String!) {
    teamState(team: $team) {
      state {
        value
        key
      }
    }
  }
`;

const teamLatestEvents = gql`
  query TeamLatestEvents($team: String!) {
    teamLatestEvents(team: $team) {
      team
      type
      data
      timestamp
    }
  }
`;

const teamStateSubscription = gql`
  subscription TeamStateChange($team: String!) {
    teamStateChange(team: $team) {
      state {
        value
        key
      }
    }
  }
`;
const teamEventSubscription = gql`
  subscription TeamEventsChange($team: String!) {
    teamEventsChange(team: $team) {
      team
      type
      data
      timestamp
    }
  }
`;

export const useTeamState = () => {
  const { data: initial } = useQuery(teamStateQuery, {
    variables: { team: TEAM_ID },
  });

  const { data: updated } = useSubscription(
    teamStateSubscription,
    {
      variables: { team: TEAM_ID },
    }
  );

  return updated?.teamStateChange ?? initial?.teamState;
};


export const useTeamEvent = () => {

  const { data: initial } = useQuery(teamLatestEvents, {
    variables: { team: "Grupp1_carla" },
  });

  const { data: updated } = useSubscription(
    teamEventSubscription,
    {
      variables: { team: "Grupp1_carla" },
    }
  );

  return updated?.teamEventsChange;
};

export const useTeamEvent1 = () => {

  const { data: initial } = useQuery(teamLatestEvents, {
    variables: { team: "Grupp1_DF" },
  });

  const { data: updated } = useSubscription(
    teamEventSubscription,
    {
      variables: { team: "Grupp1_DF" },
    }
  );

  return updated?.teamEventsChange;
};

export const useTeamEvent2 = () => {

  const { data: initial } = useQuery(teamLatestEvents, {
    variables: { team: "GruppOlovSeated" },
  });

  const { data: updated } = useSubscription(
    teamEventSubscription,
    {
      variables: { team: "GruppOlovSeated" },
    }
  );

  return updated?.teamEventsChange ?? initial?.teamLatestEvents;
};