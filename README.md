[![Build Status](https://travis-ci.com/pamelazoe/staq.svg?branch=develop)](https://travis-ci.com/pamelazoe/staq)

[Documentation](https://staq-docs-pamelazoe.vercel.app)

## Setup & Installation

### StackApps key

For this project we will be using StackExchange's API, which is StackOverflow and StackApp's parent company.
StackOverflow's unauthenticated endpoint allows only 300 hits per day, and to bypass this quota issue we will need a key.
This will give us 10,000 hits per IP, per day.
To register a new application, go to https://stackapps.com/apps/oauth/register and register or login with Facebook, Google or email and password.

Fill in the form and set OAuth Domain and Application Website are set to localhost and that Enable Client Side OAuth Flow and Disable Desktop Application OAuth Redirect Uri boxes are not ticked.
Submit your changes and copy or store the generated key because we will need it later.

<div style="text-align: center;">
<img src="./docs/assets/form.png" height="400">
</div>

### Installation

Clone the repository

```terminal
$ git clone https://github.com/pamelazoe/staq.git
```

Run this command to get into the project and install both the CLI and the API

```terminal
$ cd staq && npm run postinstall
```

Create the .env file with this command and then paste the key we got earlier.
This command will also start the API server.

```terminal
$ cd API && echo "STACKOVERFLOW_KEY=" > .env && npm start
```

To use this package locally in a development environment we need to link it to our local machine and this will simulate an installed package.
Make sure you are located on the CLI folder to run this command.

```terminal
$ cd CLI && npm link
```

To remove this package, get into the CLI folder and run

```terminal
$ npm unlink -g
```

### Usage

```terminal
$ staqs <"Error/Query to search"> [--tags]
```

```terminal
$ staqs "reference error" -t javascript
```
