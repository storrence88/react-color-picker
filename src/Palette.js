import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
  }

  changeLevel = (level) => {
    this.setState({ level });
  };

  changeFormat = (value) => {
    this.setState({ format: value });
  };

  render() {
    const { level, format } = this.state;
    const { classes } = this.props;
    const { colors, emoji, paletteName, id } = this.props.palette;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        id={color.id}
        colors={color.colors}
        key={color.id}
        paletteId={id}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
