# ember-material

Basic setup for using Material Design Lite in EmberJS projects

* [MDL](https://getmdl.io/index.html)

## Requirements

* [Ember CLI](https://github.com/ember-cli/ember-cli/releases/tag/v2.14.2)
* [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
* [Yarn](https://yarnpkg.com/en/)

## Development

* `git clone git@github.com:tomoguisuru/ember-material.git` this repository
* `cd ember-material`
* `yarn prep`

## Running

* `yarn start` or `yarn serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Installation

* yarn add tomoguisuru/ember-material -D

Copy the following into the `head` tag of your applications index, *app/index.html* 

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-amber.min.css">
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
```

In *app/styles/app.scss* copy the following

```sass
@import "ember-material";
```

## Development as Addon

* From dependant project, `yarn link ember-material`


## Running Tests

* `yarn test:all` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `yarn test`
* `ember test --server`

