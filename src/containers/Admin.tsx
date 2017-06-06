import * as React from 'react';
import { connect } from 'react-redux';
import {checkAdminAccess, CheckAdminAccess} from '../actions/index';
import {RouteComponentProps} from 'react-router';

interface Props extends RouteComponentProps<any>  {
  adminAccess: string;
  checkAdminAccess: () => CheckAdminAccess;
}
class Admin extends React.Component<Props, object> {
  componentDidMount() {
    this.props.checkAdminAccess();
  }

  render() {
    if (!this.props.adminAccess) {
      return (
        <p>Checking access...</p>
      );
    }
    if (this.props.adminAccess === 'GRANTED') {
      return (
        <p>Access granted</p>
      );
    }
    return (
      <p>
        Access denied. Redirecting back home.
      </p>
    );
  }
}

export default connect(
  ({ adminAccess }) => ({ adminAccess }),
  { checkAdminAccess }
)(Admin);
