---
id: 246
title: 'Comparing Vue &#038; React'
date: '2019-06-17'
guid: https://smithscott.net/?p=246
---
<p>My little side project web app, <a href="https://smithscott.net/portfolio/the-pitwall/">The Pitwall</a>, has been my test bed for better understanding different reactive javascript frameworks and their surrounding ecosystems of plugins. Pitwall started life as a CodePen project a long time ago when I decided it was time to start learning modern JS. I gravitated towards learning <a href="https://vuejs.org/">Vue</a> first by sticking to the basic functionality of components and props. Once I got that under control, I broke it out of CodePen so it could stand alone and make better use of different toolchain scripts. First came the Vue CLI, Vue Router, and then Vuex for state management. While Pitwall isn’t exactly the most complex web app out there, it has enough complexity where I could understand the benefits of routing and state management. Once I got it hooked up to being hosted on Netlify, I felt like this was also a way to finally get my head around modern JAMstack sites as well.</p>

<p>Needless to say, I learn best by just doing something until it works.</p>

<p>At this point, I felt that I have a pretty solid understanding of Vue. While Vue has a lot of aspects that I really enjoy, like the single file components and the way state and props are handled, it is still second place to the massive marketshare that is React. This framework, originally developed by Facebook, is nearly everywhere on the modern web. It is pretty hard to avoid React in one form or another on both the web as well as native apps.</p>

<p>My next challenge for Pitwall was to port it to React. After going through some of the basic documentation, I was surprised how fast this went. While a lot of ideas are shared between Vue and React, the difference largely comes down to syntax and the types of built in methods available. I chose to go with Mobx for state management, which was also relatively easy after learning Vuex. For this port of Pitwall I decided to go with Parcel for building the project instead of the first party package create-react-app. I’ve been really liking Parcel as well and I could see myself using this for Vue projects as well in the future.</p>

<!-- wp:heading {"level":3} -->
<h3>Links</h3>
<!-- /wp:heading -->

<p>The <a href="https://pitwall.netlify.com/">live version of Pitwall can be viewed on Netlify</a>, which is running the Vue version. The GitHub repo is available for both <a href="https://github.com/sts24/pitwall-vue">Vue</a> and <a href="https://github.com/sts24/pitwall-react">React</a> versions of the same app.</p>
