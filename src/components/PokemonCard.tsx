import {Pokemon} from "@/models/Pokemon";
import Image from "next/image";
import Link from "next/link";

interface Props {
    pokemon: Pokemon
}

export default function PokemonCard({pokemon}: Props) {
    return <Link href={`/${pokemon.id}`}>
        <div className={"pokemon-card"}>
            <Image
                src={`https://github.com/pokeapi/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png?raw=true`}
                alt={pokemon.name}
                height={256}
                width={256}
                className={"image"}
            />
            <div className={"name"}>{pokemon.name}</div>
        </div>
    </Link>
}