import React from 'react';
import '../style/category.css';
import { connect } from 'react-redux';


function Search({ error, loading, params, dataNews }) {

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
      {params ? params.map(param => (
        <div className="Category-container" key={param.news_id}>
          <div className="Category-container-img">
            <img className="Category-img" src={param.img_url} />
          </div>
          <div>
            {param.title}
            <h2 className="Category-h2"> {param.source_name}</h2>
          </div>
          <div className="Category-container-a">
            <a className="Category-a" href={param.url} target="_blank" >VER MÁS</a>
          </div>
        </div>
      )) : dataNews.length == 0 ? < div className="Category-msg" ><p>No hay Resultados para su busqueda</p></div> : []}
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    params: state.params,
    error: state.error,
    loading: state.loading,
    dataNews: state.news
  }
}


export default connect(
  mapStatetoProps,
  null
)(Search);
