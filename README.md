# Instructions

## Foreward

This library consists of two applications:

 * Ruby on Rails 5 API [back-end](app)
 * React 16 with Redux SPA [front-end](front-end)

## Dependencies

 * **Ruby >= 2.2.2**. _(Recommended: **Ruby 2.5.0**)_
 * **bundler ~> 1.16.1**
 * **Rails 5.1.5**
 * **NodeJS ~> 9.4.0**
 * **npm ~> 5.7.1**
 * **yarn ~> 1.5.1**

## Installation

 * install any dependencies listed above not yet present on your system, then clone this repo.
 * change directory to this checkout, and run `bundle`
 * change directory to `./front-end`, and run `yarn install`

## Run Applications

### At a Glance

 * change directory `cd` to the root of this checkout
 * run `nohup ./bin/rails s &`
 * run `cd ./front-end`
 * run `npm run start`
 * visit `localhost:3001` in your browser
 * type a password into the input field

### Run Back End Service (Detailed)

#### nohup

To run both applications simultaneously in the same terminal, open a shell to the directory that was cloned into, and run the following command:

 * `nohup ./bin/rails s &`

Take note of the process ID that was returned.  
The server output can be monitored with the following command:

 * `tail -f nohup.out`

Stop the server with `kill {processID}` (where `{processID}` is the number returned from `nohup`). Alternatively, use the `jobs` command, note the numeric ID associated with the `nohup ./bin/rails s &` process, and then run `kill %{NUM}` (where `{NUM}` is the job ID listed from `jobs`).

### Run Front End App

 * run `cd ./front-end` from the location of the back end app
 * run `npm run start`

A browser should be loaded for you. If not, visit [http://localhost:3001](http://localhost:3001), or whichever port the application declares in its output.

### Run Alternatives

Skip this section if you have no problems with `nohup`.

#### rails daemon

The server can also be started in daemon mode:

 * `./bin/rails s -d`

To stop, use system tools like `ps`, `top`, or `htop` to find the associated `puma` process ID, and `kill` it.

 * `ps aux | grep puma`

#### foreground

Also, this can simply be run via:

 * `./bin/rails s`

...and switch to a new shell/terminal tab for the front end app.

## Tests

### Back End Tests

The Rails app uses RSpec 3.7. Simply navigate to the root location, and use the following command:

 * run `./bin/rails spec`

### Front End Tests

The React app uses Jest, Enzyme, and the React libraries. Navigate to the `./front-end` dir from the root location, and use the following command:

 * run `npm run test`

Follow the instructions on screen. Type `a` to re-run all tests, and `q` to exit.

## Password Service

The back end service consists of a single endpoint:

 * POST `/v1/password_strength`
 * OPTIONS `/v1/password_strength`

The `password` parameter must be included in the POST body, or a 422 Unprocessable Entity error will result. To inspect this service, use an application like [Postman](https://www.getpostman.com/), or [cURL](https://curl.haxx.se/) from your shell session.

The service's [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy currently allows any origin, but this may become more restricted as the service develops.

## Thanks

Thank you for taking the time to review this implementation. :bow:
