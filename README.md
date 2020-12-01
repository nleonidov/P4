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

_**Soft Swerve** is a newly opened, delivery-only, frozen yogurt cafe offering various sweet and tangy flavors with the toppings you crave. Upon visiting the website you have an option to start your order and checkout our reviews! _

<br>

## MVP

- BE data sent to requests
- Functioning create, read, update, destroy on Reviews

\_\_

<br>

### Goals

- Create a well-organized database for my frozen yogurt and toppings choices
- Establish 'CRUD' around the order and yogurt options
- Create minimalist style website with nice user-interface

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|    Library    | Description                                                                                   |
| :-----------: | :-------------------------------------------------------------------------------------------- |
|     React     | Using React to build a front-end 'visual' interface for user interaction                      |
| React Router  | Connecting methods together throughout screens and allowing state and routes to work properly |
| Ruby on Rails | Back-end database for storing the information on yogurts/toppings                             |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

[Home](https://imgur.com/Kcsklp9)
[CreateOrder](https://imgur.com/cUmrdWT)
[Checkout](https://imgur.com/CUfg957)
[Reviews](https://imgur.com/e7PtMVy)
[ReviewEdit](https://imgur.com/3G5gw32)

#### Component Tree

```structure
Home
  |__ Order
  |     |__ Checkout
  |
  |__ Reviews
        |__ Edit/Delete
        |__ Create
```

#### Component Hierarchy

```structure

src
|__ screens/
      |__ Home.jsx
      |__ Home.css
      |__ CreateOrder.jsx
      |__ CreateOrder.css
      |__ Checkout.jsx
      |__ Checkout.css
      |__ Edit.jsx
      |__ Edit.css
      |__ Review.jsx
      |__ Review.css
      |__ ReviewEdit.jsx
      |__ ReviewEdit.css
|__ components/
      |__ Header.jsx
      |__ Header.css
      |__ Footer.jsx
      |__ Footer.css
|__ containers/
      |__ Main.jsx
      |__ Main.css
|__ services/
      |__ apiConfig.js
      |__ yogurts.js
      |__ toppings.js

```

#### Component Tree

> Use this section to include a link to your component tree.
> https://imgur.com/PKCUYXw

[Component tree](https://imgur.com/PKCUYXw)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create back-end data      |    L     |     2 hrs      |      ---      |     ---     |
| Set-up/Test Routes        |    M     |      1 hr      |      ---      |     ---     |
| REACT setup               |    H     |      1 hr      |      ---      |     ---     |
| Create CRUD Actions       |    H     |     3 hrs      |      ---      |     ---     |
| Create Home Screen        |    H     |     2 hrs      |      ---      |     ---     |
| Create Review Form        |    H     |     3 hrs      |      ---      |     ---     |
| Create Review Edit Screen |    H     |     3 hrs      |      ---      |     ---     |
| Create Checkout Screen    |    H     |     3 hrs      |      ---      |     ---     |
| Create Order Screen       |    H     |     3 hrs      |      ---      |     ---     |
| Start to style screens    |    H     |     4 hrs      |      ---      |     ---     |
| Testing                   |    H     |     2 hrs      |      ---      |     ---     |
| Local/Public Deployment   |    H     |     5 hrs      |      ---      |     ---     |
| TOTAL                     |   hrs    |     35 hrs     |      ---      |     ---     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

https://imgur.com/FG6faTp

<br>

---

## Post-MVP

---

## Code Showcase

## Code Issues & Resolutions
