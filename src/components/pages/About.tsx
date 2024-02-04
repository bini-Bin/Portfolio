import styled from 'styled-components';
import PageButton from 'components/PageButton';
import ThemeButton from 'components/ThemeButton';
import Footer from 'components/Footer';

const About = () => {
  return (
    <>
      <Container>
        <PageButton text="home" link="/" align="left" />
        <PageButton text="work" link="/work" align="right" />
      </Container>
      <ThemeButton />
      <Footer text={''} />
    </>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default About;
