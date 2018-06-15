# [Antiweather](https://bennettfeely.com/antiweather/)

Antiweather compares the weather in one location on Earth to the weather of its antipode, the exact opposite point on Earth.

For every search, the site makes two requests to the [Dark Sky API](https://darksky.net/).

Dark Sky provides current weather and weather forecasts for any coordinate point on Earth, even in the middle of the ocean or the North and South Pole.

Search is provided through the [Google Places API](https://developers.google.com/places/web-service/intro). Despite using the Algolia Places API at first, I could not figure out how to raise the rate limits on Algolia despite entering my billing information and reading through the docs. Google is cheaper, and provides much the same functionality.

Reverse geocoding and elevation data is provided by Google as well.

World maps are drawn using [d3](https://d3js.org).

Ads help support the site and are run through [Carbon Ads](https://carbonads.net/).

## License

Antiweather is licensed under the MIT license.