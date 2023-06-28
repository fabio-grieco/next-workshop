import {Pokemon} from "@/models/Pokemon";
import PokemonCard from "@/components/PokemonCard";

interface Props {
    pokemons: Pokemon[]
}

export default function PokemonGrid({ pokemons }: Props) {
    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}