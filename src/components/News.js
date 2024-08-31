import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=ndtv&from=2024-07-26&sortBy=publishedAt&apiKey=7e1529fc8dc649f1a45e0e232befec59&pageSize=51";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }

  handleNextClick = async ()=>{
    let url = `https://newsapi.org/v2/everything?q=ndtv&from=2024-07-26&sortBy=publishedAt&apiKey=7e1529fc8dc649f1a45e0e232befec59&page=${this.state.page+1}&pageSize=51`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles    
    });
  }

  handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/everything?q=ndtv&from=2024-07-26&sortBy=publishedAt&apiKey=7e1529fc8dc649f1a45e0e232befec59&page=${this.state.page-1}&pageSize=51`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles    
    });
  }



  render() {
    return (
      <div className='container my-3'>
        <h1>NewsWala-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title?element.title.slice(0, 45):""} description = {element.description?element.description.slice(0, 88):""} 
              imageUrl ={element.urlToImage} newsUrl = {element.url}/>
            </div>
          })}

          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
            <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News;