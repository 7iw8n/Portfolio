import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/svgs/index";
import CategoryBtn from "./CategoryBtn";

const Header = () => {
  return (
    <Container>
      <Logo />
      <CategoryBtn />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0rem;
  gap: 3.7rem;
`;
