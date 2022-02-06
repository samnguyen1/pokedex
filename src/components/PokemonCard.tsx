import React from "react";
import { Pokemon } from "../model/Pokemon";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

interface PokemonProps {
  id: number;
  pokemon: Pokemon[];
  isLoading: boolean;
}

const style = makeStyles({
  img: {
    maxWidth: "150",
    maxHeight: "150",
    objectFit: "fill",
    align: "center",
  },
  progress: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "235px",
  },
});

const PokemonCard: React.FC<PokemonProps> = (props: PokemonProps) => {
  const useStyles = style();

  let pokemon: Pokemon = {
    id: 0,
    sprite: "",
    name: "",
    types: [],
    abilities: [],
  };

  for (var i in props.pokemon) {
    if (props.pokemon[i].id === props.id) {
      pokemon = {
        id: props.pokemon[i].id,
        sprite: props.pokemon[i].sprite,
        name: props.pokemon[i].name,
        types: props.pokemon[i].types,
        abilities: props.pokemon[i].abilities,
      };
    }
  }

  if (props.isLoading) {
    return <CircularProgress className={useStyles.progress} size={100} />;
  } else {
    return (
      <div>
        <CardMedia
          className={useStyles.img}
          component="img"
          height="200"
          image={pokemon.sprite}
          alt={pokemon.name}
        />
        <h2>{pokemon.name}</h2>
        <h3>{pokemon.types.join("/")}</h3>
        <small>Abilities: {pokemon.abilities.join(", ")}.</small>
      </div>
    );
  }
};

export default PokemonCard;
