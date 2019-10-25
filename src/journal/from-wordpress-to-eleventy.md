---
title: From WordPress to Eleventy
date: '2019-10-25'
---
I've developed for WordPress for a long time, nearly as long as I have been a web developer. As a CMS, it has grown into something a lot more powerful beyond it's blogging roots. Between Gutenberg, the Rest API, and plugins like Advanced Custom Fields, [there's a lot of flexibility for a developer to work with](https://smithscott.net/journal/using-wordpress-as-a-headless-cms/).

That being said, WordPress also feels like overkill for a small site like this. My portfolio site doesn't really need a lot: a few pages and a set of chronologically ordered posts. 

I think like a lot of web developers with personal sites, there is a desire to use your site to tinker with different design and development approaches that your employer may not be using. It's part curiosity and part self-education. This has led me to check out what's going on in the JAMstack world.

I looked into a few different static site frameworks: VuePress, Gridsome, Gatsby, and Eleventy. Everyone of these are based in the same idea of taking a folder of markdown files and processing it using templates into static HTML files. The first two are based on Vue, which is [my preferred Javascript reactive framework](https://smithscott.net/journal/comparing-vue-react/). Gatsby has been gaining in popularity for JAMstack sites as the go-to for React developers. These first three are all very useful, but again feel like more than I need for this site. This brings us to Eleventy.

[Eleventy](https://www.11ty.io/), developed by [Zach Leatherman](https://twitter.com/zachleat/), takes this concept even simpler. There are a variety of templating languages to choose from, which gives developers complete control over how the HTML pages are being generated. There's no extra javascript added to the built product: just plain, flat, boring HTML files.

After a several periods of working on and off on building the Eleventy version of this site, I've moved everything over without changing anything visual on the site. It is now hosted on Netlify and managed through the Netlify CMS.
