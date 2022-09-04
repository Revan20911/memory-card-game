import uniqid from "uniqid";


const Cards = [

    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        title: "Pikachu",
    },
     {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        title: "Charmander",
    },
    {
        id: uniqid(),
        img: "https://i.pinimg.com/originals/b2/01/18/b201181cd337130bbec6d9f9f00a2932.png",
        title: "Squirtle",
    },
    {
        id: uniqid(),
        img: "https://cosplayfu-website.s3.amazonaws.com/_Upload/b/30cm-Bulbasaur-Pokemon-Plush-Toy.jpg",
        title: "Bulbasaur",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074_f2.png",
        title: "Geodude",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        title: "Pidgey",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
        title: "Magikarp",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
        title: "Meowth",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
        title: "Jigglypuff",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
        title: "Machop",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
        title: "Zubat",
    },
    {
        id: uniqid(),
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        title: "Butterfree",
    },
    
]

const Score = [
    
    {
        score: 0,
        highScore: 0,
        arr: [],
    },
    
]

export {Cards, Score};