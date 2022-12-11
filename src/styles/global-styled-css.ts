import { css } from 'styled-components';

export const mainColorDark = '#827aa1';
export const mainColorMid = '#b5819f';
export const mainColorLight = '#cc7991';
export const secondaryColorDark = '#ec8b8d';
export const secondaryColorMid = '#f0a78b';
export const secondaryColorLight = '#f2edb8';

export const defaultPaddingValue = '0.5rem 1rem';
export const defaultFontSizeValue = '2.5rem';
export const secondaryFontSizeValue = '1.5rem';

const border = css`
  padding: ${defaultPaddingValue};
  border: 1px solid black;
  border-collapse: collapse;
  border-color: ${mainColorMid};
`;
export const tableBorder = css`
  width: 70%;
  margin: 1rem auto 0;
  table-layout: fixed;
  ${border}

  td, th {
    ${border}
  }
`;

export const defaultLinkButtonStyle = css`
  position: relative;
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  cursor: pointer;
  transition: 400ms;

  :hover {
    background-color: ${mainColorLight};
  }
  :active {
    background-color: inherit;
    color: inherit;
  }

  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${secondaryColorLight};
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.3s ease;
  }
  :hover::before {
    transform: scaleX(1);
  }
`;

export const defaultLinkTextStyle = css`
  display: inline;
  text-decoration: none;
  color: inherit;

  :hover {
    color: ${mainColorLight};
  }
`;

export const defaultFontHeader = css`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const defaultPageStyle = css`
  margin: 1rem 2rem 0;
  padding-bottom: 4rem;
  min-width: min-content;
`;

export const defaultButtonStyle = css`
  border: 1px solid ${secondaryColorLight};
  border-radius: 1rem;
  padding: ${defaultPaddingValue};
  color: ${secondaryColorLight};
  background-color: ${mainColorMid};
  cursor: pointer;
  transition: 300ms;

  :hover {
    background-color: ${mainColorLight};
  }
  :active {
    background-color: ${mainColorMid};
    color: inherit;
  }
`;
