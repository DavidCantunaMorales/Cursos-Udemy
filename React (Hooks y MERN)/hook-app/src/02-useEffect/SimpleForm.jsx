import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'david',
    email: 'david@google.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target; // Desestructuracion del target
    setFormState({
      ...formState, // Copia los atributos
      [name]: value, // Asigna el name con el value correspondiente
    });
  };

  // Usar un useEffect de acuerdo a la
  useEffect(() => {
    console.log('email');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
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

      {username === 'david2' && <Message />}
    </>
  );
};
