import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

class FormInput extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func,
    label: PropTypes.string,
    inputId: PropTypes.string,
    invalid: PropTypes.bool,
    required: PropTypes.bool,
    feedback: PropTypes.string
  };

  static defaultProps = {
    required: false,
    invalid: false
  };

  render() {
    const { label, inputId } = this.props;
    const asteristk = this.props.required ? '*' : '';

    return (
      <FormGroup>
        <Label>{label}{asteristk}</Label>
        <label
          htmlFor={inputId}
          className="sr-only"
        >{label}</label>
        <Input
          id={inputId}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          invalid={this.props.invalid}
        />
        <FormFeedback>{this.props.feedback}</FormFeedback>
      </FormGroup>
    );
  }
}

export default FormInput;
