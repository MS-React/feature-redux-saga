import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Header from './../partials/header/Header';
import ActionButtons from '../ActionButtons/ActionButtons';
import * as usersActions from '../../../actions/usersActions';
import { usersSelector } from '../../../selectors';

import './HomePage.css';

export class HomePage extends Component {
  static propTypes = {
    users: PropTypes.array,
    usersActions: PropTypes.object.isRequired
  };

  state = {
    selectedRow: [],
    user: {}
  };

  componentDidMount() {
    this.props.usersActions.getUsers();
  }

  setSelectedRow = user => {
    this.setState({
      selectedRow: [user.id]
    }, () => {
      this.props.usersActions.selectUser(user);
    });
  }

  handleUserActionType = (type = 'add', user) => {
    const { usersActions } = this.props;
    
    switch(type) {
      case 'add': 
        return usersActions.createUsers(user);
      case 'edit':
        return usersActions.updateUsers(user);
      case 'delete':
        return usersActions.deleteUsers(user);
      default:
        throw new TypeError(`Unhandled User Action Type ${type}`);
    }
  }

  render() {
    const columns = [{
      dataField: 'name',
      text: 'Full Name'
    }, {
      dataField: 'email',
      text: 'Email'
    }, {
      dataField: 'phone',
      text: 'Phone Number'
    }];
    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: '#c8e6c9',
      selected: this.state.selectedRow,
      onSelect: this.setSelectedRow
    };
    const pagination = paginationFactory();
    
    return (
      <div>
        <Header />
        <div className="container">
          <div className="list-header">
            <div className="title-holder">
              <h4>Users List</h4>
            </div>
            <div className="user-list-action-holder">
              <ActionButtons
                user={this.state.user}
                onConfirm={this.handleUserActionType}
              />
            </div>
          </div>
          <BootstrapTable
            keyField="id"
            data={this.props.users}
            columns={columns}
            selectRow={selectRow}
            pagination={pagination}
          />
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) { 
  return {
    users: usersSelector(state)
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
