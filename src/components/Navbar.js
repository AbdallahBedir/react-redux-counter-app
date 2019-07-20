import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg'
import { getActiveCounters } from '../redux/selectors';

const Navbar = ({activeCounters}) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      <img src={logo} width="60"/>
        Counters App
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto"></ul>
        <span className="navbar-text">
        <span className="badge badge-secondary">{activeCounters}</span>
        </span>
      </div>
    </nav>
)

const mapStateToProps = state => {
  const activeCounters = getActiveCounters(state)
  return { activeCounters }
}

export default connect(
    mapStateToProps,
    null
)(Navbar)
