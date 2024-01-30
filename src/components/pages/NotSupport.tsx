import styled from 'styled-components';
import { ReactComponent as SadFace } from 'assets/images/sad.svg';
import useThemeStore from 'stores/ThemeStore';

const NotSupport = () => {
  const { theme } = useThemeStore();

  return (
    <Column>
      <SadFace fill={theme === 'light' ? '#4b4b4b' : '#fffafa'} />
      <TitleLarge>
        Sorry, this site is not supported on mobile devices.
      </TitleLarge>
    </Column>
  );
};

export const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleLarge = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.2px;
  margin: 48px 0 0 0;
  text-align: center;
`;

export default NotSupport;
