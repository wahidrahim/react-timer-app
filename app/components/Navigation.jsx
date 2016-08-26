var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li className="menu-text">
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/wahidrahim">Wahid Rahim</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Navigation;
