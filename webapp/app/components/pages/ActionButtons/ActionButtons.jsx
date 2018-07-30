import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  isEmpty,
  isValidUser,
  isUserMatchById
} from '../../../utils';
import { EMAIL_REGEXP } from '../../../constants';
import { selectedUserSelector } from '../../../selectors';
import MsModal from '../../common/modal/MsModal';
import UsersForm from '../UsersForm/UsersForm';

const EMPTY_USER = {
  name: '',
  email: '',
  phone: '',
  skypeId: ''
};

const DEFAULT_USER_MODAL_LABELS = {
  confirmButtonText: 'save'
};

export class ActionButtons extends Component {
  static propTypes = {
    user: PropTypes.object,
    onConfirm: PropTypes.func
  };

  state = {
    actionType: undefined,
    isUserModalOpen: false,
    modalTitle: '',
    modalBody: {},
    modalYesLabel: '',
    errors: {},
    user: {
      ...EMPTY_USER,
      ...this.props.user
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!isUserMatchById(this.props.user, nextProps.user)) {
      this.setState({
        user: {
          ...nextProps.user
        }
      });
    }
  }

  toggle = () => {
    this.setState({
      isUserModalOpen: !this.state.isUserModalOpen
    });
  }

  toggleAddModal = () => {
    this.setState({
      actionType: 'add',
      user: { ...EMPTY_USER }
    }, this.toggle);
  }

  toggleEditModal = () => {
    this.setState({
      actionType: 'edit'
    }, this.toggle);
  }

  toggleDeleteModal = () => {
    this.setState({
      actionType: 'delete'
    }, this.toggle);
  }

  updateUserState = ({ target }) => {
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [target.name]: target.value
      }
    });
  }

  validateForm = () => {
    const { user } = this.state;
    const isValidUsername = !isEmpty(user.name);
    const isValidEmail = EMAIL_REGEXP.test(user.email);
    const errors = {};

    if (!isValidUsername) {
      errors.name = 'User name is required';
    }

    if (!isValidEmail) {
      errors.email = 'Email is invalid';
    }

    this.setState({ errors });

    return errors;
  }

  canSubmitForm() {
    return isEmpty(this.validateForm());
  }

  saveUser = () => {
    if (!this.canSubmitForm()) {
      return;
    }    

    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm(this.state.actionType, this.state.user);
      
      // FIXME add async/await support to sagas, to await for all YIELDS completion
      // with promises we use promise.resolve ONlY when service responded, with sagas and generators
      // it resolves in the initial FORK i.e. not the 3rd yield as required
      this.toggle();
    }
  }

  cancel = () => {
    let user = EMPTY_USER;

    if (isValidUser(this.props.user) === true) {
      user = this.props.user;
    }

    this.setState({
      user: { ...user },
      errors: {}
    }, this.toggle);
  }

  getModalBody({ user, errors, actionType , onChange }) {
    if (actionType === 'delete') {
      return (
        <p>{`Are you sure to delete User ${user.name}`}</p>
      );
    }

    return (
      <UsersForm
        onChange={onChange}
        user={user}
        errors={errors}
      />
    );
  }

  getModalLabels(actionType = 'add') {
    if (actionType === 'delete') {
      return {
        ...DEFAULT_USER_MODAL_LABELS,
        confirmButtonText: 'delete'
      };
    }

    return DEFAULT_USER_MODAL_LABELS;
  }

  render() {
    const modalBody = this.getModalBody({
      actionType: this.state.actionType,
      user: this.state.user,
      errors: this.state.errors,
      onChange: this.updateUserState
    });
    const isUserEditDisabled = isValidUser(this.state.user) === false;
    const modalInfo = {
      ...this.getModalLabels(this.state.actionType),
      title: `${this.state.actionType} User`
    };

    return (
      <div className="user-list-action-buttons">
        <Button
          color="primary"
          onClick={this.toggleAddModal}
        >Add</Button>
        <Button
          color="info"
          disabled={isUserEditDisabled}
          onClick={this.toggleEditModal}
        >Edit</Button>
        <Button
          color="danger"
          disabled={isUserEditDisabled}
          onClick={this.toggleDeleteModal}
        >Delete</Button>
        <MsModal
          okButtonLabel={modalInfo.confirmButtonText}
          cancelButtonLabel='Cancel'
          body={modalBody}
          isOpen={this.state.isUserModalOpen}
          okCallback={this.saveUser}
          cancelCallback={this.cancel}
          modalTitle={modalInfo.title}
        />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    user: selectedUserSelector(state)
  };
}

export default connect(mapStateToProps)(ActionButtons);
