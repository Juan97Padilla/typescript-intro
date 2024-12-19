const pokemonIds = [1,20,30,34,60];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

const pikachu: Pokemon = {
    id: 1,
    name: 'Pikachu'
}

const charmander: Pokemon = {
    id: 2,
    name: "charmander"
}

const pokemons: Pokemon[] = [];
pokemons.push(pikachu, charmander)

export{pokemonIds, pikachu, charmander, pokemons}