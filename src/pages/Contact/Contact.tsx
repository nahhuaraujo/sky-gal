import * as S from './Contact.styled';
import { Input } from '../../components';
import { useForm } from '../../hooks';

const Contact = () => {
  const { formValues, changeHandler, clearFormValues } = useForm({
    email: '',
    opinion: '',
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearFormValues();
    alert('This feature will be available soon!');
  };

  return (
    <S.Contact>
      <p>Your opinion matters, share it with us:</p>
      <S.ContactForm onSubmit={submitHandler}>
        <Input id='email' value={formValues.email} type='email' onChange={changeHandler} />
        <Input id='opinion' value={formValues.opinion} type='textarea' onChange={changeHandler} />
        <div>
          <button>Send</button>
        </div>
      </S.ContactForm>
    </S.Contact>
  );
};

export default Contact;
