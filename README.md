<h1 align="center"> Welcome to My-Portfolio 🔥 </h1> 
<h3 align="center"> A Complete Customizable Elegant Personal Portfolio Website and is fully responsive <br /> built with react.js lets you display your works and Professional skills </h3>

<p align="center"> 
    <a href="https://duraishanmugaraj.github.io/#/" target="_blank">
        <img src="https://github.com/duraishanmugaraj/duraishanmugaraj.github.io/blob/master/portfolio.gif?raw=true"></img>
  </a>
</p>

## Sections 📚

⚡️ About me <br>
⚡️ Skills <br>
⚡️ Projects <br>
⚡️ Contact me <br>

## Features ✨

🔥 Completely Customizable <br>
🔥 Minimal UI + Reveal Animations <br>
🔥 Styled with Bootstrap v5 + Custom CSS <br>
🔥 Fully Responsive <br>
🔥 Reuseable React Components <br>

## Technologies used 🛠️

[✔️React](https://reactjs.org/) <br>
[✔️react-reveal](https://www.react-reveal.com/) <br>
[✔️Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) <br>
[✔️react-tilt](https://www.npmjs.com/package/react-tilt) <br>
[✔️iconify](https://iconify.design/) <br>
[✔️lottie files](https://lottiefiles.com/blog/working-with-lottie/how-to-use-lottie-in-react-app) <br>
[✔️react-social-icons](https://www.npmjs.com/package/react-social-icons) <br>
[✔️react-tilt](https://www.npmjs.com/package/react-tilt) <br>
[✔️react-router-dom](https://reactrouter.com/web/guides/quick-start) <br>

## Customize it to make your own portfolio ✏️

- **_Step 1_** <br>
  Fork this repo! <br>
  Clone this repo to your local machine. <br>
  download required dependencies by executeing following command

```python
    npm install
```

You can check it using `npm start`, it will open the website locally on your browser.

- **_Step 2_**

You will find `src/portfolio.js` file which contains the complete information about the user. The file looks something like below:

```python

//I Would Highly Recommend Customize The Theme According To Your Taste.
export const globalStyles = {
    "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)",
    "--txtcolor": "#272341",
    "--p_color": "#0499f2"
}

// Navigation Bar Name
export const navbar_name = " " //Your Name

// Main Page
export const main = {
    name: " ", //Your Name
    doamin: " ", //Your Domain
    resume: "" //Resume Link
}

...
```

You can change the theme , personal information , social media , skills, resume etc. in `src/portfolio.js` to directly reflect them in portfolio website.

## Deployment 📦

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the easiest way.

## Show your support 🙌
Give a ⭐️ if this project helped you! 

## References 👏🏻

- Some Design Ideas are taken from [simplefolio Project](https://github.com/cobidev/simplefolio) and [masterPortfolio Project](https://github.com/ashutosh1919/masterPortfolio).
