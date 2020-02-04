import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { id },
  });
  return (
    <div>
      {data && data.movie && (
        <div>
          <img src={data.movie.medium_cover_image} alt="" />
          <h1>{data.movie.title}</h1>
          <p>
            {data.movie.language} / {data.movie.rating}
          </p>
          <p>{data.movie.description_intro}</p>
        </div>
      )}
    </div>
  );
};
