import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '91%', zIndex: '1' }}>
                    {source}
                    <span className="visually-hidden">unread messages</span>
                </span>
                <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/rWgLIDJnabOzKM8f3tz0ZHUg8Io=/0x8:4096x2153/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22826050/game_image.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {title}... </h5>
                    <p className="card-text"> {description}... </p>
                    <p className="card-text"><small className="text-muted">by{!author ? " Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-secondary">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
