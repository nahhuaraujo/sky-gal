import styled from 'styled-components';
import { defaultButtonStyle, defaultPageStyle, secondaryFontSizeValue } from '../../styles/global-styled-css';

export const Contact = styled.div`
  ${defaultPageStyle}
  font-size: ${secondaryFontSizeValue};
`;

export const ContactForm = styled.form`
  padding: 2rem;

  > div:last-child {
    display: flex;
    justify-content: end;
  }

  button {
    ${defaultButtonStyle}
  }
`;
