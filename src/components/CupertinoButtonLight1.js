import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonLight1(props) {
  return (
    <Container {...props}>
      <Caption>{props.caption || "Button"}</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #EFEFF4;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #000;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonLight1;
