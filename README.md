# React Google Maps Tutorial

## Purpose

This tutorial project is to give a basic understanding of one method of using the [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) with [React](https://reactjs.org/). It isn't particularly easy to tie the two together since both attempt to control the DOM  at the same time, especially for a newer developer, but I think this is a fairly intuitive and flexible way to do so.  

I also attempted to demonstrate how to use the Google Maps api to create single function React components that respond to props and use bound functions passed in as props, just like any other React components, while still using Google Maps to perform the actual DOM manipulation.  

## Method

This app uses the following method to run Google Maps:
1. Load the Google Maps API scripts
2. In the `MapLoader` component, the `componentDidMount` method launches a method to see if the `maps` object is on the `window` object and will repeat this procedure for 10 seconds then stop if the `maps` object is not found.
3. Once the `map` object is found, the `MapLoader` `loaded` state is set to true and the `Map` component is rendered along with any child components that will be passed in.
4. These child components will be cloned by the `Map` component with a `map` prop that will give them reference to the the Google Maps `map` object rendered on the screen.  
5.  This way, the child components can take that reference to the `map` object, and using the `google.maps` object available on the `window` object, perform any functions required based on the Google Maps API.

## References

* [This book](https://legacy.gitbook.com/book/developmentarc/react-indepth/details) is one of my favorite guides to the react lifecycle, a solid understanding of which is very helpful for manipulating the Google Maps API as seen here.
* [Ari Lerner's](https://twitter.com/auser) tutorial [How to Write a Google Maps React Component](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/) was very helpful for remembering how all these pieces fit together and for providing a basis for the script-loading functionality used here.
* Thanks also to my boss Patrick Brown at [Blyncsy](https://www.blyncsy.com/) who originally showed me this method and that we've been using successfully for over a year.

## Instructions
* Clone the project
* Go to the project directory and run `$ yarn`
* Once the project has built, add a `.env` file in the main directory and add the line `REACT_APP_GOOGLE_MAPS_API_KEY="<your google maps api key>"`  A key can be obtained [here](https://developers.google.com/maps/documentation/javascript/get-api-key)
* Run `$ yarn start`


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
