# Code Overview
Sample todo app built with the React+ReactDOM+Redux framework.

## User Stories

As a user registered on the website, I want the ability to show, add, change and delete my tasks, so that I may manage my tasks.

As an admin user, I want to show and delete a user's tasks.

## Getting started

First clone this repository.
```bash
$ git clone https://github.com/SaharAlassaf/W09D03.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install
```

Run it
```bash
$ npm start
```


## React Router Routes 

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | Landing              | anyone                     | Home page                                                    |
| `/Signup`        | Signup               | anyone                     | Signup form, link to tasks if user or to dashboard if admin |
| `/Signin`        | Signin               | anyone                     | Signin form, link to tasks if user or to dashboard if admin |
| `/Dashboard`     | Dashboard            | admin only                 | Shows all users's tasks                                      |
| `/Tasks`         | Tasks                | user only                  | Shows user's tasks                                           |

## Reducers

| Reducer          | action                                                                                                         | Default                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------- |
| sign             | set role and token if type`"LOGIN"` and reset if type `"LOGOUT"`                                                                                                                                                                           | `{ role: "", token: ""}`   |
| user             | set tasks if type `"GET_TASKS"`, set new task type `"POST_TASKS"`, set updated task if type `"PUT_TASKS"` and reset deleter task if type `"DELETE_TASKS"`   | `{ tasks: [] }`            | 
| admin            | set tasks if type `"GET_TASKS"`, and reset deleter task if type `"DELETE_TASKS"`               | `{ tasks: [] }`|

## Components

- Landing
- Signup
- Signin
- Task
- Tasks
- Dashboard

## UML diagram

![Influence Diagram Template (5)](https://user-images.githubusercontent.com/92248067/145277051-18029765-e7f1-47a9-bb69-0f686c50ecfd.jpg)


## Back end 
[Back-end repository](https://github.com/SaharAlassaf/W08D03)
