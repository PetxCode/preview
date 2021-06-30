import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SVG from "./SVG";

// #1F82E8 #935BC0 #AE395A

const HomeScreen = () => {
  const textColor = useRef();
  const textColor1 = useRef();
  const textColor2 = useRef();
  const [counter, setCounter] = useState(0);

  // const myColor = ["#1F82E8", "black", "black"];
  // const myColor1 = ["black", "#935BC0", "black"];
  // const myColor2 = ["black", "black", "#AE395A"];

  const myColor = ["#1F82E8", "black", "black"];
  const myColor1 = ["black", "#935BC0", "black"];
  const myColor2 = ["black", "black", "#AE395A"];

  useEffect(() => {
    textColor.current.style.color = myColor[counter % myColor.length];
    textColor.current.style.transition = "all 350ms";

    textColor1.current.style.color = myColor1[counter % myColor.length];
    textColor1.current.style.transition = "all 350ms";

    textColor2.current.style.color = myColor2[counter % myColor.length];
    textColor2.current.style.transition = "all 350ms";
  }, [counter]);

  useEffect(() => {
    setInterval(() => {
      setCounter((el) => el + 1);
    }, 3000);
  }, []);

  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Text1 ref={textColor}>Develop.</Text1>
          <Text2 ref={textColor1}>Preview.</Text2>
          <Text3 ref={textColor2}>Ship.</Text3>

          <ButtonWrapper>
            <Button1>Start Deploying</Button1>
            <Button2>Get a Demo </Button2>
          </ButtonWrapper>

          <SVGWrapper>SVG</SVGWrapper>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default HomeScreen;

const SVGWrapper = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  width: 40rem;
  /* background-color: gold; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
const Button1 = styled.div`
  height: 60px;
  width: 18rem;
  border: 1px solid white;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 1px;
  border-radius: 5px;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
  }
`;
const Button2 = styled.div`
  height: 60px;
  width: 18rem;
  border: 1px solid lightgray;
  background-color: white;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 1px;
  border-radius: 5px;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

const Text1 = styled.div`
  font-size: 150px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: -8px;
`;
const Text2 = styled.div`
  font-size: 150px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: -8px;
`;
const Text3 = styled.div`
  font-size: 150px;
  font-weight: bold;
  font-family: Poppins;
  letter-spacing: -8px;
`;

const Block = styled.div`
  height: 70px;
  width: 60%;
  background: linear-gradient(90deg, red, blue);
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50rem;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

const Text = styled.div`
  font-size: 100px;
  font-weight: bold;
  background: -webkit-linear-gradient(180deg, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
