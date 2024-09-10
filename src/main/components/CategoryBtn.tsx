import styled from "@emotion/styled";

const CategoryBtn = () => {
  return (
    <Container>
      <Button>Home</Button>
      <Button>Projects</Button>
      <Button>About</Button>
      <Button>Contact</Button>
    </Container>
  );
};

export default CategoryBtn;

const Container = styled.div`
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  border-radius: 8rem;
  background-color: ${({ theme }) => theme.colors.black};
  gap: 1.8rem;
`;

const Button = styled.button`
  height: 4.6rem;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  border-radius: 4.8rem;
  font-family: "Labil Grotesk";
  color: ${({ theme }) => theme.colors.white};
`;
