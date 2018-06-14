# [Antiweather](https://bennettfeely.com/antiweather/)

Antiweather compares the weather in one location on Earth to the weather of its antipode, the exact opposite point on Earth.

For every search, the site makes two requests to the [Dark Sky API](https://darksky.net/).

Dark Sky provides current weather and weather forecasts for any coordinate point on Earth, even in the middle of the ocean or the North and South Pole.

~~Search is provided by [Algolia Places](https://community.algolia.com/places/).~~

Search is now provided through the [Google Places API](https://developers.google.com/places/web-service/intro). I could not figure out how to raise the rate limits on Algolia despite entering my billing information and reading through the docs several times. Google is cheaper, and provides much the same functionality.

~~Reverse geocoding is accomplished using [Nominatim](https://nominatim.openstreetmap.org/) with [OpenStreetMap](https://www.openstreetmap.org/) data.~~

Reverse geocoding is now provided by Google as well.

World maps are drawn using [d3](https://d3js.org).

Ads help support the site and are run through [Carbon Ads](https://carbonads.net/).

## License

Antiweather is licensed under the MIT license.
