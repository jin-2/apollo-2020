import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <div>
      {loading && <p>loading...</p>}
      {!loading &&
        data.movies &&
        data.movies.map((movie) => <Movie key={movie.id} id={movie.id} />)}
    </div>
  );
};
