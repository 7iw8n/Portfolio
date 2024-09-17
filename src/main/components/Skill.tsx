import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  Html,
  Css,
  Js,
  Ts,
  StyledComponent,
  Emotion,
  React,
  RN,
} from "../assets/svgs";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <Container>
        <Title>SKILLS</Title>
        <Content>
          <BtnWrapper>
            <LogoBtn>
              <Html />
            </LogoBtn>
            <LogoBtn>
              <Css />
            </LogoBtn>

            <LogoBtn>
              <Js />
            </LogoBtn>
            <LogoBtn>
              <Ts />
            </LogoBtn>
          </BtnWrapper>
          <BtnWrapper>
            <LogoBtn>
              <StyledComponent />
            </LogoBtn>
            <LongLogoBtn>
              <Emotion />
            </LongLogoBtn>
          </BtnWrapper>
          <BtnWrapper>
            <LongLogoBtn>
              <React />
            </LongLogoBtn>
            <LongLogoBtn>
              <RN />
            </LongLogoBtn>
          </BtnWrapper>
        </Content>
      </Container>
    </motion.div>
  );
};

export default Skill;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5rem 11rem 14rem 11rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Title = styled.span`
  ${({ theme }) => theme.fonts.displayM};
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  @media (max-width: 600px) {
    gap: 3rem;
  }
`;

const LogoBtn = styled.button`
  width: 14rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
  border: 2px solid #bbb5b5;
  border-radius: 3rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 600px) {
    width: 9rem;
    height: 9rem;
    padding: 0rem 1.5rem;
  }
`;

const LongLogoBtn = styled.button`
  width: 34rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #bbb5b5;
  border-radius: 3rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 600px) {
    width: 20rem;
    height: 9rem;
    padding: 0rem 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  gap: 10rem;
`;
