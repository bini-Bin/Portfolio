import styled from 'styled-components';

type TextButtonProps = {
  text: string;
  onClick: () => void;
};

const TextButton = ({ text, onClick }: TextButtonProps) => {
  return (
    <TextStroke>
      <Text onClick={onClick}>{text}</Text>
    </TextStroke>
  );
};

const TextStroke = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6.4px;
  text-transform: uppercase;
  margin: 0;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.text};
  z-index: 2;
  :hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Text = styled.h1`
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6.4px;
  text-transform: uppercase;
  margin: 0;
  color: ${(props) => props.theme.colors.background};
  z-index: 1;
`;

export default TextButton;
