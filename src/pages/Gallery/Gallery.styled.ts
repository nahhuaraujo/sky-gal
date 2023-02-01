import styled from 'styled-components';

export const Gallery = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media (width < 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width < 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
