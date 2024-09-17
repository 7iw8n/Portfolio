import React from "react";
import styled from "@emotion/styled";
import { Logo } from "../assets/svgs/index";
import CategoryBtn from "./CategoryBtn";

interface HeaderProps {
  onCategoryClick: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCategoryClick }) => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <CategoryBtn onCategoryClick={onCategoryClick} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5rem 4rem 0rem 4rem;
  gap: 3.7rem;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 4rem;
`;
