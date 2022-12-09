import * as S from './Input.styled';

interface IProps {
  id: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({ id, value, type = 'text', onChange }: IProps) => {
  const input =
    type === 'textarea' ? (
      <textarea id={id} value={value} onChange={onChange}></textarea>
    ) : (
      <input id={id} type={type} value={value} onChange={onChange} autoComplete='off' />
    );

  return (
    <S.Input>
      <label htmlFor={id}>{id.charAt(0).toUpperCase().concat(id.slice(1))}</label>
      {input}
    </S.Input>
  );
};

export default Input;
