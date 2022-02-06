import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./components/PokemonCard";
import Buttons from "./components/Buttons";
import { getPokemon } from "./_redux/reducers/pokemonReducer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import AppBar from "@mui/material/AppBar";
import { CardActions } from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  const pokemonState = useSelector((state: any) => state);

  return (
    <div className="App">
      <AppBar position="static">SAM NGUYEN</AppBar>
      <Card
        sx={{
          maxWidth: 345,
          maxHeight: 500,
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          margin: "auto",
          borderTop: 1,
          borderColor: "red",
          borderWidth: "thick"
        }}
      >
        <CardHeader avatar = {<DateRangeIcon/>} title="Pokemon" />
        <CardContent>
          <PokemonCard
            id={pokemonState.pokemon.id}
            pokemon={pokemonState.pokemon.pokemon}
            isLoading={pokemonState.pokemon.isLoading}
          />
        </CardContent>
        <CardActions>
          <Buttons props={pokemonState.pokemon} />
        </CardActions>
      </Card>
    </div>
  );
};

export default App;
