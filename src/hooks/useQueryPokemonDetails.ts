import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";

async function getPokemon(name: string) {
  const { data } = await API.get(`/pokemon/${name}`);
  return data as Pokemon;
}

export function useQueryPokemonDetails(name: string) {
  const query = useQuery({
    queryKey: [`getPokemon${name}`, name],
    queryFn: () => getPokemon(name),
  });

  return query;
}
