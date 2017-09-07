# First Google Image Service

> I wanted a small google image search thumbnail as a service for a small project for some 'celebrity avatars'. Inspired by the [robothash](https://robothash.org), this is a wrapper for [first-image-search-load](https://github.com/shershen08/first-image-search-load) using a [micro](https://github.com/zeit/micro) server to create a small microservice and I'm currently hosting it through [now](https://zeit.co/now)

## Overview
- Deploy this service using `now` (`npm install --save now`)
- Whilst I like the first-image-search-load service, I will probably adopt / rewrite this to include a more configurable and 'deeper' set of options for retrieval and configuration
- At some point, I'll also add a caching layer
- At some point, I'll also add a thumbnail / image manipulation layer - eg, [thumbor](http://thumbor.org/) / [smartcop](https://github.com/jwagner/smartcrop.js/)

## Demo

| Url        | Image           |
| ------------- |:-------------:|
| `https://first-image-service-npttfcvrns.now.sh/Jon Snow` | ![Jon Snow](https://first-image-service-npttfcvrns.now.sh/Jon%20Snow) |
| `https://first-image-service-npttfcvrns.now.sh/Daenerys Targaryen` | ![Daenerys Targaryen](https://first-image-service-npttfcvrns.now.sh/Daenerys%20Targaryen) |
| `https://first-image-service-npttfcvrns.now.sh/Tyrion Lannister` | ![Tyrion Lannister](https://first-image-service-npttfcvrns.now.sh/Tyrion%20Lannister) |
| `https://first-image-service-npttfcvrns.now.sh/Hodor` | ![Hodor](https://first-image-service-npttfcvrns.now.sh/Hodor) |