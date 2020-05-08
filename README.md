# Rock Paper Scissors Challenge

## Introduction

A simple Rock-Paper-Scissors game app where you can play against computer. User can activate cheat and see computer's next selection and use it
as an advantage to win everytime(or not). Player has the opportunity to enter his/her name and save current score with a date to localStorage and/or reset the game score.

### Dependencies

- Yarn or Npm
- React, React-dom, React-router-dom, React-scripts
- React-animations
- Styled-components

### Dev Dependencies

- Cypress
- Enzyme
- Start-server-and-test

### Author

[Aerbay](https://github.com/kermit-klein)

### Setup

To test this application, fork the repo to your own GitHub account and clone it to your local workspace.

Install all of the dependencies:

```
> yarn install
```

Start cypress and run the feature tests:

```
> yarn run cy:open
> yarn start
```

Start enzyme and run component tests:

```
> yarn test
```

### User Stories

```
As a player
in order to play the game
I would like to choose rock,paper or scissors
```

```
As a player
in order to see how I am doing
I would like to see current score on page
```

```
As a player
in order to play the game
I would like to see my and computer's selection
```

```
As a player
in order to always win
I would like to turn on cheat feature and see computer's next selection
```

```
As a player
in order to play a new game
I would like to change player name and reset
```

```
As a player
in order to see my past results
I would like to press a button and save my current score
```

## Built with

React v.16.13.1, CSS(Semantic UI)  
**Testing frameworks:** Cypress, Enzyme  
**Deployed at:** [Netlify](https://nifty-villani-d7417b.netlify.app/)

## Improvements

- Remove chance factor on computer selection and add AI algorithm to guess your next selection
- Add images to rock/pape/scissor
- Add more component tests
- Add Rails back-end to save player records
- Add registration/login functionality
- Add better looking buttons with css
- Add different game mods
