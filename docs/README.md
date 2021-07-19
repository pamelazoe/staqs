# Welcome to staQ's documentation

## Overview

### What is this project about?

I work with software and thereby, I'm a professional mistake maker. It means that, to be able to make things work, I also have to be a professional web surfer of a very specific sphere: [Stackoverflow](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454).

<div style="text-align: center;">
<img style="margin:0 30px" src="https://programmercave0.github.io/assets/stackoverflow_memes/so_meme4.jpg" height="250">
<img style="margin:0 30px" src="https://programmercave0.github.io/assets/stackoverflow_memes/so_meme8.jpg" height="250">
</div>

This website has saved me many times even before I had any contact with programming, and now that I'm a Developer, this is one of my most used tools.

But sometimes it's just annoying to change windows or workspaces to go to the browser and type whatever I need to search. And the nearest contact with the internet is my beloved terminal. So... terminal + stackoverflow = GET THIS NASTY ERROR OUT OF MY WAY.

This is not a new concept and has been implemented before by libraries like how2, but I wanted to take a dabble on it and see how far I could go. Spoiler alert: not very far <img height="15" src="https://emoji.slack-edge.com/T07S50KDX/crydog/91177cc893512efb.png"> Who would have thought that displaying a bunch of strings in a black canvas would be so difficult.

But enough of my whinning, lets get you to the setup part so you can try this master piecen't.

<!-- Example project types:

    Contribution to a popular Open Source Project
    Solve a problem and write up a case of study
    Write a problem set (assignment) to be used in the future
    Write a tool you wish you had for this course

You need to submit your working code in github, including (depending on your project type):

    description of the problem you want to solve
    sketch out the solution
    identify the features, bugs, PR’s you plan on contributing to Open Source
    describe the learning objective for a problem set and provide a the design -->

### Setup & Installation

#### StackApps key

For this project, we will be using StackExchange's API, which is StackOverflow and StackApp's parent company.
StackOverflow's unauthenticated endpoint allows only 300 hits per day, and to bypass this quota issue we will need a key.
This will give us 10,000 hits per IP,x per day.
To register a new application, go to https://stackapps.com/apps/oauth/register and register or login with Facebook, Google or email and password.

Fill in the form making sure that OAuth Domain and Application Website are set to localhost and that Enable Client Side OAuth Flow and Disable Desktop Application OAuth Redirect Uri boxes are not ticked.
Submit your changes and copy or store the generated key because we will need it later.

#### Installation

```terminal
git clone https://github.com/pamelazoe/staq.git
```

```terminal
cd staq
```

```terminal
npm run postinstall
```

```terminal
cd API && echo "STACKOVERFLOW_KEY=" > .env && npm start
```

Link

```terminal
cd CLI && npm link
```

Unlink

```terminal
npm unlink -g
```

### Usage

```terminal
staq <"Error/Query to search"> [--tags]
```

```terminal
staq "reference error" -t javascript
```

### Process
