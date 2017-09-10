import React, { Component } from 'react';
import './styles/About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <header className="header">
          <h1><code>hello world!</code></h1>
        </header>
        <section className="content__wrapper">
          <div className="sidebar">
            <div className="sidebar__wrapper">
              <h1><span className="javascript">JavaScript</span></h1>
              <h1><span className="react">React</span></h1>
              <h1><span className="redux">Redux</span></h1>
              <h1><span className="node">Node</span></h1>
              <h1><span className="express">Express</span></h1>
              <h1><span className="html">HTML5</span></h1>
              <h1><span className="css">CSS3</span></h1>
              <h1><span className="sass">SASS</span></h1>
              <h1><span className="postgresql">PostgreSQL</span></h1>
            </div>
          </div>
          <main className="main__container">
            <div className="blue__wrapper"></div>
            <h4>
              1|&#8193;<span className="span__text--blue">class</span>
              <span className="span__text--black"> Person</span> &#123;
            </h4>
            <h4>
              2|&#8193;&#8193;<span className="span__text--red">constructor</span> (
              <span className="span__text--black">job, lovesDonuts</span>) &#123;
            </h4>
            <h4>
              3|&#8193;&#8193;&#8193;<span className="span__text--blue">this</span>.job = job;
            </h4>
            <h4>
              5|&#8193;&#8193;&#8193;<span className="span__text--blue">this</span>.lovesDonuts = lovesDonuts;
            </h4>
            <h4>6|&#8193;&#8193;}</h4>
            <h4>7|&#8193;</h4>
            <h4>8|&#8193;&#8193;<span className="span__text--red">codes</span>()&#123;</h4>
            <h4>7|&#8193;}</h4>
            <h4>8|&#8193;</h4>
            <h4>
              9|&#8193;<span className="span__text--blue">const </span>
              <span className="span__text--black">Anne</span> =
              <span className="span__text--blue"> new</span>
              <span className="span__text--black"> Person</span>(
              <span className="span__text--green">'Software Developer'</span>,
              <span className="span__text--blue"> true</span>);
            </h4>
          </main>
        </section>
      </div>
    );
  }
}
