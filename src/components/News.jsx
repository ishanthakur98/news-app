import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    totalArticles: 0
  }

  constructor(props) {

    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
    document.title = `${this.props.category} - News app`
  }

  async updateNews() {
    this.props.setProgress(0);
    var body = {
      "params": [
        {
          "key": "country",
          "value": this.props.country
        }, {
          "key": "pageSize",
          "value": this.props.pageSize
        }, {
          "key": "page",
          "value": this.state.page
        }, {
          "key": "category",
          "value": this.props.category
        }
      ]
    }
    this.props.setProgress(20);
    let url = "http://localhost:8080/news-app/fastAndFurious/fetch";
    let data = await fetch(url, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, body: JSON.stringify(body)
    });
    this.props.setProgress(40);
    let parsedData = await data.json();
   
    this.props.setProgress(80);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false,
      page: 2
    })
    // console.log(this.state.articles.length)
    // console.log(  this.state.totalArticles)
    this.props.setProgress(100);
  }

  componentDidMount() {
    this.setState({ loading: true })
    console.log("called")
    this.updateNews();
  }

  handlePreviousClick = () => {
    // page--;
    let pageNo = this.state.page + 1;
    this.setState({ loading: true, page: pageNo })
    this.updateNews();
  }

  handleNextClick = () => {
    
    let pageNo = this.state.page + 1;
    this.setState({ loading: true, page: pageNo })
    this.updateNews()
  }

   fetchMoreData = async () => {
    console.log(this.state.page)
    
   
    this.setState({ loading: true, page: this.state.page })
    console.log(this.state.page)
    var body = {
      "params": [
        {
          "key": "country",
          "value": this.props.country
        }, {
          "key": "pageSize",
          "value": this.props.pageSize
        }, {
          "key": "page",
          "value": this.state.page
        }, {
          "key": "category",
          "value": this.props.category
        }
      ]
    }
    let url = "http://localhost:8080/news-app/fastAndFurious/fetch";
    let data = await fetch(url, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, body: JSON.stringify(body)
    });
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1
    })
  };


  render() {
    return (
      <>
      
        <h2 className='text-center'>Fast and furious headlines from {this.props.category}</h2>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((items, index) => (

                items && <div className="col-md-4 my-3" key={index}>
                  <NewsItem key={index} newsUrl={items.url} title={items.title && items.title.slice(0, 45)} description={items.description && items.description.slice(0, 88)} author={items.author} updateTime={items.publishedAt} src={items.urlToImage} />
                </div>


              ))


                // this.state.articles.map((i, index) => (
                //   <div style={style} key={index}>
                //     div - #{index}
                //   </div>
                // ))}
              }</div> </div>
        </InfiniteScroll>
        {/* {this.state.articles.map(items => (

            items && <div className="col-md-4 my-3" key={items.url}>
              <NewsItem newsUrl={items.url} title={items.title && items.title.slice(0, 45)} description={items.description && items.description.slice(0, 88)} author={items.author} updateTime={items.publishedAt} src={items.urlToImage} />
            </div>


          ))} */}

        {/* {!this.state.loading && <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}><ArrowLeftIcon /> previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalArticles / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next <ArrowRightIcon /></button>
        </div>} */}
      
      </>
    )
  }
}
