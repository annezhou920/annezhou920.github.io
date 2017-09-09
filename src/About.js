import React, { Component } from 'react';
import './styles/About.css';

export default class About extends Component {
  render() {
    const ampersand = (<span className="ampersand">&</span>);
    return (
      <div className="about">
        <header className="header">
          <h1><code>hello world!</code></h1>
        </header>
        <section className="content__wrapper">
          <div className="blue__wrapper"></div>
          <main className="main__container">
            <h3>
              1|&#8193;<span className="class__text">class</span>
              <span className="person__text"> Person</span> &#123;
            </h3>
            <h3>
              2|&#8193;&#8193;<span className="constructor__text">constructor</span> (
              <span className="person__text">job, </span>) &#123;
            </h3>
          </main>
          <div className="sidebar">
            <div className="sidebar__wrapper">
              <h1>Javascript/ES6{ampersand}</h1>
              <h1>React/Redux{ampersand}</h1>
              <h1>Node{ampersand}</h1>
              <h1>Express{ampersand}</h1>
              <h1>HTML/SASS/CSS{ampersand}</h1>
              <h1>PostgreSQL</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
