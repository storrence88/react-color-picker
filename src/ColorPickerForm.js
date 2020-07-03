import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

const styles = {
  picker: {
    width: '100% !important',
    marginTop: '2rem'
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem'
  },
  colorNameInput: {
    width: '100%',
    height: '55px'
  }
};

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: 'teal', newColorName: '' };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );

    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  };

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          className={classes.picker}
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.colorNameInput}
            placeholder='Color Name'
            value={newColorName}
            name='newColorName'
            variant='filled'
            margin='normal'
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'This field is required',
              'Color name must be unique',
              'Color already used'
            ]}
          />
          <Button
            className={classes.addColor}
            variant='contained'
            color='primary'
            disabled={paletteIsFull}
            style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
            type='submit'
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
