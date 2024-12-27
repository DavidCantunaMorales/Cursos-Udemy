import { useCounter } from '../hook/useCounter';
import { useFetch } from '../hook/useFetch';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información del Pokemon:</h1>
      <hr />

      {hasError && (
        <p style={{ color: 'red' }}> ⚠️Error: No se pudo cargar el Pokémon</p>
      )}

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button onClick={() => (counter > 1 ? decrement() : null)}>
        Anterior
      </button>
      <button onClick={() => increment()}>Siguiente</button>
    </>
  );
};
