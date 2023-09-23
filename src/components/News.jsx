import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
     
    constructor(){
        
        super();
        this.state = {
            articles : []
        }
      }

      async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=IN&apiKey=6352af4fd50c44c58ab79fecb231c780";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.articles)
        this.setState({articles: parsedData.articles})
      }


    render() {
        return (
            <div className='container my-3'>
                <h2>Fast and furious headlines</h2>
                <div className="row">
                 {this.state.articles.map(items => (
                    
                  items &&  <div className="col-md-3 my-3" key ={items.url}>
                        <NewsItem newsUrl={items.url}  title={items.title && items.title.slice(0,45)} description={items.description && items.description.slice(0,88)} src={items.urlToImage}/>
                    </div>

               
                ))}
                 </div>
            </div>
        )
    }
}
