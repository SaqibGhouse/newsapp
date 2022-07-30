import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=4367f23ef6cc48df9237e64da83e5298&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}-News Panda`
        updateNews()
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=4367f23ef6cc48df9237e64da83e5298&page=${page + 1}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }



    return (
        <>
            <h2 className='text-center ' style={{ marginTop: "90px" }}> News Panda - Top Headlines from {capitalizeFirstLetter(props.category)}</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-4">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}
News.defaultProps = {
    country: 'in',
    pageSize: 8
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}

export default News
