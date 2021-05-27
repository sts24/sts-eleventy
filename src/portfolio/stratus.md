---
title: Stratus
order: "4"
tools:
- React
- React Hooks
- Node
- JSON APIs
featured: false
image:
- src: "/v1614988656/sts/stratus-desktop.jpg"
  alt: Stratus app screenshot
excerpt: A web app for viewing weather data from the National Weather Service
showcase:
- description: Stratus uses a three-column interface on the desktop view to present
    current, hourly, and extended forecast.
  image: "/v1614988656/sts/stratus-desktop.jpg"

---
Stratus is a simple web app viewing data from the United States' National Weather Service. I found that the forecast data from the NWS was usually the best for the area I live in, but was never satisfied with the real website provided by the government agency. Seeing that they provide a fairly robust API, I took up the opportunity to build my own interface to this data.

This app was written in React and uses the native functionality of useContext and hooks for state management. Upon loading, Stratus will ask your browser to provide location services. This will then pass the latitude and longitude to the NWS API and return with all the information I would need to display current, hourly, and extended forecasts.

* [View on GitHub](https://github.com/sts24/stratus-react)
* [Visit the Stratus Web App](https://stratusapp.netlify.app/)