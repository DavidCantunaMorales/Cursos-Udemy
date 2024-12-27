export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section>
      <h2>
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => (
          <img
            key={sprite}
            src={sprite}
            alt={name}
          />
        ))}
      </div>
    </section>
  );
};
