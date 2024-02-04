import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useThemeStore from 'stores/ThemeStore';
import { dark, light } from 'styles/Theme';

type PageButtonProps = {
  text: string;
  link: string;
  align: string;
};

const PageButton = ({ text, link, align }: PageButtonProps) => {
  const { theme } = useThemeStore();
  const themeMode = theme === 'light' ? light : dark;

  return (
    <Container
      style={{
        left: align === 'left' ? '0' : 'unset',
        right: align === 'right' ? '0' : 'unset',
      }}
    >
      <TextStroke
        style={{
          transform: align === 'left' ? 'rotate(90deg)' : 'rotate(-90deg)',
        }}
      >
        <Text
          to={link}
          style={{
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: themeMode.colors.text,
            cursor: 'none',
            transform: align === 'left' ? 'rotate(-90deg)' : 'rotate(90deg)',
          }}
        >
          {text}
        </Text>
      </TextStroke>
    </Container>
  );
};

const Container = styled.div`
  width: 144px;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextStroke = styled.div`
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 9.6px;
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

export default PageButton;
