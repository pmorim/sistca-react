# Creating a Web GUI with React

## Introduction

This app was created to teach React in SISTCA's Lab Script at *Instituto Superior de Engenharia do Porto*.

We start with a simple JavaScript and ES6 review. We then go onto explaining the basics of React. After that, we give the student a simple exercise that puts all the basics together. To finish it off, we give the student a challenge, i.e., an harder version of the previous exercise where the student will need to do some research on their own - search for libraries and read their documentation.

## Why make this repository?

This point of this repository is to enable the students to check and compare the solutions of the exercises. It also acts as an example of how to save/share your React code in GitHub, which is highly recommended to the students to do since it is an important skill to acquire because version controls systems are widely used in the current market.

## File Strucure

- [**0. js-review:**](https://github.com/pmorim/sistca-react/tree/master/0.%20js-review) A review of JavaScript and ES6's syntax (optional).
- [**1. hello-world:**](https://github.com/pmorim/sistca-react/tree/master/1.%20hello-world) How a folder should look like when you are ready to code.
- [**2. tutorial:**](https://github.com/pmorim/sistca-react/tree/master/2.%20tutorial) The guided tutorial of the basics and fundamentals of React.
- [**3. exercise:**](https://github.com/pmorim/sistca-react/tree/master/3.%20exercise) The solution to the proposed exercise.
- [**4. challenge:**](https://github.com/pmorim/sistca-react/tree/master/4.%20challenge) The solution to the proposed challenge.

## Setup your own React app

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

## Authors

Class: **3DA_Inglês** @ISEP2021

- 1180798 **Pedro Morim**
- 1180861 **Duarte Garcia**
- 1180868 **Luís Garcia**
- 1180872 **Miguel Santos**
