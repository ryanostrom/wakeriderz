#!/usr/bin/env bash
#
# Provisions dependencies for local resource compilation

function display() {
  echo "-----> $1"
}

function installNvmCli() {
  if [ ! `which nvm` ]
  then
    display "Installing nvm to system"
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
  fi
}

function installGulpCli() {
  if [ ! `npm gulp -v` ]
  then
    display "Installing gulp to system"
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
  if [ ! -d "source/scss/mixins/bourbon" ]
  then
    display "Installing bourbon to project"
    cd source/scss/mixins; bourbon install; cd ../../../
  fi
}

function updateBourbon() {
  display "Updating bourbon"
  cd source/scss/mixins; bourbon update; cd ../../../
}

function installNeatCli() {
  if [ ! `which neat` ]
  then
    display "Installing neat to system"
    sudo gem install neat
  fi
}

function installNeatLocal() {
  if [ ! -d "source/scss/mixins/neat" ]
  then
    display "Installing neat to project"
    cd source/scss/mixins; neat install; cd ../../../
  fi
}

function updateNeat() {
  display "Updating neat"
  cd source/scss/mixins; neat update; cd ../../../
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

installNvmCli
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