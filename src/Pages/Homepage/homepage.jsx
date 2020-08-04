import React from "react";
import PropTypes from "prop-types";
import List from "../../components/view/list.jsx";
import { makeStyles } from "@material-ui/core";
import './homepage.styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: 300
    }
  }
}));

const HomePage = ({ genres = [], setGenre }) => {
  const classes = useStyles();
  return (
    <div className={classes.root + " home-page"}>
      <h4 className="home-page-title">
        Gutenberg Project
      </h4>
      <h5 className="home-page-sub-title">
        A social cataloging website that allows you to
            freely search its database of books,
                annotations, and reviews.
      </h5>
      <List className={classes.list} items={genres} onSelect={setGenre} />
    </div>
  );
};

HomePage.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default HomePage;