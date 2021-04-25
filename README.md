# Creating a Web GUI with React and Node.js

## Introduction

This app was created to teach React in SISTCA's Lab Script.

We start with a simple JavaScript and ES6 review. We then go onto explaining the basics of React. After that, we give the student some simple guided exercises. To finish it off, we give the student a challenge, i.e., an harder, non-guided exercise where the student will need to do some research on their own.

## Why make this repository?

This point of this repository is to enable the students to check and compare the solutions of the exercises. It also acts as an example of how to save/share your React code in GitHub, which is highly recommended to the students to do since it is an important skill to acquire because version controls systems are widely used in the current market.

## Setup

To make your very first reactive Web GUI, you need to install `Node.js` and `npm` (Node Package Manager), which are very important, and widely used, tools in Web Apps. If you get any trouble during this step, you can try [other installation methods](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04).

```bash
sudo apt update
sudo apt install nodejs npm -y
```

You can confirm if it is installed by checking the installed version. If a version number is returned, that means it is installed.

```bash
node -v
npm -v
npx -v
```

You can, then, start your own React app by just executing a simple shell command. You can use `yarn` instead of `npx` or `npm`, if you prefer. For more information on `create-react-app` you can check its [docs](https://create-react-app.dev/docs/getting-started/).

```bash
npx create-react-app <your-app-name>
cd <your-app-name>
npm start
```

## The file structure

When you start an app with `create-react-app` a lot of files are generated for you; some of them are required, other are optional. We can take a closer look at some of the files and folders to try to understand what each of them do:

- **README.md**:
  This is the file that shows up in GitHub repositories (like this one). Common topics that are covered in this file are: a description of your project, instructions on how to install/configure/use your app, authors, copyright, known issues, changelogs, screenshots, etc. Since every app is different, this file should be adapted to its needs. The `.md` indicates that this file uses the [Markdown language](https://guides.github.com/features/mastering-markdown/), which is basically an improved version of a `.txt`, or a simpler version of `.html` (whichever analogy you prefer).

- **package.json, package-lock.json, node_modules/:**
  These files take care of the dependencies/libraries that your app uses. Don't touch these files if you don't know what you are doing!

- **.gitignore:**
  If you have used Git before than you most likely know what this file does. It basically tells Git which files it should ignore. For example, if you need to use your password as a string in the code, then it is exposed for anyone that has access to your code. To fix this you can place your password in a separate file (usually a `.env` file) and add that file to `.gitignore`. By doing this, your password will not be tracked by Git nor uploaded to the remote origin (for example GitHub).

- **public/:**
  You should place in this folder all the files that can be accessed by the user. For example, the root HTML file, favicon.ico (the little icon on the browser tab), and the images that you are going to use in your app.

- **src/:**
  This folder is where you place your code (JavaScript/TypeScript and CSS). In this example we will only cover the JavaScript code, although you can also use TypeScript and CSS if you prefer.

  - **index.js:**
    This file tells React where to start rendering your app. The default place is the "root" _div_.

  - **App.js:**
    This is the file where your code should go. If its a small app, then you can place all the code in here; but for larger apps you should split your code into multiple files and folders.

  - **App.test.js, setupTests.js:**
    These are the files where you can test if your code is functional. This is very useful for larger apps, but unnecessary for smaller ones; thus you won't be learning how to use these files in this lab script.

  - **reportWebVitals.js:**
    This file contains a simple script that helps you understand where your app is failing and where it can be optimized. Again, we are not going to cover this file in this lab script.

## Authors

Class: **3DA_Inglês** @2021

- 1180798 **Pedro Morim**
- 1180861 **Duarte Garcia**
- 1180868 **Luís Garcia**
- 1180872 **Miguel Santos**
