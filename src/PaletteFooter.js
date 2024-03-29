import React from 'react';
import styles from './styles/PaletteFooterStyles';
import { withStyles } from '@material-ui/styles';

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      <span className={classes.emoji}>{emoji}</span>
      {paletteName}
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
