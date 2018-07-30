import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../../../utils';
import { Row } from 'reactstrap';
import FormInput from '../../common/form/FormInput';

class UsersForm extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    })
  };

  static defaultProps = {
    errors: {
      name: '',
      email: ''
    }
  };

  render() {
    const {
      user,
      onChange,
      errors
    } = this.props;
    const isNameInvalid = !isEmpty(errors.name);
    const isEmailInvalid =  !isEmpty(errors.email);
    const emailFeedback = !isEmpty(errors.email) ? errors.email : '';

    return (
      <div>
        <div className="container">
          <Row>
            <section>
              <form>
                <FormInput
                  inputId="name"
                  label="Name"
                  onChange={onChange}
                  value={user.name}
                  name="name"
                  placeholder="Full Name"
                  required={true}
                  invalid={isNameInvalid}
                  feedback={errors.name}
                />
                <FormInput
                  inputId="email"
                  label="Email"
                  onChange={onChange}
                  value={user.email}
                  name="email"
                  placeholder="Email"
                  required={true}
                  invalid={isEmailInvalid}
                  feedback={emailFeedback}
                />
                <FormInput
                  inputId="skypeId"
                  label="Skype Id"
                  onChange={onChange}
                  value={user.skypeId}
                  name="skypeId"
                  placeholder="skype Id"
                />
                <FormInput
                  inputId="phone"
                  label="Phone Number"
                  onChange={onChange}
                  value={user.phone}
                  name="phone"
                  placeholder="Phone Number"
                />
              </form>
            </section>
          </Row>
        </div>
      </div>
    );
  }
}

export default UsersForm;
