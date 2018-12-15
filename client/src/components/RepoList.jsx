import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'

const RepoList = (props) => (
  <div>
    <h4> Top {props.repos.length} Repos </h4>
      <table>
      	<tbody>
	      	<tr>
            <th>username</th>
            <th>repo name</th>
	        	<th>url</th>
            <th>Fork Count</th>
            <th>User image</th>
	        </tr>
        	{props.repos.map(repo => <RepoListEntry repo={repo}/>)}
        </tbody>
      </table>
  </div>
)

export default RepoList;
