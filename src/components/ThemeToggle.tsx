import useThemeStore from 'stores/ThemeStore';
import styled, { ThemeProvider } from 'styled-components';
import { light, dark } from 'styles/Theme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  const themeMode = theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={themeMode}>
      <Container onClick={() => toggleTheme()}></Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 144px;
  height: 64px;
  border-radius: 32px;
  background: ${(props) => props.theme.colors.toggle_bg};
`;
export default ThemeToggle;
