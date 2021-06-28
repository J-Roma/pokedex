import axios from "axios";

export const getPokemon = async () => {
    const data = []
    await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0')
        .then(res => {
            data.push(res.data)
        })
        .catch(err => {
            alert(err)
        })
    console.log(data[0]);
    return data[0]

}


export const getPokemonDetails = async (pokemon) => {
    const data = [];
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => {
            data.push(res.data)
        })
    return data[0]

}

