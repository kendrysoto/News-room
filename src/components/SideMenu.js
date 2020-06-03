import React from 'react';
import '../style/SideMenu.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchSearch } from '../redux/AsyncActions';
import PropTypes from "prop-types";


function SideMenu({ params, fetchSearch }) {
  let _input2;
  useEffect(() => {
    fetchSearch()
  }, [])
  const mystyle = {
    color: "#FFFFFF",
    fontSize: "1em",
  };

  return (
    <div>
      <div class="SideMenu-container">
        <h1 class="SideMenu-h1">NOTICIERO</h1>
      </div >
      <nav>
        <div id="menuA">
          <div href="#" class="showhim"><span class="menumov"> &#8803;</span>
            <div class="showme">
              <li><Link to="/" >INICIO</Link></li>
              <li><Link to="/Politics" >POLITICA</Link></li>
              <li><Link to="/International" >INTERNACIONAL</Link></li>
              <li><Link to="/Technology">TECNOLOGIA</Link></li>
              <li><Link to="/Show" >ESPECTACULOS</Link></li>
              <li><Link to="/Sport" >DEPORTES</Link></li>
            </div>
          </div>
        </div>

        <ul class="elivi">
          <li class="fac"><Link to="/" >INICIO</Link></li>
          <li class="fac"><Link to="/Politics" >POLITICA</Link></li>
          <li class="fac"><Link to="/International" >INTERNACIONAL</Link></li>
          <li class="fac"><Link to="/Technology" >TECNOLOGIA</Link></li>
          <li class="fac"><Link to="/Show" >ESPECTACULOS</Link></li>
          <li class="fac"><Link to="/Sport">DEPORTES</Link></li>
        </ul>
        <div className="box-input">
          <button
            disabled={_input2 == ""}
            class="SideMenu-button"
            type="button"
            onClick={() => {
              fetchSearch(_input2.value)
              _input2.value = ""
            }}
          >
            Buscar
              </button>
          <input
            class="SideMenu-input"
            type="text"
            placeholder="Buscar..."
            value={_input2}
            ref={node => (_input2 = node)}
          />
        </div>
      </nav>
    </div>
  )
}
const mapStatetoProps = state => {
  return {
    params: state.params,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: (searchParams) => dispatch(fetchSearch(searchParams)),
  }
}

SideMenu.propTypes = {
  fetchSearch: PropTypes.func,
};



export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(SideMenu);
