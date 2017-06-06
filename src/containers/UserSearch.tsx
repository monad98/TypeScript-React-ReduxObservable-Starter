import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserSearchInput from '../components/UserSearchInput';
import UserSearchResults from '../components/UserSearchResults';
import {searchUsers, SearchUsers} from '../actions';
import {User} from '../reducers/userResults';
import {RouteComponentProps} from 'react-router';

export interface Props extends RouteComponentProps<any> {
  query: string;
  results: User[];
  searchInFlight: boolean;
  searchUsers: (query: string) => SearchUsers;
}

class UserSearch extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  componentDidMount() {
    this.handleUserSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.query !== nextProps.query) {
      this.handleUserSearch(nextProps.query);
    }
  }

  handleUserSearch(query: string) {
    this.props.searchUsers(query);
  }

  render() {
    const {
      query,
      results,
      searchInFlight
    } = this.props;
    return (
      <div>
        <Link
          to="/admin"
          style={{
            display: 'block',
            marginBottom: 10
          }}>
          Admin Panel
        </Link>
        <UserSearchInput
          defaultValue={query}
          onChange={this.handleUserSearch}
        />
        <UserSearchResults
          results={results}
          loading={searchInFlight}
        />
      </div>
    );
  }
}

export default connect(
  ({ routing, userResults, searchInFlight }) => ({
    query: '',
    results: userResults,
    searchInFlight
  }),
  { searchUsers }
)(UserSearch);
