import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./style";
import { useQueryPokemonDetails } from "../../hooks/useQueryPokemonDetails";
import { useEffect } from "react";
import { CardType } from "../../components/CardType";
import pokeball from "../../assets/pokeball.png";

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
            &lt; voltar
          </button>

          <div className="pokemonImage">
            <img
              src={data.sprites.other["official-artwork"].front_default || pokeball}
              alt={data.name}
            />
          </div>

          <div className="boxStatus">
            <strong>
              #{data.id} {data.name}
            </strong>

            <div className="sizePokemon">
              <span>Height: {data.height}0cm</span>
              <span>Weight: {data.weight}kg</span>
            </div>

            <div className="boxTypes">
              {data.types.map((type) => {
                return <CardType key={type.type.name} type={type.type.name} size={16} />;
              })}
            </div>
          </div>

          <div className="boxStats">
            {data.stats.map((status) => {
              return (
                <div className="stats" key={status.stat.name}>
                  <span className="statsName">{status.stat.name}</span>
                  <progress value={status.base_stat} max={200} />
                  <span className="statsValue">{status.base_stat}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}
