import useThemeStore from 'stores/ThemeStore';
import styled from 'styled-components';
import { ReactComponent as Sun } from 'assets/images/sun.svg';
import { ReactComponent as Moon } from 'assets/images/moon.svg';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Container onClick={() => toggleTheme()}>
      <Circle>{theme === 'light' ? <Sun /> : <Moon />}</Circle>
    </Container>
  );
};

const Container = styled.div`
  width: 144px;
  height: 64px;
  border-radius: 32px;
  background: ${(props) => props.theme.colors.toggle_bg};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.theme.name === 'light' ? 'flex-start' : 'flex-end'};
  transition: justify-content 0.5s ease;
`;

const Circle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background};
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
`;

export default ThemeToggle;
