import useContactModalStore from 'stores/ContactModalStore';
import styled from 'styled-components';
import { ReactComponent as Instagram } from 'assets/images/insta.svg';
import { ReactComponent as Email } from 'assets/images/email.svg';
import { ReactComponent as Call } from 'assets/images/call.svg';
import useThemeStore from 'stores/ThemeStore';

const ContactModal = () => {
  const { theme } = useThemeStore();
  const { close } = useContactModalStore();
  return (
    <ModalBackground onClick={close}>
      <Modal>
        <Title>Contact</Title>
        <Gap64 />
        <Row>
          <Instagram stroke={theme === 'light' ? '#4b4b4b' : '#fffafa'} />
          <Gap24 />
          <Text>binibin.des</Text>
        </Row>
        <Gap40 />
        <Row>
          <Email stroke={theme === 'light' ? '#4b4b4b' : '#fffafa'} />
          <Gap24 />
          <Text>jsb1129a@gmail.com</Text>
        </Row>
        <Gap40 />
        <Row>
          <Call stroke={theme === 'light' ? '#4b4b4b' : '#fffafa'} />
          <Gap24 />
          <Text>010-4784-5986</Text>
        </Row>
      </Modal>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 997;
  cursor: none;
`;

const Modal = styled.div`
  width: 560px;
  height: 440px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3.6px;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
`;

const Row = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

const Text = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.4px;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
`;

const Gap64 = styled.div`
  width: 64px;
  height: 64px;
`;

const Gap40 = styled.div`
  width: 40px;
  height: 40px;
`;

const Gap24 = styled.div`
  width: 24px;
  height: 24px;
`;

export default ContactModal;
