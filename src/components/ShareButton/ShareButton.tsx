import { useState } from 'react';
import { FacebookShareButton, LinkedInShareButton, LinkShareButton } from '../';
import * as S from './ShareButton.styled';

interface IProps {
  id?: number;
}

const ShareButton = (props: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const openDropdown = () => {
    setIsVisible(true);
  };

  const closeDropdown = () => {
    setIsVisible(false);
  };

  return (
    <S.ShareButton>
      <S.Button onClick={openDropdown}>Share</S.Button>
      <S.ShareButtonDropdown>
        <S.ButtonDropback isVisible={isVisible} onClick={closeDropdown} />
        <S.ShareButtonActions isVisible={isVisible}>
          <LinkShareButton id={props.id} closeDropdown={closeDropdown} />
          <FacebookShareButton id={props.id} closeDropdown={closeDropdown} />
          <LinkedInShareButton id={props.id} closeDropdown={closeDropdown} />
        </S.ShareButtonActions>
      </S.ShareButtonDropdown>
    </S.ShareButton>
  );
};

export default ShareButton;
