import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useThemeStore from 'stores/ThemeStore';
import styled, { ThemeProvider } from 'styled-components';
import { light, dark } from 'styles/Theme';
import Home from 'components/pages/Home';
import { ReactComponent as CursorImg } from 'assets/images/cursor.svg';

const App = () => {
  const { theme } = useThemeStore();
  const themeMode = theme === 'light' ? light : dark;

  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [trailingFirst, setTrailingFirst] = React.useState({ x: 0, y: 0 });
  const [trailingSecond, setTrailingSecond] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setCursor({ x: e.pageX, y: e.pageY });
      setTrailingFirst({ x: e.pageX, y: e.pageY });
      setTrailingSecond({ x: e.pageX, y: e.pageY });
    });
  });

  return (
    <ThemeProvider theme={themeMode}>
      <Cursor
        animate={{
          x: cursor.x,
          y: cursor.y,
          transition: { type: 'just' },
        }}
      >
        <CursorImg fill={theme === 'light' ? '#4b4b4b' : '#fffafa'} />
      </Cursor>
      <Trailing
        animate={{
          x: trailingFirst.x + 16,
          y: trailingFirst.y + 16,
          transition: { type: 'spring', mass: 1 },
        }}
      ></Trailing>
      <Trailing
        animate={{
          x: trailingSecond.x + 24,
          y: trailingSecond.y + 24,
          transition: { type: 'spring', mass: 1.5 },
        }}
      ></Trailing>
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  );
};

const Cursor = styled(motion.div)`
  position: fixed;
  pointer-events: none;
`;

const Trailing = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.text};
  pointer-events: none;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  transition: background-color 0.5s ease;
  cursor: none;
`;

export default App;
