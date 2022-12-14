import { BsLinkedin } from 'react-icons/bs';
import * as S from './LinkedInShareButton.styled';

interface IProps {
  id?: number;
  closeDropdown: () => void;
}

const LinkedInShareButton = (props: IProps) => {
  const url = props.id
    ? `https://linkedin.com/shareArticle?url=${window.location.href}/${props.id}`
    : `https://linkedin.com/shareArticle?url=${window.location.href}`;
  return (
    <S.LinkedInShareButton>
      <a onClick={props.closeDropdown} target='_blank' rel='noreferrer' href={url} title='Share on LinkedIn'>
        <BsLinkedin />
      </a>
    </S.LinkedInShareButton>
  );
};

export default LinkedInShareButton;
