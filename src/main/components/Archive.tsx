import styled from "@emotion/styled";
import { Github, Velog, Favicon_Logo } from "../assets/svgs";
import { GITHUB, VELOG, PORTFOLIO } from "../constants/PROJECT_CONSTANTS";

const Archive = () => {
  return (
    <Container>
      <Title>ARCHIVES</Title>
      <ArchiveBox>
        <ArchiveTitle>
          <Github />
          <Name>Github</Name>
        </ArchiveTitle>
        <ArchiveLink href="https://github.com/7iw8n">
          https://github.com/7iw8n
        </ArchiveLink>
        <ArchiveContent>{GITHUB}</ArchiveContent>
      </ArchiveBox>
      <ArchiveBox>
        <ArchiveTitle>
          <Velog />
          <Name>Velog</Name>
        </ArchiveTitle>
        <ArchiveLink href="https://velog.io/@gkswldnjs78/">
          https://velog.io/@gkswldnjs78/
        </ArchiveLink>
        <ArchiveContent>{VELOG}</ArchiveContent>
      </ArchiveBox>
      <ArchiveBox>
        <ArchiveTitle>
          <Favicon_Logo />
          <Name>Portfolio</Name>
        </ArchiveTitle>
        <ArchiveLink href="https://www.nungil.com/">
          https://www.nungil.com
        </ArchiveLink>
        <ArchiveContent>{PORTFOLIO}</ArchiveContent>
      </ArchiveBox>
    </Container>
  );
};

export default Archive;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5rem 11rem 14rem 11rem;
  color: ${({ theme }) => theme.colors.black};
  gap: 5rem;
`;

const Title = styled.span`
  ${({ theme }) => theme.fonts.displayM};
`;

const ArchiveBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 2rem;
  gap: 3rem;
`;

const ArchiveTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Name = styled.span`
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.white};
`;

const ArchiveLink = styled.a`
  ${({ theme }) => theme.fonts.bodyM};
  color: #bebbbb;
`;

const ArchiveContent = styled.span`
  ${({ theme }) => theme.fonts.bodyL};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
