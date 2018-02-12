import React, { Component } from 'react';
import './styles/About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <header className="header">
          <h1><code>anne zhou</code></h1>
          <div className="social__wrapper">
            <a href="https://github.com/annezhou920" target={'_blank' /* eslint-disable-next-line */}>
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://twitter.com/_annezhou?lang=en" target={'_blank' /* eslint-disable-next-line */}>
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/annezhou920/" target={'_blank' /* eslint-disable-next-line */}>
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://medium.com/@_annezhou" target={'_blank' /* eslint-disable-next-line */}>
              <i className="fab fa-medium fa-lg"></i>
            </a>
            <a href="mailto:anne.zhou920@gmail.com" target={'_blank' /* eslint-disable-next-line */}>
              <i className="far fa-envelope fa-lg"></i>
            </a>
          </div>
        </header>
        <section className="content__wrapper">
          <main className="main__container">
            <div className="vertical__line"></div>
            <ol>
              <li>
                <code>&#8193;&#8193;
                  <span className="span__text--blue">class</span>
                  <span className="span__text--black"> Person</span> &#123;
                </code>
              </li>
              <li>
                <code>&#8193;&#8193;&#8193;
                  <span className="span__text--red">constructor</span> (
                  <span className="span__text--black">job, lovesDonuts</span>) &#123;
                </code>
              </li>
              <li>
                <code>&#8193;&#8193;&#8193;&#8193;
                  <span className="span__text--blue">this</span>.job = job;
                </code>
              </li>
              <li>
                <code>&#8193;&#8193;&#8193;&#8193;
                  <span className="span__text--blue">this</span>.lovesDonuts = lovesDonuts;
                </code>
              </li>
              <li><code>&#8193;&#8193;&#8193;}</code></li>
              <li><code>&#8193;&#8193;}</code></li>
              <li>
                <code>&#8193;&#8193;
                  <span className="span__text--blue">const </span>
                  <span className="span__text--black">anne</span> =
                  <span className="span__text--blue"> new</span>
                  <span className="span__text--black"> Person</span>(
                  <span className="span__text--green">'Frontend Developer'</span>,
                  <span className="span__text--blue"> true</span>);
                </code>
              </li>
            </ol>
          </main>
          <div className="tools">
            <ul>
              <li>
                <h1><span className="javascript">JavaScript</span></h1>
              </li>
              <li>
                <h1><span className="node">Node</span></h1>
              </li>
              <li>
                <h1><span className="express">Express</span></h1>
              </li>
              <li>
                <h1><span className="react">React</span></h1>
              </li>
              <li>
                <h1><span className="redux">Redux</span></h1>
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
              <li>
                <h1><span className="angular">Angular</span></h1>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
