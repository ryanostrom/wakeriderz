#!/usr/bin/env bash
#
# Provisions dependencies for local resource compilation

function display() {
    echo "-----> $1"
}

function installGulpCli() {
  if [ ! `npm gulp -v` ]
  then
    display "Installing gulp"
    npm install -g gulp
  fi
}

function installBabelCli() {
  if [ ! `npm babel-cli -v` ]
  then
    display "Installing babel to system"
    npm install -g babel-cli
  fi
}

function installBourbonCli() {
  if [ ! `which bourbon` ]
  then
    display "Installing bourbon to system"
    sudo gem install bourbon
  fi
}

function installBourbonLocal() {
  if [ ! -d "scss/mixins/bourbon" ]
  then
    display "Installing bourbon to project"
    cd scss/mixins; bourbon install; cd ../../
  fi
}

function updateBourbon() {
  display "Updating bourbon"
  cd scss/mixins; bourbon update; cd ../../
}

function installNeatCli() {
  if [ ! `which neat` ]
  then
    display "Installing neat to system"
    sudo gem install neat
  fi
}

function installNeatLocal() {
  if [ ! -d "scss/mixins/neat" ]
  then
    display "Installing neat to project"
    cd scss/mixins; neat install; cd ../../
  fi
}

function updateNeat() {
  display "Updating neat"
  cd scss/mixins; neat update; cd ../../
}


function cleanDependencies() {
  display "Removing dependencies" 
  rm -rf node_modules

  display "Cleaning npm cache"
  npm cache clean
}

function npmInstall() {
  display "Installing npm project dependencies"
  npm install
}

function runGulp() {
  display "Running gulp for the first time"
  gulp
}

installGulpCli
installBabelCli
installBourbonCli
installNeatCli

installBourbonLocal
installNeatLocal

updateBourbon
updateNeat

cleanDependencies
npmInstall

runGulp