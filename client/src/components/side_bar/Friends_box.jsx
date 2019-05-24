import React from "react";
import styled from "styled-components";

const Break = styled.hr`
  margin-top: 10px;
  margin-bottom: 1px;
  background: "#273747";
  color: #263647;
`;

const Game_relevance = styled.div`
  display: flex;
  flex: 1;
  background-color: #0c1119;
  color: #dcdddd;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 18px;
`;

const Hours_played = styled.div`
  color: #969696;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 9px 18px;
`;

const User_reviews = styled.span`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: #66c0f4;
`;

class Friends_box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Game_relevance>Is this game relevant to you?</Game_relevance>
        <Hours_played>
          100 hours played
          <span>
            <Break />
          </span>
        </Hours_played>
        <Hours_played>
          User reviews:
          <User_reviews>
            Very Positive
            <span>
              <Break />
            </span>
          </User_reviews>
        </Hours_played>
        <Hours_played>
          In the Top Sellers
          <span>
            <Break />
          </span>
        </Hours_played>
        <Hours_played>
          Recommended By 5 Friends
          <span>
            <Break />
          </span>
        </Hours_played>
        <Hours_played>
          <User_reviews>5 Friends</User_reviews> have played this game:
        </Hours_played>
      </div>
    );
  }
}

export default Friends_box;
