import * as S from './Spinner.styled';
import BarLoader from 'react-spinners/BarLoader';

const Spinner = () => {
  return (
    <S.Spinner>
      <BarLoader color='yellow' />
    </S.Spinner>
  );
};

export default Spinner;
