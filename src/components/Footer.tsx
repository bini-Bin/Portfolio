import styled from 'styled-components';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <FooterDiv>
      <h1>[ {text} ]</h1>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  padding-top: 16px;
  cursor: none;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
    margin: 0;
    transition: color 0.5s ease;
  }
`;

export default Footer;
