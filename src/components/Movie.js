import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default ({id})=> <MovieEl>
  <Link to={`/${id}`}>
  {id}
  </Link>
</MovieEl>;

const MovieEl = styled.div`
  padding: 20px;
  border: 1px solid orange;
  border-radius: 10px;
`;