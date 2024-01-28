import TextButton from 'components/TextButton';
import ThemeToggle from 'components/ThemeToggle';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Column>
        <Row>
          <DisplayLarge>PORTF</DisplayLarge>
          <ThemeToggle />
          <DisplayLarge>LIO</DisplayLarge>
        </Row>
        <Row>
          <TextButton
            text="ABOUT"
            onClick={() => {
              console.log('about');
            }}
          />
          <TextButton
            text="WORK"
            onClick={() => {
              console.log('work');
            }}
          />
        </Row>
      </Column>
      <Footer>
        <h1>@ binibin.des</h1>
      </Footer>
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

const DisplayLarge = styled.h1`
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 9.6px;
  margin: 0;
`;

const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
  }
`;

export default Home;
