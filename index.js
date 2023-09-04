import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import U_val from './components/u_val';
import Tag from './components/Tag';

ReactDOM.render(
  <div>
    <p className='inline-block'>New Post</p>
    <U_val />
    <br></br>
    <br></br>
    <Tag />
  </div>,
  document.getElementById("root")
);
