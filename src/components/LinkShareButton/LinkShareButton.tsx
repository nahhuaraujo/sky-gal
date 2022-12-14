import { BsLink } from 'react-icons/bs';
import * as S from './LinkShareButton.styled';

interface IProps {
  closeDropdown: () => void;
}

const LinkShareButton = (props: IProps) => {
  const clickHandler = () => {
    navigator.clipboard.writeText(`${window.location.href}/${1}`);
    alert('Link copied!');
    props.closeDropdown();
  };
  return (
    <S.LinkShareButton>
      <button onClick={clickHandler} title='Copy link'>
        <BsLink />
      </button>
    </S.LinkShareButton>
  );
};

export default LinkShareButton;
