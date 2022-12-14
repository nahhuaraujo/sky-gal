import { BsLink } from 'react-icons/bs';
import * as S from './LinkShareButton.styled';

interface IProps {
  id?: number;
  closeDropdown: () => void;
}

const LinkShareButton = (props: IProps) => {
  const url = props.id ? `${window.location.href}/${props.id}` : `${window.location.href}`;

  const clickHandler = () => {
    navigator.clipboard.writeText(url);
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
