# Liferay Travels

React application for the Liferay Symposium Spain 2020 Workshop: Construyendo una SPA para exprimir las APIs Headless.

The application will consist of a little app to manage the travels of the headless team. Each travel will have one or more stages where visit interesting cities.

To build the back-end we will follow the [Liferay Travels Back](https://github.com/javierdearcos/Liferay-Travels-Back) repository, where we can find the steps to create:
* A simple service created with [Service Builder](https://help.liferay.com/hc/es/articles/360033253091-What-is-Service-Builder-).
* A rest API built with Liferay [REST builder](https://help.liferay.com/hc/es/articles/360036343312-REST-Builder).
* An extension of a Liferay Headless API.

## Purpose
Understand how to connect an external application with Liferay through Liferay Headless APIs. In this example, we will see how a React app uses the Liferay GraphQL endpoint using [Apollo](https://www.apollographql.com/).

## How to work with this repository
Each commit is a step with some tasks to do. These tasks will be marked with some comments.
So, to follow the workshop is necessary to do a `git checkout` of step 1 and insert the commands to start the application. When you start the app, then it's time to do step 2. In case you want to see the solution of stage 2 just make a `git checkout` to step 3.

In other words, each step commit is the start line of the step and the solution of the previous commit.

## Step 0: Pre-requisites

* Install [npm and node](https://www.npmjs.com/get-npm) (LTS).

* Javascript and React JS. It is not necessary to have experience with the development of a React application but be familiar with some concepts.

* GraphQL (queries and mutations). As before, it is not necessary to have experience but be familiar with some concepts.
