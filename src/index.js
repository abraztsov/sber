import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithubProjects from './components/GithubProjects';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';

ReactDOM.render(<GithubProjects />, document.getElementById('root'));
registerServiceWorker();
