# Instructions

## Foreward

This library consists of two applications:

 * Ruby on Rails 5 API [back-end](app)
 * React 16 with Redux SPA [front-end](front-end)

## Dependencies

 * **Ruby >= 2.2.2**. _I used **Ruby 2.5.0** in local development._
 * **bundler ~> 1.16.1**
 * **Rails 5.1.5**
 * **NodeJS ~> 9.4.0**
 * **npm ~> 5.7.1**
 * **yarn ~> 1.5.1**

## Installation

 * install any dependencies listed above not yet present on your system, then fork [my fork](https://github.com/stratigos/password-service-todd), or just clone it locally.
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

Thank you for taking the time to review my implementation. :bow:


----

_Original instructions below:_

# Password Service

### Description

We should be as helpful to our users as possible. When selecting passwords we
should tell them if they've selected a good password. Your job is to implement
a system to help our users select a good password.

* Implement a back-end service that will receive the password and return either `weak`,
  `ok` or `strong.`
* Implement a front end that calls the back-end service to measure the password and
  show the user the strength of their password as they are typing.

### Implementation Notes

Acceptable implementation languages are Ruby, Python, .NET, Javascript, Java, and Scala. You may use any language framework readily available to you - Rails, Sinatra or Express.js for example.

> If using an application framework merge in the basic scafolding into master. Then create a second PR with just your work.

This is your chance to demonstrate your understanding of sound design and architecture principles. Any design decisions not specified herein are fair game but expect to be able to defend and explain your choices. Business rules/requirements may change, build accordingly.

Completed projects must include a README with enough instructions for evaluators to build and run the code. Bonus points for builds which require minimal manual steps.

This project should take a maximum of 4 hours to complete. This should be production quality code, but do not get hung up on scaling or persistence issues. This is a project used to evaluate your design, discipline and coding skills only.
