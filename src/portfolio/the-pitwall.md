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
featured: false
thumbnail:
- src: "/v1614988656/sts/pitwall-desktop-2.jpg"
  alt: Pitwall app in desktop
excerpt: A project created explore the historical records of Formula 1 racing.

---
## Explore historical records of past Formula 1 championships.

I have been a life-long fan of Formula 1 auto racing and built this web app to better understand many different modern Javascript based frameworks. It was originally built in Vue, but has also been ported to Nuxt, React, and Eleventy while keeping the same functionality.

Pitwall uses data from the [Ergast API](https://ergast.com/mrd/). This uses the historical data of race results and championship standings going back to the formation of F1 in 1950. 

Most recently, I have ported it to Eleventy. While I do love working in Vue, this site doesn't actually need than a small amount of Javascript to run the front-end functionality. Having it run as a static site made a lot of sense. IFTTT is used to automatically generate the site every Sunday afternoon in Pacific Time to grab the latest data from that day's race.

### GitHub

* [Eleventy Version](https://github.com/sts24/pitwall-11ty) (The current live version.)
* [Vue Nuxt Version](https://github.com/sts24/pitwall-nuxt) 
* [Vue Version](https://github.com/sts24/pitwall-vue)
* [React Version](https://github.com/sts24/pitwall-react)

<a href="https://pitwall.netlify.app/" class="btn">View Live Version</a>