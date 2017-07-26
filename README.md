> Ember app powering mirai.audio

[![CircleCI](https://img.shields.io/circleci/project/github/mirai-audio/mir.svg?style=flat-square)](https://circleci.com/gh/mirai-audio/mir)

## [Docs](https://github.com/mirai-audio/mir/wiki)

* [CODE_OF_CONDUCT](https://github.com/mirai-audio/mir/wiki/CODE_OF_CONDUCT)
* [CONTRIBUTING](.github/CONTRIBUTING.md)
* [CSS Naming Conventions](https://github.com/mirai-audio/mir/wiki/CSS-Naming-Conventions)
* [humans.txt](https://github.com/mirai-audio/mir/wiki/humans.txt)
* [STYLEGUIDE](https://github.com/mirai-audio/mir/wiki/STYLEGUIDE)


## Prerequisites

You will need the following tools properly installed:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Watchman](https://facebook.github.io/watchman/)
* [Yarn](https://yarnpkg.com/)

macOS / OS X Installation:

```bash
brew install watchman
brew install yarn
yarn global add ember-cli
yarn global add phantomjs-prebuilt
```

Linux (Ubuntu)

```bash
npm install -g yarn
yarn global add ember-cli  # Make sure $(yarn global bin) is in your $PATH
apt-get install phantomjs
```

## Installation

```bash
git clone <repository-url>
cd mir
yarn
```

## Running / Development

To run with server-side rendering:

`yarn run server` then visit your app at 
[http://localhost:3000](http://localhost:3000).

To run without server-side rendering:

`ember s` then visit your app at 
[http://localhost:4200](http://localhost:4200).

### Environment variables

The following environment variables are available to override fallback (dev)
configuration:

```bash
# common
API_URL=https://api.mirai.audio  # REST API address
HOST=http://localhost:4200       # Default host

# social login providers
TWITTER_REQUEST_TOKEN_URL=//localhost:4000/auth/twitter # ai kickstarts OAuth
```

If these are defined in a `.env` file, they will be sourced and made available
in the running application.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## LICENSE

[MIT](LICENSE)


A product of <ruby>
  <ruby>
    青<rp>(</rp><rt>せい</rt><rp>)</rp>
    心<rp>(</rp><rt>しん</rt><rp>)</rp>
    工<rp>(</rp><rt>こう</rt><rp>)</rp>
    機<rp>(</rp><rt>き</rt><rp>)</rp>
  </ruby>
  <rp>(</rp><rt>seishinkouki</rt><rp>)</rp>
</ruby> Co., Ltd
