import { BsLinkedin } from 'react-icons/bs';
import * as S from './LinkedInShareButton.styled';

interface IProps {
  closeDropdown: () => void;
}

const LinkedInShareButton = (props: IProps) => {
  return (
    <S.LinkedInShareButton>
      <a
        onClick={props.closeDropdown}
        target='_blank'
        rel='noreferrer'
        href={`https://linkedin.com/shareArticle?url=${window.location.href}/${1}`}
        title='Share on LinkedIn'
      >
        <BsLinkedin />
      </a>
    </S.LinkedInShareButton>
  );
};

export default LinkedInShareButton;
