import React from "react";
import styled from "styled-components";

const Languages_layout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 16px;
`;

const Title = styled.div`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #8d969d;
  padding: 0px 10px 10px 0px;
`;

class Languages_box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Languages_layout>
        <Title>Languages:</Title>
      </Languages_layout>
    );
  }
}

export default Languages_box;
