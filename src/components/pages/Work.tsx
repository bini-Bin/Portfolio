import styled from 'styled-components';
import PageButton from 'components/PageButton';
import ThemeButton from 'components/ThemeButton';

const Work = () => {
  return (
    <>
      <Container>
        <PageButton text="home" link="/" align="left" />
        <PageButton text="about" link="/about" align="right" />
      </Container>
      <ThemeButton />
    </>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Work;
