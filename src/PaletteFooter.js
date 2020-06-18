import React from 'react';

export default function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className='Palette-footer'>
      <span className='emoji'>{emoji}</span>
      {paletteName}
    </footer>
  );
}
