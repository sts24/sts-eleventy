---
title: Weather Block
date: 2019-07-24T23:08:45.474Z
tools:
  - React
  - WordPress
image: /images/uploads/weather-block-image.jpg
homeFeatured: false
excerpt: Weather Block is a simple Gutenberg block for fetching and displaying the current weather conditions from a users' browser geolocation.
---
<p class="intro">Weather Block is a simple Gutenberg block for fetching and displaying the current weather conditions from a users' browser geolocation.</p>

When a user inserts this Gutenberg block into a WordPress post, they are prompted to have the browser ask for the current geolocation. This returns the latitude and longitude, which is then fed to the <a href="https://darksky.net/dev">Dark Sky API</a>. Weather Block will then save the current temperature and condition description. The resulting post will then have condition information plus an icon provided by the [Climacons library](http://adamwhitcroft.com/climacons/). This plugin was created using the [Create-Guten-Block](https://github.com/ahmadawais/create-guten-block) toolkit.

<a href="https://github.com/sts24/weather-block" class="btn">View on GitHub</a>

## To-Do List

This is still a work in progress and I plan on releasing this on the WordPress Plugin Library at some point in the future.

- Add support for Celsius
- Options for icon color (or no icon too)
- Clean up block interface
- Prepare for official release
- How to handle Dark Sky API key usage
