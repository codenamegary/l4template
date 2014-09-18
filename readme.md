# Laravel 4.2 Template

Includes many things to help workflow including...

- Laravel 4.2.x
- Grunt
- Bootstrap 3.2.0 (and dependencies incl. jQuery)
- Font Awesome 4.2.0
- Backbone JS 1.1.2
- Preconfigured for deployment on PagodaBox, will work with any suitable provider

Grunt is preconfigured to compile, copy and minify everything nicely into your public directory.

#### Customizing Twitter Bootstrap

The Bootstrap less (css) is compiled out of /assets/less/bootstrap.less. It uses a custom variables file so that you can easily override variables and still upgrade bootstrap with ease.

#### JavaScripts

Backbone.js is included by default. Some placeholder directories are located in /assets/js for your models, views and other services. These are compiled into app.js by Grunt, out of the box. Just place your scripts here and watch them go!

## Setup Instructions

    composer create project codenamegary/l4template
    
    npm install
    
    bower install
    
#### Compiling Assets

You can compile the less (css) and JavaScripts using Grunt by running "grunt dist" at any time from the project root directory. The watch plugin is also included, if you'd like Grunt to execute and compile your less and scripts as you go just run "grunt watch".

## Deploying

Setup an account at [PagodaBox](http://www.pagodabox.com) and push your code there.
