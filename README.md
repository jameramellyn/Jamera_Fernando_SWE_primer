# TCG-SWE-Primer

Analyst/associate name: 

Welcome to the SWE Primer for Triton Consulting Group! In this tutorial, you will learn the basics of MERN stack software engineering in the context of relational databases. As a quick overview, MERN is a standard full-stack engineering stack used in industry. Here is what each letter stands for:

1. M = MongoDB. MongoDB is a free NoSQL (or non-relational database) database service that is used to store unstructured or generally variable data. Think of a MongoDB collection as a folder of JSON files, where each file (document) can have different keys — but unlike a real folder, you can query across all of them instantly with a database query. In this primer, you will actually not be using MongoDB, but Supabase. Supabase is a free SQL-based database service that allows for the storage of more structured data; think of it more like an Excel spreadsheet, where each row has to have information related to the columns that define it.
2. E = Express.js. Express is a minimal and open-source backend web application framework built for Node.js (one of the other core parts of MERN) that is designed to simplify building web applications through the use of APIs, or Application Programming Interfaces. Later in this primer, you will see that the primary way that you communicate between the backend and the frontend is through APIs. Express is the library that allows for this to happen.
3. R = React. React is a JavaScript library for building interactive user interfaces. While traditional HTML/CSS/JS can become difficult to manage as applications grow - requiring complex coordination across multiple files and manual DOM manipulation - React simplifies this by letting you build UIs out of reusable components, each containing its own structure, styling, and logic in one place. React also introduces a declarative approach to managing state, so the UI automatically updates when your data changes, without you needing to wire everything up manually.
4. N = Node.js. Node is an open-source cross-platform JavaScript runtime environment that is the backbone behind our servers and web applications. It is what allows for the easy creation of the web servers that run our frontend and backend, and is what allows Express to run. Node's event-driven, non-blocking architecture makes it efficient at handling many simultaneous requests, making it a strong choice for scalable web applications. It also comes bundled with npm (Node Package Manager), giving developers access to a massive ecosystem of open-source libraries and tools.

This primer is split into three main sections, and each should only take you a couple of hours. Please try your best to complete each of these parts WITHOUT vibe-coding. Although using AI is an important skill to learn for software engineers nowadays, it is not an **additive** skill but a **multiplicative** one. If you do not know how to build web applications or understand where errors are coming from, using AI will only result in the creation of inefficient and security risk-prone websites, which are red flags for our clients. However, if you have the core knowledge required, AI can help you become a significantly faster and better developer. 

