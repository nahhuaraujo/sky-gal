import { useScrollToTop } from '../../hooks';

interface IProps {
  children: React.ReactNode;
}

const TopScrollHOC = (props: IProps) => {
  useScrollToTop();
  return <>{props.children}</>;
};

export default TopScrollHOC;
