import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderStyled = styled.div`
  margin-top: 150px;
`;

const HeaderFirst = () => (
  <div>
    <header className="App-header">
      <HeaderStyled>
        <Header
          as="h2"
          content="Running group tracking app"
          inverted
          style={{
            backgroundColor: "black",
            padding: "0.5em",
            fontWeight: "normal",
            borderRadius: "10px",
          }}
        />
      </HeaderStyled>
      <p>
        <Button
          secondary
          style={{
            margin: "10px",
          }}
        >
          Sign up
        </Button>
        <Link to="loginform">
          <Button
            secondary
            style={{
              margin: "10px",
            }}
          >
            Log in
          </Button>
        </Link>
      </p>
    </header>
  </div>
);

export default HeaderFirst;
