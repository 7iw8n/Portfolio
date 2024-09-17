import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "../../styles/slick.css";
import "../../styles/slick-theme.css";
import {
  nungil1,
  nungil2,
  nungil3,
  nungil4,
  nungil5,
  nungil6,
  nungil7,
  likelion1,
  lieklion2,
  likelion3,
  giljobe1,
  giljobe2,
  giljobe3,
} from "../assets/images";
import { NUNGIL, LIKELION, GILJOBE } from "../constants/PROJECT_CONSTANTS";

const Projects = () => {
  const nungilImages = [
    nungil1,
    nungil2,
    nungil3,
    nungil4,
    nungil5,
    nungil6,
    nungil7,
  ];
  const likelionImages = [likelion1, lieklion2, likelion3];
  const giljobeImages = [giljobe1, giljobe2, giljobe3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "liner",
  };

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
        <Title>PROJECTS</Title>
        <ProjectWrapper>
          <ProjectBox>
            <Slider {...settings}>
              {nungilImages.map((img, index) => (
                <ProjectImg key={index} src={img} alt={`nungil${index}`} />
              ))}
            </Slider>
            <ProjectIntro>
              <ProjectTitle>눈길</ProjectTitle>
              <ProjectPeriod>2023.12 ~</ProjectPeriod>
              <ProjectContent>{NUNGIL}</ProjectContent>
              <ProjectLink href="https://www.nungil.com/">
                https://www.nungil.com
              </ProjectLink>
            </ProjectIntro>
          </ProjectBox>
          <ProjectBox>
            <Slider {...settings}>
              {likelionImages.map((img, index) => (
                <img key={index} src={img} alt={`likelion${index}`} />
              ))}
            </Slider>
            <ProjectIntro>
              <ProjectTitle>멋쟁이사자처럼 숭실대 사이트</ProjectTitle>
              <ProjectPeriod>2024.01 ~ 2024.02</ProjectPeriod>
              <ProjectContent>{LIKELION}</ProjectContent>
              <ProjectLink href="https://likelionssu.com/">
                https://likelionssu.com/
              </ProjectLink>
            </ProjectIntro>
          </ProjectBox>
          <ProjectBox>
            <Slider {...settings}>
              {giljobeImages.map((img, index) => (
                <img key={index} src={img} alt={`giljobe${index}`} />
              ))}
            </Slider>
            <ProjectIntro>
              <ProjectTitle>길JOB이</ProjectTitle>
              <ProjectPeriod>2023.05 ~ 2023.08</ProjectPeriod>
              <ProjectContent>{GILJOBE}</ProjectContent>
              <ProjectLink href="https://giljob-e.vercel.app/">
                https://giljob-e.vercel.app/
              </ProjectLink>
            </ProjectIntro>
          </ProjectBox>
        </ProjectWrapper>
      </Container>
    </motion.div>
  );
};

export default Projects;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 11rem 14rem 11rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1200px) {
    padding: 5rem 5rem 14rem 5rem;
  }
`;

const Title = styled.span`
  ${({ theme }) => theme.fonts.displayM};
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 5rem;
`;

const ProjectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;

  .slick-slider {
    width: 50%;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    .slick-slider {
      width: 100%;
    }
    .slick-slider {
      width: 100%;
    }
  }
`;

const ProjectImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectTitle = styled.span`
  ${({ theme }) => theme.fonts.heading4}
`;

const ProjectPeriod = styled.span`
  ${({ theme }) => theme.fonts.bodyL}
  color: #a39f9f;
`;

const ProjectContent = styled.span`
  height: 85%;
  padding-top: 2rem;
  ${({ theme }) => theme.fonts.bodyL};
  line-height: 3rem;
`;

const ProjectLink = styled.a`
  ${({ theme }) => theme.fonts.bodyM}
  color: #bebbbb;
`;
