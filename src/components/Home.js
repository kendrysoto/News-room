import React from 'react';
import '../style/category.css';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchNewsLatest } from '../redux/AsyncActions';
import PropTypes from "prop-types";


function Home({ Data, fetchNewsLatest, error, loading, date }) {
  let _input;
  useEffect(() => {
    fetchNewsLatest(date);
  }, [])
  if (error) {
    return (
      <div className="container">
        <h6>Hubo un error encontrando las noticias</h6>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="container">
        <h6>Cargando...</h6>
      </div>
    );
  }
  return (
    <div>
      <div className="Category-container-input">
        <h1 className="Category-label" >
          BUSCAR POR FECHA
      </h1>
        <input
          className="Category-input"
          type="date"
          value={date}
          ref={node => (_input = node)}
          onChange={() => fetchNewsLatest(_input.value)}
        />
      </div>
      {Data.map(news => (
        <div className="Category-container" key={news.news_id}>
          <div className="Category-container-img">
            <img className="Category-img" src={news.img_url} />
          </div>
          <div>
            {news.title}
            <h2 className="Category-h2"> {news.source_name}</h2>
          </div>
          <div className="Category-container-a">
            <a className="Category-a" href={news.url} target="_blank" >VER MÁS</a>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    Data: state.news,
    loading: state.loading,
    error: state.error,
    date: state.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNewsLatest: (date) => dispatch(fetchNewsLatest(date)),
  }
}

Home.propTypes = {
  fetchSearch: PropTypes.func,
};



export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Home);
