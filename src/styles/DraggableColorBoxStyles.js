import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'move',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.08 ? 'rgba(255,255,255, 0.8)' : 'rgba(0,0,0,0.6',
    position: 'absolute',
    width: '94%',
    left: 0,
    bottom: 0,
    padding: '10px',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontSize: 12,
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer'
  }
};

export default styles;
