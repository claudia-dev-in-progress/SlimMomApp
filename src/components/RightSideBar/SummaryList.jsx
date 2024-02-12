import { List, ListItem, Typography } from "@mui/material";

export const SummaryList = () => {
  return (
    <List component="ol">
      <ListItem className="css.listItem">
        <Typography>Left</Typography>
        <Typography paddingLeft="10px">kcal</Typography>
      </ListItem>
      <ListItem>
        <Typography>Consumed </Typography>
        <Typography paddingLeft="10px"> kcal</Typography>
      </ListItem>
      <ListItem>
        <Typography>Daily rate </Typography>
        <Typography paddingLeft="10px">kcal</Typography>
      </ListItem>
      <ListItem>
        <Typography>n of normal</Typography>
        <Typography paddingLeft="10px">%</Typography>
      </ListItem>
    </List>
  );
};
