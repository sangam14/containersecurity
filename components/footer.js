import React from "react";
import Gh from "./github";
import Tw from "./twitter";
import Li from "./linkedin";
import GitHubButton from 'react-github-btn'

export default function Footer({ twitter, linkedin, github }) {
  return (
    <footer className="footer">
      <ul className="socials">
        {twitter ? (
          <li className="social">
            <a href={`https://twitter.com/${twitter}`}>
              <Tw />
            </a>
          </li>
        ) : null}
        {github ? (
          <li className="social">
            <a href={`https://github.com/${github}`}>
              <Gh />
            </a>
          </li>
        ) : null}
        {linkedin ? (
          <li className="social">
            <a href={`https://linkedin.com/in/${linkedin}`}>
              <Li />
            </a>
          </li>
        ) : null}
        <li className="social">
          <div className="terms">
            <p>Code Samples and Excercises Licensed Under Apache 2.0</p>
           
          </div>

          <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fkubedaily.com%2Fcontainersecurity%2F"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fkubedaily.com%2Fcontainersecurity%2F&labelColor=%23f47373&countColor=%23697689&style=flat" /></a>
        </li>
      </ul>
      <GitHubButton href="https://github.com/sangam14/containersecurity" data-color-scheme="no-preference: light; light: light_high_contrast; dark: dark_dimmed;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star sangam14/containersecurity on GitHub">Star</GitHubButton>

    </footer>
  );
}
