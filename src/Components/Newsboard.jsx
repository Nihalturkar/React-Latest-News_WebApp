import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const Newsboard = ({category}) => {
  const [article,setarticle] = useState([]);

  // whenever newsboard is getting reload useeffect will be updated
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=d33b1b3b56c0464a9c53e1b499beb051`;
    fetch(url)
      .then(response => response.json())
      .then(data => setarticle(data.articles))
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);
  // console.log(article)

  return (
    <div>
     <h2 className='text-center'>Latest <span className='text-danger'>News</span></h2>
     
     {article.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description = {news.description} src = {news.urlToImage} url={news.url} />
     })}
    </div>
  )
}

export default Newsboard;
