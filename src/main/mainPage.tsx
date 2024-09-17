import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Header, About, Skill, Projects, Archive } from "./components";
import { keyframes } from "@emotion/react";
const mainPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);

  const title = "안녕하세요\n프론트엔드 개발자\n한지원입니다";

  return (
    <Container>
      <Header
        onCategoryClick={(category: string) => {
          switch (category) {
            case "about":
              aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              break;
            case "skill":
              skillRef.current?.scrollIntoView({ behavior: "smooth" });
              break;
            case "project":
              projectRef.current?.scrollIntoView({ behavior: "smooth" });
              break;
            case "contact":
              archiveRef.current?.scrollIntoView({ behavior: "smooth" });
              break;
            default:
              break;
          }
        }}
      />
      <TitleWrapper>
        <Title>{title}</Title>
        <Scroll>SCROLL DOWN 👽</Scroll>
      </TitleWrapper>
      <Section ref={aboutRef}>
        <About />
      </Section>
      <Section ref={skillRef}>
        <Skill />
      </Section>
      <Section ref={projectRef}>
        <Projects />
      </Section>
      <Section ref={archiveRef}>
        <Archive />
      </Section>
    </Container>
  );
};

export default mainPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const TitleWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 5rem;
`;

const Title = styled.span`
  ${({ theme }) => theme.fonts.displayM}
  text-align: center;
  line-height: 11rem;
  animation: ${fadeIn} 2s ease-in-out;
  font-weight: 700;
`;

const Scroll = styled.button`
  background-color: var(--Grey-grey-50, #f9f9f9);
  border-radius: 14.4rem;
  padding: 2rem;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const Section = styled.div``;
