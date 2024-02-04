import Footer from 'components/Footer';
import TextButton from 'components/TextButton';
import ThemeToggle from 'components/ThemeToggle';
import styled from 'styled-components';

const Home = () => {
  const Text = "Seongbin's";

  return (
    <>
      <Column>
        <Row>
          <Title>{Text}</Title>
        </Row>
        <Row>
          <DisplayLarge>PORTF</DisplayLarge>
          <ThemeToggle />
          <DisplayLarge>LIO</DisplayLarge>
        </Row>
        <Row>
          <TextButton text="about" link="/about" />
          <TextButton text="work" link="/work" />
        </Row>
      </Column>
      <Footer text="Seongbin's Portfolio" />
    </>
  );
};

export const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2.4px;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
  transition: color 0.5s ease;
`;

const DisplayLarge = styled.h1`
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 9.6px;
  margin: 0;
`;

export default Home;
