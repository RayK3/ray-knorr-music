# Welcome to my portfolio site.

This project is a colliding point of my two passions: Software Engineering and Music. This web app serves\
as both a portfolio of my software development skills, and a content website for my music (mainly fiddling).\
I hope you find what you're looking for!

## Methodologies

I have tried my best to use a [mobile first](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00) design. I have also included any extraneous classes in my\
tailwind.config, so that the classNames are kept clean.

## CI/CD

This repository is automatically deployed using the steps given in [this article](https://dev.to/mwoodson11/create-deployment-pipeline-for-react-app-on-hostinger-5bc9).

## Running the app

In the project directory, assuming you have node and yarn set up, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

If making changes to the tailwind classes, open a separate terminal and run

### `yarn tailwind-watch`

Automatically builds a minified version of tailwind.css with any classnames that are used in the React code.

To build a production version of the app, run

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and uses [Tailwind CSS](https://tailwindcss.com/) for styling.
