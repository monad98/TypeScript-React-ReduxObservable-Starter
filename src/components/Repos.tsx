import * as React from 'react';
import {Repo} from '../reducers/reposByUser';

interface Props {
  repos: Repo[];
  user: string;
}
export default function Repos({ repos, user }: Props) {
  return (
    <ul>
      {repos.length ? repos.map(repo => (
        <li key={repo.id}>
          <a
            href={repo.html_url}
            target="__blank"
          >
            {repo.full_name}
          </a>
        </li>
      )) : (
        <p>{user} has no repos</p>
      )}
    </ul>
  );
}
