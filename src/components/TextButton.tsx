import { Link } from 'react-router-dom';
import useThemeStore from 'stores/ThemeStore';
import styled from 'styled-components';
import { dark, light } from 'styles/Theme';

type TextButtonProps = {
  text: string;
  link: string;
};

const TextButton = ({ text, link }: TextButtonProps) => {
  const { theme } = useThemeStore();
  const themeMode = theme === 'light' ? light : dark;

  return (
    <TextStroke>
      <Text
        to={link}
        style={{
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: themeMode.colors.text,
          cursor: 'none',
        }}
      >
        {text}
      </Text>
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
  transition:
    color 0.5s ease,
    -webkit-text-stroke-color 0.5s ease;
  :hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Text = styled(Link)`
  color: ${(props) => props.theme.colors.background};
  transition: color 0.5s ease;
  text-decoration: none;
`;

export default TextButton;
