import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";

export function Home() {
  const { data, isLoading, error, nextPage, prevPage, page, totalPages } = useQueryPokemonPage();
  if (error) console.error(error);

  return (
    <Container>
      <h1>{"Bem vindo(a) á Pokédex do Reprograma Jucás"}</h1>
      {isLoading && <span className="feedbackLoading">Loading...</span>}
      {!isLoading && error && <span className="feedbackLoading">Error...</span>}
      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon}></PokemonCard>
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button onClick={prevPage}>
          &lt; Anterior
        </button>

        <span> {String(page).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span>

        <button onClick={nextPage}>
          Próxima &gt;
        </button>
      </div>
    </Container>
  );
}
