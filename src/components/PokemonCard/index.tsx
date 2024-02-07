import { Pokemon } from "../../@types/pokemon";
import { CardType } from "../CardType";
import { Container } from "./styles";
import pokeball from "../../assets/pokeball.png";

type Props = {
  pokemon: Pokemon;
};

export function PokemonCard({ pokemon }: Props) {
  return (
    <Container>
      <img src={pokemon.sprites.other["official-artwork"].front_default || pokeball} />

      <strong>
        #{pokemon.id} {pokemon.name}
      </strong>

      <div className="boxTypes">
        {pokemon.types.map((type) => {
          return <CardType type={type.type.name} key={type.type.name} />;
        })}
      </div>
    </Container>
  );
}
