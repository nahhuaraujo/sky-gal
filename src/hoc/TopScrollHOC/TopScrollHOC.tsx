import { useScrollToTop } from '../../hooks';

interface IProps {
  children: React.ReactNode;
}

const TopScrollHOC = (props: IProps) => {
  useScrollToTop();
  return <div>{props.children}</div>;
};

export default TopScrollHOC;
