import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./style";
import { useQueryPokemonDetails } from "../../hooks/useQueryPokemonDetails";
import { useEffect } from "react";

export function Details() {
  const { name } = useParams();

  const { data, isLoading, error } = useQueryPokemonDetails(name!);

  const navigate = useNavigate();

  if (error) console.error(error);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      {isLoading && <span className="feedbackLoading">Loading...</span>}

      {!isLoading && error && <span className="feedbackLoading">Error...</span>}

      {data && (
        <div className="boxDetails">
          <button onClick={() => navigate(-1)} className="buttonBackPage">
            &lt; Voltar
          </button>

          <div className="pokemonImage">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
            />
          </div>

          <div className="boxStatus">
            <strong>
              #{data.id} {data.name}
            </strong>
          </div>
        </div>
      )}
    </Container>
  );
}
