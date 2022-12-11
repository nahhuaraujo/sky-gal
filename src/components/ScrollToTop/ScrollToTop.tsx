import { useState } from 'react';
import { scrollTo } from '../../util/scroll.util';
import * as S from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(0);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setScrolled(scrolled);
  };

  window.addEventListener('scroll', toggleVisible);

  const clickHandler = () => {
    scrollTo(0);
  };

  return (
    <S.ScrollToTop>
      <S.Arrow onClick={clickHandler} scrolled={scrolled}>
        ^
      </S.Arrow>
    </S.ScrollToTop>
  );
};

export default ScrollToTop;
