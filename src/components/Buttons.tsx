import { connect } from "react-redux";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const style = makeStyles({
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  prevButton: {},
  nextButton: {
    marginLeft: "140px",
  },
});

const Buttons = (props: any) => {
  const useStyles = style();
  console.log(props.props.id);
  console.log(props);
  return (
    <div className={useStyles.box}>
      <Box className={useStyles.box}>
        <Button
          className={useStyles.prevButton}
          variant="contained"
          onClick={props.prevPokemon}
          disabled={props.props.id === 1 ? true : false}
          startIcon={<ArrowBackIosIcon />}
        >
          PREV
        </Button>
        <Button
          className={useStyles.nextButton}
          variant="contained"
          onClick={props.nextPokemon}
          disabled={props.props.id === 151 ? true : false}
          endIcon={<ArrowForwardIosIcon />}
        >
          NEXT
        </Button>
      </Box>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchtoProps = (dispatch: any) => {
  return {
    nextPokemon: () => dispatch({ type: "NEXT_POKEMON" }),
    prevPokemon: () => dispatch({ type: "PREV_POKEMON" }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Buttons);