P.S. if you want to go into this primer with an in-depth knowledge of how React works, I strongly recommend the Tic-Tac-Toe tutorial available on the React homepage (https://react.dev/learn/tutorial-tic-tac-toe). I used this to first learn React, and it is an extremely effective tool at getting you familiar with complex concepts you will definitely see!

# Part 0: Introduction

Let's get an introduction into this primer by setting your environment up and doing an exploration of the codebase.

## Part 0-0: Installation and Setup
### Part 0-0-1: VS Code + Prettier + ESLint

First, install VS Code using the following link: https://code.visualstudio.com/download. There are a variety of different coding interfaces out there, but among those that I have personally used, VS Code is both free and has an extensive set of developer tools and libraries at your disposal, including modern coding tools such as Github Copilot and Claude Code extensions that have been officially released by their respective parent companies.

Once you have installed VS Code, go to the extensions section and install Prettier and ESLint and enable them. Prettier and ESLint are libraries that are particularly effective for full-stack SWE programming, as they enforce typing and styles, which make your code more accurate and readable for yourself, your teammates, and the client.

### Part 0-0-2: Git

Git is the industry standard for version control - it tracks your code over time, lets you roll back breaking changes, and makes collaboration with other developers seamless by allowing merging. Make sure to install Git using https://git-scm.com/install/, and sign up for a Github account at https://github.com/. To verify that Git is properly installed on your device, open your terminal and run `git --version`. You should see something like `git version 2.x.x.`. Then, before using Git for the first time, take the information you got from your Github account and run the following commands:
```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

This creates an identity configuration, and is what will get attached to your commits. To properly set up this repository, follow these steps:
1. Fork the repository by clicking on the dropdown next to "Fork" and clicking "Create a New Fork". Make sure to unselect "Copy the `main` branch only" in order to get the incomplete version that you can fill out.
2. Make a copy of this repository in your personal computer by doing `git clone [github fork URL]` in a directory of your choice.
3. Switch to the `incomplete` branch by doing `git switch incomplete`. By the way, to see all branches, you can do `git branch -a`.

Now, you should have your own remote copy of the TCG-SWE-Primer on your Github account, and should have a local copy of the remote code on your device. Next, we are going to create your first commit and push it from your local repository to your remote repository:
1. In general, you want to make your changes on a branch and then merge them back into the appropriate branch. This is to make sure that any changes that you make can be tested outside the main production environment before anything is actually integrated. Make sure that you are on the `incomplete` branch with `git branch -a`, and create a branch by doing `git checkout -b change-readme`.
2. Open this `README.md` file in your local repository, and edit the field at the top that says `Analyst/Associate Name: ` with your name.
3. Next, we are going to add your changes by doing `git add .`. This command tells Git which modified or new files that you want to include in your next commit, almost like a "preparation step" before committing. Doing `git add .` adds all the changed files at once. You can also add just the README by doing `git add README.md`.
4. Then, we are going to commit your changes by doing `git commit -m "changed readme with my name"` (note that this message after `-m` can be anything). This command takes everything in the staging area and saves it as a permanent snapshot in the local repository's history. Each commit gets a unique ID, your name and email, a timestamp, and a commit message describing what changed. In general, commit messages should be short but descriptive.
5. Next, let's push your changes. Doing `git push` allows you to copy the changes that you have made in your local repository into the remote repository. After doing this, if successful, you should be able to go to your remote repository on Github and see a new branch called `change-readme`.
6. Finally, let's merge the changes made in `change-readme` into `incomplete`. This is actually how real software engineers collaborate - multiple SWEs make changes in their own branches, and it's all eventually merged into a common branch with everybody's code (most of the time, we have to deal with merge conflicts, but that should not be a problem here). Run the following commands in your terminal while in your local repo:
   ```
   git switch incomplete
   git merge change-readme
   git push
   ```

   You should now be able to see your name on the README in the `incomplete` branch!

### Part 0-0-3: Node

Node, as mentioned above, is a JavaScript runtime environment that allows us to access libraries and create web servers. When installing, select the LTS (Long-Term Support) version, as this is the most stable and production-ready build and is the least likely to give you issues. Visit https://nodejs.org/en and install Node. To verify that it has been installed, run `node --version`, and you should see something like `v2X.XX.X`. Since npm (Node Package Manager, the library mentioned before) also comes bundled with Node, verify that too with `npm --version`, and you should see something like `v10.X.X`. 

Note: if you see other versions for Node and NPM, you should still be fine (especially if this guide has not been updated!). Just make sure you are using verified and stable version, and you should be fine!

### Part 0-0-4: Postman

The easiest way to test APIs is to send requests to them and see if they respond as expected. There are a variety of ways to do this, but a platform that is very effective at doing it is Postman. Install Postman using https://www.postman.com/downloads/, and it should appear as a desktop application. For the purposes of this primer, you will not need to create a Postman account, as all we will be using it for is lightweight API testing. However, for features such as saving common testing queries and creating folders of tests to share with collaborators, I strongly recommend the creation of a Postman account.

### Part 0-0-5: Supabase

Supabase is, as mentioned before, the free SQL database service that we will be using for this project (and what you will likely be using for most TCG projects). Create an account at https://supabase.com/ and follow the instructions to create your own personal organization and project. Once you have created your project, navigate to "Project Settings". Extract the following values:
1. Under "General", you will find a project ID. This project ID will be used to form your Supabase URL, which is https://[project-id].supabase.co. 
2. Under "API Keys", navigate to the "Legacy anon, service_role API keys" section, and get your service role key. This is a special API key that allows you to work with Supabase without setting up the internal RLS (row level security) service that can cause issues with accessing and editing data. 

Grab these two values and make a copy of `/backend/.env.example` and call it just `.env`. Then, fill in the `SUPABASE_SERVICE_ROLE_KEY` and `SUPABASE_URL` sections with the two values you just extracted.

Note: NEVER provide these values to an AI or share them outside of your team/organization. Also, when working with projects of your own, make sure that the `.env` which stores these values is added to your `.gitignore`, which removes certain files from tracking in Git (it has already been added for this primer). Exposing API keys is a major security risk, and under real SWE production scenarios, which we are training you for, can result in major breaches and thousands of dollars lost, if not more.

## Part 0-1: Running the Repository

Now, let's make sure that you are able to run this repository. Open your local repository in VS Code and open your terminal from the top left menu. You should see a terminal open with the head already being at your local repository. In the first terminal, run:
```
cd frontend
npm install
npm run dev
```

This set of commands goes to the frontend directory within the local repository, installs the appropriate Node packages, and runs the Node script to start the frontend web server on your device. This should open at http://localhost:3000. You should see the basic structure of the app, but nothing should appear in terms of the data.

Then, create a new terminal within VS Code by clicking on the "+" button in the terminal window. Run the following commands to do the same for the backend:
```
cd backend
npm install
npm start
```

After this, you should have two terminals, one with frontend logs and one with backend logs. If you ever need to debug what is going on in your code, make sure to check these terminals.