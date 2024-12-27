import { useForm } from '../hook/useForm';

export const FormWithCustoomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario Con Hook</h1>
      <hr />
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={username}
        onChange={onInputChange}
      />
      <br />
      <input
        type='email'
        name='email'
        placeholder='ejemplo@google.com'
        value={email}
        onChange={onInputChange}
      />
      <br />
      <input
        type='password'
        name='password'
        placeholder='Contraseña'
        value={password}
        onChange={onInputChange}
      />
      <br />
      <button onClick={onResetForm}>Reset Form</button>
    </>
  );
};
