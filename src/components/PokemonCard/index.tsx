import { Pokemon } from "../../@types/pokemon";
import { CardType } from "../CardType";
import { Container } from "./style";

type Props = {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <Container>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <strong>
        #{pokemon.id} {pokemon.name}
      </strong>

      <div className="boxTypes">
        {pokemon.types.map((type) => {
          return <CardType type={type.type.name} key={type.type.name}></CardType>
        })}
      </div>
    </Container>
  );
}
