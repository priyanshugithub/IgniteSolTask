import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function SimpleList(props) {
  const { items = [], onSelect, className } = props;

  return (
    <List className={className} component="nav" aria-label="Book Genres">
      {items.map(item => (
        <ListItem
          button
          key={`/books/${item}`}
          className="list-item"
          onClick={() => onSelect(item)}
        >
          <ListItemText primary={item} />
          <ArrowForwardIcon className="list-arrow-forward" />
        </ListItem>
      ))}
    </List>
  );
}