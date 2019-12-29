import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SocialButton} from './socialButton';
import {TwitterButton} from './twitterButton';
import {FacebookButton} from './facebookButton';
import * as serviceWorker from './serviceWorker';
import {IconBar} from './iconBar';

ReactDOM.render( 
  <div>
    <FacebookButton/>
    <TwitterButton/> 
    <IconBar orientation="vertical" />
  </div>, 
  document.getElementById('root'));

serviceWorker.unregister();
