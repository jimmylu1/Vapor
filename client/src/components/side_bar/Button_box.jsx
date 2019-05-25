import React from "react";
import styled from "styled-components";

const Button_layout = styled.div`
  display: flex;
  flex-direction: row;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 16px;
`;
const Share = styled.button`
  color: #67c1f5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 72px;
  height: 32px;
  border-radius: 2px;
  border-color: #254055;
  padding: 0px 15px 0px 15px;
  background: #254055;
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const Embed = styled.button`
  color: #67c1f5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 79px;
  height: 32px;
  border-radius: 2px;
  border-color: #254055;
  padding: 0px 15px 0px 15px;
  background: #254055;
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const Flag = styled.button`
  color: #67c1f5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 72px;
  height: 32px;
  border-radius: 2px;
  border-color: #254055;
  padding: 0px 15px 0px 15px;
  background: #254055;
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

class Button_box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Button_layout>
        <Share>Share</Share>
        <Embed>Embed</Embed>
        <Flag>Report</Flag>
      </Button_layout>
    );
  }
}

export default Button_box;
