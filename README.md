# **Weather app**

- [**Weather app**](#weather-app)
  - [**About the project**](#about-the-project)
  - [**Lighthouse rating**](#lighthouse-rating)
  - [**Tech stack**](#tech-stack)
  - [**Getting started**](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Run/Test](#runtest)
  - [**Showcase**](#showcase)
    - [Block location](#block-location)
    - [Allow location](#allow-location)
    - [Search locations](#search-locations)

## **About the project**

---

This project was developed to learn how to request information from a REST API.

## **Lighthouse rating**

---

![LighthouseRating](./docs/imgs/lighthouse-weatherApp.PNG)

## **Tech stack**

---

<!-- markdownlint-disable MD033 -->
<p>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Html5" width="40" height="40" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Css3" width="40" height="40" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" />
    </a>
    <a href="https://reactjs.org/" >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40" />
    </a>
    <a href="https://webpack.js.org/" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" width="40" height="40" />
    </a>
    <a href="https://babeljs.io/" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt="Babel" width="50" height="50" />
    </a>
    <a href="https://eslint.org/" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" alt="Eslint" width="50" height="50" />
    </a>
    <a href="https://git-scm.com/" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
            alt="Eslint" width="50" height="50" />
    </a>
</p>
<!-- markdownlint-enable MD033 -->

## **Getting started**

---

### Prerequisites

|     | Version | Installation                |
| --- | ------- | --------------------------- |
| npm | 9.6.4+  | `npm install npm@latest -g` |

### Run/Test

**Step 1:**

```bash
git clone git@github.com:YuneidyC/todo-app.git # Clone the repo
npm install # Install NPM packages
```

**Step 2:**

- Create an account at [**OpenWeather**](https://openweathermap.org/).
- Go to `Profile > My API keys`.
- Create a new key:
  - (Optional) Write a new name for your key.
  - Click `Generate`.
- **Check the status column and make sure that the new key is active**.
- Copy the key.
- Open `.env.example`, replace `<YOUR_API_KEY>` with your key and save.
- Rename the file `.env.example` to `.env.local`.

**Step 3:**

Open bash or powershell in the root of the repository and execute:

```bash
npm run start # Run the app
```

## **Showcase**

---

### Block location

![BlockLocation](./docs/imgs/block-location.gif)

### Allow location

![AllowLocation](./docs/imgs/allow-location.gif)

### Search locations

![SearchLocations](./docs/imgs/search-location.gif)
