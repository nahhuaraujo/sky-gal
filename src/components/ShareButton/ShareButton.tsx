import { useState } from 'react';
import { FacebookShareButton, LinkedInShareButton, LinkShareButton } from '../';
import * as S from './ShareButton.styled';

const ShareButton = () => {
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
          <LinkShareButton closeDropdown={closeDropdown} />
          <FacebookShareButton closeDropdown={closeDropdown} />
          <LinkedInShareButton closeDropdown={closeDropdown} />
        </S.ShareButtonActions>
      </S.ShareButtonDropdown>
    </S.ShareButton>
  );
};

export default ShareButton;
