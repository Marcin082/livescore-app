import React, { useState } from "react";
import { Button, ButtonNav, Center } from "./Navigation.styled.";
import UseMatches from "../../../../Hooks/UseMatches";

const Navigation = ({ dateformat }) => {
  const { getAllMatches, getLiveMatches, getFavMatches } = UseMatches();
  const [activeOption, setActiveOption] = useState("ALL");
  return (
    <Center>
      <ButtonNav>
        <Button
          active={activeOption === "LIVE" ? "true" : ""}
          onClick={() => {
            getLiveMatches(dateformat);
            setActiveOption("LIVE");
          }}
        >
          LIVE
        </Button>
        <Button
          active={activeOption === "MY MATCHES" ? "true" : ""}
          onClick={() => {
            getFavMatches();
            setActiveOption("MY MATCHES");
          }}
        >
          MY MATCHES
        </Button>
        <Button
          active={activeOption === "ALL" ? "true" : ""}
          onClick={() => {
            getAllMatches(dateformat);
            setActiveOption("ALL");
          }}
        >
          ALL
        </Button>
      </ButtonNav>
    </Center>
  );
};

export default Navigation;
