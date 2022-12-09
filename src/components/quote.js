import React from 'react';
import './quote.css';

const Quote = () => (
  <div className="homeContainer">
    <div className="content">
      <div className="contentTitle">
        <h1>Quotes</h1>
      </div>
      <div className="contentDescription">
        <p>
          Mathematics is not about numbers, equations, computations,
          or algorithms: it is about understanding. - William Paul thurston.
          <br />
          <br />
        </p>
      </div>
    </div>
    <div className="footer">
      <p>
        Developed by
        <a href="https://github.com/momotsow/math-magicians"> KP Mkansi</a>
      </p>
    </div>
  </div>
);

export default Quote;
