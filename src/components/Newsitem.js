import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl, author, date, source}=this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>

                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
      <img src={imgUrl} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">
          {description}
        </p>
        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
      </div>
    </div>
      </div>
    )
  }
}
    