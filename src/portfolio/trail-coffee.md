---
title: Trail Coffee
order: "1"
tools:
- Node
- Eleventy
- Netlify
- Visual Design
featured: true
thumbnail:
- src: "/v1614988656/sts/trail-coffee-desktop.jpg"
  alt: Trail Coffee screenshot in desktop
excerpt: A journal of hiking photography

---
Trail Coffee was a side project I created to share my hiking photography. The original version of the site was launched in 2015 using a bespoke WordPress theme I developed to get exactly what I needed out of the site. At the time, this theme used several backend functions to help with customizing each post. For example, each region was defined by a category and given a custom accent color. The site also used several plugins such as Jetpack and WP-GPX-Maps to display map location and GPS data from the hikes.

In 2019, I moved this off WordPress to Eleventy. This Jamstack version is hosted on Netlify. Eleventy is a fantastic static-site generator written in Node JS and gives developers a great deal of flexibility with combining your template language of choice with data stored in Markdown files or any other data store you want to bring. 

Since it is built around the Jamstack philosophy, I also had to move the content management to the Forestry CMS. This works with Markdown files and Git for file management. The images are hosted by Cloudinary makes use of the many transform options to generate images at many different sizes where they are needed in the template.

<a href="https://github.com/sts24/trailcoffee/">View on GitHub</a>

<a href="https://www.trailcoffee.net" class="btn">Read Trail Coffee</a>