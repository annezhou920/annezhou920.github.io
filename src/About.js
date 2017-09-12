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
          <main className="main__container">
            <div className="vertical__line"></div>
            <ol>
              <li><h4>
                 &#8193;<span className="span__text--blue">class</span>
                <span className="span__text--black"> Person</span> &#123;
              </h4></li>
              <li><h4>
                &#8193;&#8193;<span className="span__text--red">constructor</span> (
                <span className="span__text--black">job, lovesDonuts</span>) &#123;
              </h4></li>
              <li><h4>
                &#8193;&#8193;&#8193;<span className="span__text--blue">this</span>.job = job;
              </h4></li>
              <li><h4>
                &#8193;&#8193;&#8193;<span className="span__text--blue">this</span>.lovesDonuts = lovesDonuts;
              </h4></li>
              <li><h4>&#8193;&#8193;}</h4></li>
              <li><h4>&#8193;</h4></li>
              <li><h4>&#8193;&#8193;<span className="span__text--red">codes</span>()&#123;</h4></li>
              <li><h4>
                &#8193;&#8193;&#8193;
                <span className="span__text--blue">return this</span>.
                <span className="span__text--red"><a href="/projects">clickMe()</a></span>;
              </h4></li>
              <li><h4>&#8193;&#8193;}</h4></li>
              <li><h4>&#8193;}</h4></li>
              <li><h4>
                &#8193;<span className="span__text--blue">const </span>
                <span className="span__text--black">Anne</span> =
                <span className="span__text--blue"> new</span>
                <span className="span__text--black"> Person</span>(
                <span className="span__text--green">'Software Developer'</span>,
                <span className="span__text--blue"> true</span>);
              </h4></li>
            </ol>
          </main>
          <div className="sidebar">
            <ul>
              <li>
                <h1><span className="javascript">JavaScript</span></h1>
              </li>
              <li>
                <h1><span className="react">React</span></h1>
              </li>
              <li>
                <h1><span className="redux">Redux</span></h1>
              </li>
              <li>
                <h1><span className="node">Node</span></h1>
              </li>
              <li>
                <h1><span className="express">Express</span></h1>
              </li>
              <li>
                <h1><span className="html">HTML5</span></h1>
              </li>
              <li>
                <h1><span className="css">CSS3</span></h1>
              </li>
              <li>
                <h1><span className="sass">SASS</span></h1>
              </li>
              <li>
                <h1><span className="postgresql">PostgreSQL</span></h1>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
