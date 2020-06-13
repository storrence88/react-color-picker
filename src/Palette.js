import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
  }

  changeLevel = level => {
    this.setState({ level });
  };

  changeFormat = value => {
    this.setState({ format: value });
  };

  render() {
    const { level, format } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className='Palette'>
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        {/* Navbar will go here... */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* Footer will go here... */}
      </div>
    );
  }
}
