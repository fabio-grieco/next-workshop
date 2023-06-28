import Image from "next/image";
import EvolutionChain from "@/components/EvolutionChain";
import {Pokemon} from "@/models/Pokemon";

interface Props {
    pokemon: Pokemon
}

export default function PokemonInfo({pokemon}: Props) {
    return <div className={"pokemon-detail"}>
        <div className="name">{pokemon.name}</div>
        <Image
            src={`https://github.com/pokeapi/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png?raw=true`}
            alt={pokemon.name}
            height={256}
            width={256}
            className={"image"}
        />
        <div className="description">{pokemon.description}</div>
        <EvolutionChain pokemon={pokemon}/>
    </div>
}