import React from 'react';

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
          // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
          const res = data.items //This is an array with the content. No feed, no info about author etc..
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
             <li class="blog-post">
                <a href="${item.link}">
                   <img src="${item.thumbnail}" class="blog__topImg"></img>
                   <div class="blog__content">
                      <div class="blog_preview">
                         <h2 class="blog__title">${shortenText(item.title, 0, 30)+ '...'}</h2>
                         <p class="blog__intro">${'...' + shortenText(toText(item.content),60, 300)+ '...'}</p>
                      </div>
                      <hr>
                      <div class="blog__info">
                         <span class="blog__author">${item.author}</span>
                         <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>
                      </div>
                   </div>
                <a/>
             </li>`

          })
          document.querySelector('.blog__slider').innerHTML = output
    })
  }

  render() {
    return  <div className="Blog">
          <div className="blog__slider">
            <section id="blog" class="blog">
              <div class="blog__header">
                <p class="blog__header1">some of my</p>
                <h2 class="blog__header2">Medium
                  <span class="blog__header2Span">posts</span>
                </h2>
              </div>
              <ul class="blog__slider">
                Posts go here
              </ul>
              <ul class="blog__counter">
                <li class="blog__counterItem blog__counterItem-active"></li>
                <li class="blog__counterItem"></li>
                <li class="blog__counterItem"></li>
              </ul>
            </section><section id="blog" class="blog">
              <div class="blog__header">
                <p class="blog__header1">some of my</p>
                <h2 class="blog__header2">Medium
                  <span class="blog__header2Span">posts</span>
                </h2>
              </div>
              <ul class="blog__slider">
                Posts go here
              </ul>
              <ul class="blog__counter">
                <li class="blog__counterItem blog__counterItem-active"></li>
                <li class="blog__counterItem"></li>
                <li class="blog__counterItem"></li>
              </ul>
            </section>
          </div>
        </div>
  }

}

export default Blog
