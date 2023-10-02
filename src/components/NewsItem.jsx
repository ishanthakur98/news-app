import React, { Component } from 'react';


export class NewsItem extends Component {

  

  render() {
    let {title , description ,src  , newsUrl,author,updateTime} = this.props;
    return (
      <div>
        <div className="card" style={{width: "24rem"}}>
          <img src={src} className="card-img-top" alt="loading..." style={{height: "14rem"}}/>
            <div className="card-body">
              <h5 className="card-title">{title && title.length >= 45 ? title + "...":title}</h5>
              <p className="card-text">{description && description.length >=88 ? description + "...":description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author == null ? "unknown" :author} on {new Date(updateTime).toLocaleString()}</small></p>
      
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
