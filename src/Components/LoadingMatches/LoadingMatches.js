import React from "react";
import {
  LoadingContainer,
  LoadMatch,
  Name,
  Score,
  LoadFragment,
} from "./LoadingMatches.styled";

const LoadingMatches = ({ Gap }) => {
  const times = Array.from(Array(20).keys());

  return (
    <LoadFragment>
    <LoadingContainer Gap={Gap}>
      {times.map(() => {
        return (
          <LoadMatch>
            <Name>
              <div></div>
              <span></span>
            </Name>
            <Score></Score>
            <Name>
              <span></span>
              <div></div>
            </Name>
          </LoadMatch>
        );
      })}
    </LoadingContainer>
    </LoadFragment>
  );
};

export default LoadingMatches;
