---
title: The Pitwall
order: "3"
tools:
- Netlify
- Node
- Eleventy
- Vue
- Nuxt
- React
- Javascript
- NPM
image: 
- src: "/v1614988656/sts/pitwall-desktop-2.jpg"
  alt: Pitwall app in desktop
- src: "/v1614988656/sts/pitwall-mobile-2.jpg"
  alt: Pitwall app in mobile
excerpt: A project created explore the historical records of Formula 1 racing.
---
## Explore historical records of past Formula 1 championships.</h2>

This project was written originally with Vue, but it has also been ported to React. It uses Axios to call up the [ErgastAPI](https://ergast.com/mrd/) for historical Formula 1 data. The Ergast API has data going back to the first World Championship in 1950.

I am a big Formula 1 fan (yes, I am also an American, which nobody knows about F1 here) and I wanted to make up a personal project to learn more about Vue and making a reactive single page app. While the functionality is fully established, I plan on added some polish to UI over time.

Originally, this project started out as a way to learn about the new world of javascript frameworks. I first wrote this app in Vue using Vue CLI. Then it was ported to React so I could compare how the process would compare with the same app with a different approach. I do like working in Vue, so I rewrote it with the Vue framework Nuxt. This allows me to easily use the same Vue components as before with the advantage of creating a static generated version of the app for better performance.

Most recently, I have ported it to Eleventy. Since this site doesn't actually need a lot more than a small amount of JS to toggle buttons and the year selector, having it run as a static site made a lot of sense. This is auto updated every Sunday afternoon (Pacific Time) to grab the latest data from that Sunday's race.

### GitHub

* [Eleventy Version](https://github.com/sts24/pitwall-11ty) (The current live version.)
* [Vue Nuxt Version](https://github.com/sts24/pitwall-nuxt) 
* [Vue Version](https://github.com/sts24/pitwall-vue)
* [React Version](https://github.com/sts24/pitwall-react)

<a href="https://pitwall.netlify.app/" class="btn">View Live Version</a>