import React from 'react';
import '../style/category.css';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchNews } from '../redux/AsyncActions';


function Technology({ Data, fetchNews, error, loading }) {
  useEffect(() => {
    fetchNews(3)
  }, [])
  if (error) {
    return (
      <div className="container">
        <h6>Hubo un error encontrando las noticias.</h6>
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
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: (id) => dispatch(fetchNews(id))
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Technology);
