#!/bin/bash
rm -rf vendor
if [ ! -f composer.phar ]; then curl -s http://getcomposer.org/installer | php; fi;
php composer.phar install --prefer-source
php composer.phar dump-autoload
