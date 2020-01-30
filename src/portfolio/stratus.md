---
title: Stratus
order: 4
tools:
  - React
  - Mobx
  - Node
  - JSON APIs
image: /images/uploads/stratus.jpg
excerpt: A web app for viewing weather data from the National Weather Service
---
Stratus is a simple web app viewing data from the United States' National Weather Service. I found that the forecast data from the NWS was usually the best for the area I live in, but was never satisfied with the real website provided by the government agency. Seeing that they provide a pretty robost API, I took up the opportunity to build my own interface to this data.

This app was written in React and uses Mobx for state management. Upon loading, Stratus will ask your browser to provide location services. This will then pass the latitude and longitude to the NWS API and return with all the information I would need to display current, hourly, and extended forecasts.

- [View on GitHub](https://github.com/sts24/stratus)
- [Visit the Stratus Web App](https://stratusapp.netlify.com/)