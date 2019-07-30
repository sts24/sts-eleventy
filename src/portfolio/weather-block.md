---
title: Weather Block
date: 2019-07-24T23:08:45.474Z
tools:
  - React
  - WordPress
image: /images/uploads/weather-block-image.jpg
---
Weather Block is a simple Gutenberg block for fetching and displaying the current weather conditions from a users’ browser geolocation.

When a user inserts this Gutenberg block into a WordPress post, they are prompted to have the browser ask for the current geolocation. This returns the latitude and longitude, which is then fed to the Dark Sky API. Weather Block will then save the current temperature and condition description. The resulting post will then have condition information plus an icon provided by the Climacons library. This plugin was created using the Create-Guten-Block toolkit.
