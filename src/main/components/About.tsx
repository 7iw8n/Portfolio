import styled from "@emotion/styled";
import { motion } from "framer-motion";

const About = () => {
  const introment =
    "안녕하세요.\n함께 일하고 싶은 개발자로 성장하고자\n끊임없이 고민하는 프론트엔드 개발자 한지원입니다.\n늘 기본에 충실하고자 노력하며,\n이를 토대로 앞을 향해 나아가고자 합니다.\n새로운 것을 알아가는 과정에서 큰 성취를 느끼는 호기심 많은 개발자인\n제 포트폴리오를 보러 와주셔서 진심으로 감사드립니다.";
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
        <Title>ABOUT</Title>
        <IntroMent>{introment}</IntroMent>
        <Profile>
          <ProfileBox>
            <Ment>Name</Ment>
            <Content>한지원</Content>
          </ProfileBox>
          <ProfileBox>
            <Ment>Birth</Ment>
            <Content>01.07.08</Content>
          </ProfileBox>
          <ProfileBox>
            <Ment>Mail</Ment>
            <Content>jw4319han@naver.com</Content>
          </ProfileBox>
        </Profile>
      </Container>
    </motion.div>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 11rem 14rem 11rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 600px) {
    padding: 5rem 3rem 7rem 3rem;
  }
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.displayM};
`;

const IntroMent = styled.span`
  ${({ theme }) => theme.fonts.bodyXL}
  text-align: center;
  line-height: 4rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
  }
`;

const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }
`;

const Ment = styled.span`
  ${({ theme }) => theme.fonts.heading4}
`;

const Content = styled.span`
  ${({ theme }) => theme.fonts.bodyXL}
`;
