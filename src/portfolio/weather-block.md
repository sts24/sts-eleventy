---
title: Weather Block
date: 2019-07-24T23:08:45.474Z
tools:
  - React
  - WordPress
image: /images/uploads/weather-block-image.jpg
homeFeatured: false
---
Weather Block is a simple Gutenberg block for fetching and displaying the current weather conditions from a users' browser geolocation.

When a user inserts this Gutenberg block into a WordPress post, they are prompted to have the browser ask for the current geolocation. This returns the latitude and longitude, which is then fed to the <a href="https://darksky.net/dev">Dark Sky API</a>. Weather Block will then save the current temperature and condition description. The resulting post will then have condition information plus an icon provided by the <a href="http://adamwhitcroft.com/climacons/">Climacons library</a>. This plugin was created using the <a href="https://github.com/ahmadawais/create-guten-block">Create-Guten-Block</a> toolkit.

