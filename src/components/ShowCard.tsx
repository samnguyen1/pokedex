import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { idText } from "typescript";
import { nextPokemon, prevPokemon, showPokemon } from "../_redux/actions";

const ShowCard = (props: any) => {

  return (
    <div>
      YOUR ID: <span>{props.id}</span>
      <button id="prev" onClick={props.prevPokemon}>
        PREV
      </button>
      <button id="next" onClick={props.nextPokemon}>
        NEXT
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state)
  return{
    id: state.id
  };
};



export default connect(mapStateToProps,[prevPokemon, nextPokemon])(ShowCard)
