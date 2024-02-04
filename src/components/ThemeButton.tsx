import useThemeStore from 'stores/ThemeStore';
import styled from 'styled-components';
import { ReactComponent as Sun } from 'assets/images/sun_light.svg';
import { ReactComponent as Moon } from 'assets/images/moon_dark.svg';

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Container onClick={() => toggleTheme()}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Container>
  );
};

const Container = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: ${(props) => props.theme.colors.toggle_bg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: justify-content 0.5s ease;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 990;
`;

export default ThemeButton;
