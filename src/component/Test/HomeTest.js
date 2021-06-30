import React from "react";
import styled from "styled-components";

export const HomeTest = () => {
  return (
    <div>
      <Continer>
        <Wrapper>Develop.</Wrapper>
        <Wrapper1>Preview.</Wrapper1>
        <Wrapper2>Ship.</Wrapper2>

        <MyWrap>Peter</MyWrap>
        <Glass>tttr</Glass>
      </Continer>
    </div>
  );
};

const Glass = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 40px;
  width: 20rem;
  /* position: absolute; */
`;

const Continer = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  background-color: #401c40;
  color: white;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  font-size: 100px;
  background: -webkit-linear-gradient(180deg, #1e7fe4, #5dd8da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Wrapper1 = styled.div`
  font-size: 100px;
  background: -webkit-linear-gradient(180deg, #865ec8, #eb5487);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Wrapper2 = styled.div`
  font-size: 100px;
  /* background: -webkit-linear-gradient(180deg, #ee5349, #fac72c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  color: #313131;
  font-size: 45px;
  font-weight: bold;
  position: absolute;
  -webkit-animation: colorchange 20s infinite alternate;
`;

/* #1E7FE4  #5DD8DA */
/* #865EC8   #EB5487 */
/* #EE5349  #FAC72C  */

const MyWrap = styled.div`
  color: #313131;
  font-size: 100px;
  font-weight: bold;
  /* position: absolute; */
  -webkit-animation: colorchange 20s infinite alternate;

  @-webkit-keyframes colorchange {
    0% {
      color: blue;
    }

    10% {
      color: #8e44ad;
    }

    20% {
      color: #1abc9c;
    }

    30% {
      color: #d35400;
    }

    40% {
      color: blue;
    }

    50% {
      color: #34495e;
    }

    60% {
      color: blue;
    }

    70% {
      color: #2980b9;
    }
    80% {
      color: #f1c40f;
    }

    90% {
      color: #2980b9;
    }

    100% {
      color: pink;
    }
  }
`;
