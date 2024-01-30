import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useThemeStore from 'stores/ThemeStore';
import styled, { ThemeProvider } from 'styled-components';
import { light, dark } from 'styles/Theme';
import Home from 'components/pages/Home';
import { ReactComponent as CursorImg } from 'assets/images/cursor.svg';
import { ReactComponent as FloatingImg } from 'assets/images/floating.svg';
import NotSupport from 'components/pages/NotSupport';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from 'components/pages/NotFound';

const App = () => {
  const { theme } = useThemeStore();
  const themeMode = theme === 'light' ? light : dark;

  const [cursor, setCursor] = React.useState({ x: 0, y: 0 });
  const [trailingFirst, setTrailingFirst] = React.useState({ x: 0, y: 0 });
  const [trailingSecond, setTrailingSecond] = React.useState({ x: 0, y: 0 });

  const [isWidthEnough, setIsWidthEnough] = React.useState(
    window.innerWidth > 768,
  );

  //disable app when window width is less than 768px
  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsWidthEnough(false);
      } else {
        setIsWidthEnough(true);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setCursor({ x: e.pageX, y: e.pageY });
      setTrailingFirst({ x: e.pageX, y: e.pageY });
      setTrailingSecond({ x: e.pageX, y: e.pageY });
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <Cursor
          animate={{
            x: cursor.x,
            y: cursor.y,
            transition: { type: 'just' },
          }}
        >
          <CursorImg
            fill={theme === 'light' ? '#4b4b4b' : '#fffafa'}
            stroke={theme === 'light' ? '#fffafa' : '#4b4b4b'}
          />
        </Cursor>
        <Trailing
          animate={{
            x: trailingFirst.x + 16,
            y: trailingFirst.y + 16,
            transition: { type: 'spring', mass: 1 },
          }}
        />
        <Trailing
          animate={{
            x: trailingSecond.x + 24,
            y: trailingSecond.y + 24,
            transition: { type: 'spring', mass: 1.5 },
          }}
        />
        <Main>
          {isWidthEnough ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          ) : (
            <NotSupport />
          )}
        </Main>
        <Footer>
          <h1>@ binibin.des</h1>
        </Footer>
        <Floating>
          <FloatingImg stroke={theme === 'light' ? '#fffafa' : '#4b4b4b'} />
        </Floating>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const Cursor = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  z-index: 999;
`;

const Trailing = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.text};
  pointer-events: none;
  z-index: 998;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
  cursor: none;
`;

const Footer = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  padding-top: 16px;

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

const Floating = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 0px 10px 0px ${(props) => props.theme.colors.text};
  position: fixed;
  bottom: 48px;
  right: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.5s ease,
    box-shadow 0.5s ease;
  cursor: none;
`;
export default App;
