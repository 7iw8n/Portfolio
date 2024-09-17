import { useState } from "react";
import styled from "@emotion/styled";

type Category = "about" | "skill" | "project" | "contact";

interface CategoryBtnProps {
  onCategoryClick: (category: Category) => void;
}

const CategoryBtn: React.FC<CategoryBtnProps> = ({ onCategoryClick }) => {
  const [isSelected, setIsSelected] = useState<Category>("about");

  const handleClick = (category: Category) => {
    setIsSelected(category);
    onCategoryClick(category);
  };

  return (
    <Container>
      <Button
        isSelected={isSelected === "about"}
        onClick={() => handleClick("about")}
      >
        About
      </Button>
      <Button
        isSelected={isSelected === "skill"}
        onClick={() => handleClick("skill")}
      >
        Skills
      </Button>
      <Button
        isSelected={isSelected === "project"}
        onClick={() => handleClick("project")}
      >
        Projects
      </Button>
      <Button
        isSelected={isSelected === "contact"}
        onClick={() => handleClick("contact")}
      >
        Archive
      </Button>
    </Container>
  );
};

export default CategoryBtn;

const Container = styled.div`
  position: fixed;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  border-radius: 8rem;
  background-color: ${({ theme }) => theme.colors.black};
  gap: 1.8rem;
  z-index: 100;
`;

const Button = styled.button<{ isSelected: boolean }>`
  height: 4.6rem;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  border-radius: 4.8rem;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.black};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  font-weight: 600;
`;
