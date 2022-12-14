import { useState } from 'react';
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
          <button onClick={closeDropdown}>Copy link</button>
          <button onClick={closeDropdown}>Facebook</button>
          <button onClick={closeDropdown}>Instagram</button>
          <button onClick={closeDropdown}>LinkedIn</button>
        </S.ShareButtonActions>
      </S.ShareButtonDropdown>
    </S.ShareButton>
  );
};

export default ShareButton;
