export function PokemonCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <strong>{pokemon.name}</strong>
    </div>
  );
}
