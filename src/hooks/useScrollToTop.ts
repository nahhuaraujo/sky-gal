import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollTo } from '../util/scroll.util';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0);
  }, [location]);
};
