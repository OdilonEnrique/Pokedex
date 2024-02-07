import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useQueryPokemonPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const searchParams = useSearchParams();

  async function getPokemonPage({ page = 1, limit = 30 }) {
    const offset = (page - 1) * limit;
    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemonPromises = data.results.map(async (pokemon: { url: string }) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    const pokemonData = await Promise.all(pokemonPromises);

    const totalPokemon = data.count;
    const totalPagesAPI = Math.ceil(totalPokemon / limit);

    if (totalPages != totalPagesAPI) {
      setTotalPages(totalPagesAPI);
    }

    return pokemonData as Pokemon[];
  }

  function nextPage() {
    setPage((prevValue) => prevValue + 1);
    navigate(`?page=${page + 1}`);
  }

  function prevPage() {
    setPage((prevValue) => prevValue - 1);
    navigate(`?page=${page - 1}`);
  }

  useEffect(() => {
    const pageQuery = Number(searchParams[0].get("page"));

    setPage(pageQuery || 1);
  }, [searchParams]);

  const query = useQuery({
    queryKey: ["getPokemonPage", page, limit],
    queryFn: () => getPokemonPage({ page, limit }),
  });

  return {
    ...query,
    page,
    totalPages,
    setLimit,
    nextPage,
    prevPage,
  };
}
