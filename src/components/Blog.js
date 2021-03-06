import React from 'react';

import logo from '../images/LightLogo.png'
import feminine from '../images/feminine.jpg'
import enlighten from '../images/enlighten.jpeg'

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
          <div class="blog-post">
            <div class="blog__content">
             <a href="https://medium.com/mystic-minds/get-excited-for-a-new-era-of-feminine-energy-1ff89aa93c70">
               <img src={feminine} alt="" class="blog__topImg"></img>
               <div class="blog__title">Get Excited for a New Era of Feminine Energy</div>
               <p class="blog__intro">The balance of male and female is tipping and the matriarchy is coming.</p>
             </a>
             </div>
            <div class="blog__info">
              <p class="blog__category">Category: Spirituality | Published: 2020-12-21</p>
             </div>
           </div>
          <div class="blog-post">
            <div class="blog__content">
            <a href="https://medium.com/illumination/why-your-enlightenment-matters-now-more-than-ever-542496a95a3e?sk=09a9714c647695315a19adb6981830f0">
              <img src={enlighten} alt="" class="blog__topImg"></img>
              <div class="blog__title">Why Your Enlightenment Matters Now More Than Ever</div>
              <p class="blog__intro">This lifetime is available for you to ascend, so why wouldn’t you?</p>
            </a>
            </div>
            <div class="blog__info">
              <p class="blog__category">Category: Spirituality | Published: 2020-12-21</p>
             </div>
           </div>
          <img src={logo} alt=""/>
        </div>
  }

}

export default Blog
