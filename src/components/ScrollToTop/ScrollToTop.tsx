import { useState } from 'react';
import { scrollTo } from '../../util/scroll.util';
import * as S from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled <= 300) return setIsVisible(false);
    if (scrolled > 300) return setIsVisible(true);
  };

  window.addEventListener('scroll', toggleVisible);

  const clickHandler = () => {
    scrollTo(0);
  };

  return <S.ScrollToTop>{isVisible && <S.Arrow onClick={clickHandler}>^</S.Arrow>}</S.ScrollToTop>;
};

export default ScrollToTop;
