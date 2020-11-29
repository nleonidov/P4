# Soft Swerve - README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Project Title** is lorem ipsum dolor sit amet. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Create a well-organized database for my frozen yogurt and toppings choices_
- _Establish 'CRUD' around the yogurt options_
- _Create minimalist style website with nice user-interface_
- 
- 

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Using React to build a front-end 'visual' interface for user interaction |
|   React Router   | Connecting methods together throughout screens and allowing state and routes to work properly|
|   Ruby on Rails  | Back-end database for storing the information on yogurts/toppings |
|     Express      | |
|  Express Router  | |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Home Screen](https://imgur.com/Kcsklp9)
https://imgur.com/Kcsklp9

- Home 

![Order Screen](https://imgur.com/cUmrdWT)
https://imgur.com/cUmrdWT

- CreateOrder 

![Change Order](https://imgur.com/p5ekcBR)
https://imgur.com/p5ekcBR

- Edit Order / Delete Order

![Checkout](https://imgur.com/CUfg957)
https://imgur.com/CUfg957

- Checkout Screen

![Reviews](https://imgur.com/lrKgUep)
https://imgur.com/lrKgUep

- Review Screen

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ screens/
      |__ Home.jsx
      |__ CreateOrder.jsx
      |__ Checkout.jsx
      |__ Edit.jsx
      |__ Review.jsx
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
|__ containers/
      |__ Main.jsx
|__ services/
      |__ apiConfig.js
      |__ yogurts.js
      |__ toppings.js

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create back-end data |    L     |     2 hrs      |     0 hrs     |    0 hrs    |
| Models/Controllers  |    M     |    1 hr    |     0 hrs     |     0 hrs     |
| Set-up/Test Routes |    M    |      1 hr     |    0 hrs     |     0 hrs     | 
| REACT setup |   H   |   3.5 hrs   |   0 hrs   |   0 hrs   |
| Create CRUD Actions |    H     |     3 hrs      |     0 hrs     |     0 hrs     |
| TOTAL               |          |     10.5 hrs      |     0 hrs     |     0 hrs     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
