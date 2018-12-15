import React from 'react';

const RepoListEntry = (props) => (
  <tr>
    <td>{props.repo.username}</td>
    <td>{props.repo.reponame}</td>
    <td><a href={props.repo.url}>{props.repo.url}</a></td>
    <td>{props.repo.forkCount}</td>
    <td><img src= {props.repo.img} height='60px' /></td>
  </tr>
)

export default RepoListEntry;
