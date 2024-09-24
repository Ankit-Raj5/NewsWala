import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...
              <span className='position-absolute top-0 translate-middle badge rounded-pill bg-success' style={{left:'90%', zIndex:'1'}}>{source}</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className='card-text' class='text-muted'>By {!author?'Victor':author} on {new Date(date).toGMTString()}</p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
