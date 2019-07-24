---
title: Weather Block
excerpt: Weather Block is a simple Gutenberg block for fetching and displaying the current weather conditions from a users’ browser geolocation.
tools: ['React', 'WordPress']
---
Weather Block is a simple Gutenberg block for fetching and displaying the current weather conditions from a users’ browser geolocation.

When a user inserts this Gutenberg block into a WordPress post, they are prompted to have the browser ask for the current geolocation. This returns the latitude and longitude, which is then fed to the Dark Sky API. Weather Block will then save the current temperature and condition description. The resulting post will then have condition information plus an icon provided by the Climacons library. This plugin was created using the Create-Guten-Block toolkit.