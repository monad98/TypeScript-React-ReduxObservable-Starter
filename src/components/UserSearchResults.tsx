import * as React from 'react';
import { Link } from 'react-router-dom';
import {User} from '../reducers/userResults';

interface Props {
  results: Array<User>;
  loading: boolean;
}

export default function UserSearchResults({
  results,
  loading
}: Props) {
  return (
    <ul style={{
      opacity: loading ? 0.3 : 1
    }}>
      {results.map(result => (
        <li key={result.id}>
          <Link to={`/repos/${result.login}`}>
            {result.login}
          </Link>
        </li>
      ))}
    </ul>
  );
}
