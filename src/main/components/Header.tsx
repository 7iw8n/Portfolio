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

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 2rem 0rem;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 4rem;

  @media (max-width: 600px) {
    position: static; /* 로고 위치를 상위 요소에 맞춰서 위치시키기 위해 변경 */
    margin-bottom: 2rem; /* 로고와 카테고리 버튼 사이의 간격 조정 */
  }
`;
