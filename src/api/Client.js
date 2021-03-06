import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GRAPHQL_URI } from "./ApiConstans";

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const getFilteredTrips = (filter) => {
  filter = `name eq '${filter}'`;
  // Step 5. Filter trip by name -- -- Delete the return ""; code and uncomment
  // the code below to use the GraphQL client with the query getFilteredTripsQuery
  return "";
  // return client.query({
  //   query: getFilteredTripsQuery,
  //   variables: {
  //     filter,
  //   },
  // });
};

export const getUserAccountSitesQuery = gql`
  query myUserAccountSites {
    myUserAccountSites {
      items {
        name
        id
      }
    }
  }
`;

// Step 6. Actions -- Add to the query the necessary code to retrieve the actions
// Step 5. Filter trip by name -- Complete the query. HINT: Take a look to getFilteredTrips in this file
export const getFilteredTripsQuery = "gql``";

// Step 2. Get users -- Complete the query
export const getUsersBySiteQuery = "gql``";

// Step 6. Actions -- Add to the query the necessary code to retrieve the actions
// Step 3. Get, create and delete trips -- Complete the query
export const getTripsQuery = "gql``";

// Step 3. Get, create and delete trips -- Complete the query
export const createTripQuery = "gql``";

// Step 3. Get, create and delete trips -- Complete the query
export const deleteTripQuery = "gql``";

// Step 4. Get, create and delete stages -- Complete the query
export const getTripStagesQuery = "gql``";

// Step 4. Get, create and delete stages -- Complete the query
export const createTripStageQuery = "gql``";

// Step 4. Get, create and delete stages -- Complete the query
export const deleteTripStageQuery = "gql``";
