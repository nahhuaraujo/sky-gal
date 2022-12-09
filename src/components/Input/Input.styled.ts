import styled from 'styled-components';
import { defaultPaddingValue, mainColorMid } from '../../styles/global-styled-css';

export const Input = styled.div`
  margin-bottom: 1rem;

  label {
    width: fit-content;
    display: block;
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    height: 150px;
    min-height: 100px;
    max-height: 180px;
    border-left: 2px solid black;
    border-top: 2px solid black;
    padding: ${defaultPaddingValue};
    color: inherit;
    display: inline-block;
    resize: vertical;
    background-color: ${mainColorMid};
  }

  input {
    padding: ${defaultPaddingValue};
    color: inherit;
    background-color: ${mainColorMid};
  }
`;
