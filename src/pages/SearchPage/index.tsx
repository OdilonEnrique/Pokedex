import { Link, useSearchParams } from "react-router-dom";
import { Container } from "./style";
import { useQueryPokemonFiltered } from "../../hooks/useQueryPokemonFiltered";
import { PokemonCard } from "../../components/PokemonCard";

export function SearchPage() {
  const searchParams = useSearchParams();
  const queryPokemonName = searchParams[0].get("q");
  const { data, isLoading, error } = useQueryPokemonFiltered(queryPokemonName!);

  if (error) console.error(error);

  return (
    <Container>
      {isLoading && <span className="feedbackLoading">Loading...</span>}
      {!isLoading && error && <span className="feedbackLoading">Error...</span>}

      {data && (
        <>
          <h1>{`Encontrado ${data.length} resultado(s) para "${queryPokemonName}"`}</h1>

          <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>
        </>
      )}
    </Container>
  );
}
