import React from 'react';

import logo from '../images/LightLogo.png'

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@awakening-journey')
       .then((res) => res.json())
       .then((data) => {
          // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
          const res = data.items //This is an array with the content. No feed, no info about author etc..
          // Only returns first ten and they might be mostly comments
          console.log(res)
          const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

          // Functions to create a short text out of whole blog's content
          function toText(node) {
             let tag = document.createElement('div')
             tag.innerHTML = node
             node = tag.innerText
             return node
          }
          function shortenText(text,startingPoint ,maxLength) {
             return text.length > maxLength?
             text.slice(startingPoint, maxLength):
             text
          }

          // Put things in right spots of markup
          let output = '';
          posts.forEach((item) => {
             output += `
             <div class="blog-post">
               <div class="blog__content">
                <a href="${item.link}">
                  <img src="${item.thumbnail}" class="blog__topImg"></img>
                  <div class="blog__title">${shortenText(item.title, 0, 100)+ ''}</div>
                  <p class="blog__intro">${shortenText(toText(item.content), 60, 800)}</p>
                </a>
              </div>
              <div class="blog__info">
                <p class="blog__category">Category: ${toText(item.categories.slice(1, 2))} | Published: ${shortenText(item.pubDate, 0 ,10)}</p>
              </div>
            </div>`

          })
          document.querySelector('.blog__slider').innerHTML = output
    })
  }

  render() {
    return  <div className="Blog">
          <h2>My Recent Posts from Medium</h2>
          <h3><a href="https://www.medium.com/@awakening-journey">(Click here to see all of my posts)</a></h3>
          <div className="blog__slider"></div>
          <img src={logo} alt=""/>
        </div>
  }

}

export default Blog
