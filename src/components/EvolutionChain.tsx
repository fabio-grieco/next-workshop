import {Pokemon} from "@/models/Pokemon";
import PokemonGrid from "@/components/PokemonGrid";

interface Props {
    pokemon: Pokemon
}

async function fetchPokemons(ids: number[]): Promise<Pokemon[]> {
    return Promise.all(ids.map(id => fetch(`http://localhost:3001/pokemons/${id}`).then((res) => res.json())));
}

export default async function EvolutionChain({pokemon}: Props) {
    const pokemons = await fetchPokemons(pokemon.evolutionChain)
    return <PokemonGrid pokemons={pokemons}/>
}