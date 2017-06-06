import * as React from 'react';
import { connect } from 'react-redux';
import Repos from '../components/Repos';
import {requestReposByUser, RequestReposByUser} from '../actions';
import {ReposObject} from '../reducers/reposByUser';
import {RouteComponentProps} from 'react-router';

interface Props extends RouteComponentProps<any> {
  reposByUser: ReposObject;
  user: string;
  requestReposByUser: (user: string) => RequestReposByUser;
}
class ReposByUser extends React.Component<Props, object> {
  componentDidMount() {
    this.props.requestReposByUser(this.props.user);
  }

  render() {
    const {
      reposByUser,
      user
    } = this.props;
    if (!reposByUser[user]) {
      return (
        <p>Loading</p>
      );
    }
    return (
      <Repos
        repos={reposByUser[user]}
        user={user}
      />
    );
  }
}

export default connect(
  ({ reposByUser }, ownProps: any) => ({
    reposByUser,
    user: ownProps.match.params.user
  }),
  { requestReposByUser }
)(ReposByUser);
