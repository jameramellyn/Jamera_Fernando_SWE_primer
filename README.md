# TCG-SWE-Primer

Analyst/associate name: 

Welcome to the SWE Primer for Triton Consulting Group! In this tutorial, you will learn the basics of MERN stack software engineering in the context of relational databases. As a quick overview, MERN is a standard full-stack engineering stack used in industry. Here is what each letter stands for:

1. M = MongoDB. MongoDB is a free NoSQL (or non-relational database) database service that is used to store unstructured or generally variable data. Think of a MongoDB collection as a folder of JSON files, where each file (document) can have different keys — but unlike a real folder, you can query across all of them instantly with a database query. In this primer, you will actually not be using MongoDB, but Supabase. Supabase is a free SQL-based database service that allows for the storage of more structured data; think of it more like an Excel spreadsheet, where each row has to have information related to the columns that define it.
2. E = Express.js. Express is a minimal, open-source backend web application framework built for Node.js that simplifies building web applications through APIs (Application Programming Interfaces). In this primer, APIs are the primary way the frontend and backend communicate — Express is the library that makes this possible.
3. R = React. React is a JavaScript library for building interactive user interfaces. While traditional HTML/CSS/JS can become difficult to manage as applications grow - requiring complex coordination across multiple files and manual DOM manipulation - React simplifies this by letting you build UIs out of reusable components, each containing its own structure, styling, and logic in one place. React also introduces a declarative approach to managing state, so the UI automatically updates when your data changes, without you needing to wire everything up manually.
4. N = Node.js. Node is an open-source, cross-platform JavaScript runtime environment that powers our servers and web applications. It enables the web servers that run our frontend and backend, and provides the runtime Express runs on. Node's event-driven, non-blocking architecture makes it efficient at handling many simultaneous requests, making it a strong choice for scalable web applications. It also comes bundled with npm (Node Package Manager), giving developers access to a massive ecosystem of open-source libraries and tools.

This primer is split into three main sections, and each should only take you a couple of hours. Please try your best to complete each of these parts WITHOUT vibe-coding. Although using AI is an important skill to learn for software engineers nowadays, it is not an **additive** skill but a **multiplicative** one. If you do not know how to build web applications or understand where errors are coming from, using AI will only result in the creation of inefficient and security risk-prone websites, which are red flags for our clients. However, if you have the core knowledge required, AI can help you become a significantly faster and better developer. 

P.S. if you want to go into this primer with an in-depth knowledge of how React works, I strongly recommend the Tic-Tac-Toe tutorial available on the React homepage (https://react.dev/learn/tutorial-tic-tac-toe). I used this to first learn React, and it is an extremely effective tool at getting you familiar with complex concepts you will definitely see!

# Part 0: Introduction

Start by setting up your environment and exploring the codebase.

## Part 0-0: Installation and Setup
### Part 0-0-1: VS Code + Prettier + ESLint

First, install VS Code: https://code.visualstudio.com/download. Among the editors I've used, VS Code is both free and feature-rich, with an extensive ecosystem of developer tools — including officially released extensions like GitHub Copilot and Claude Code.

Once VS Code is installed, go to the Extensions panel and install both Prettier and ESLint. These tools enforce consistent code formatting and style rules, making your code more accurate and readable for yourself, your teammates, and the client.

### Part 0-0-2: Git

Git is the industry standard for version control - it tracks your code over time, lets you roll back breaking changes, and makes collaboration with other developers seamless by allowing merging. Make sure to install Git using https://git-scm.com/install/, and sign up for a Github account at https://github.com/. To verify that Git is properly installed on your device, open your terminal and run `git --version`. You should see something like `git version 2.x.x.`. Then, before using Git for the first time, take the information you got from your Github account and run the following commands:
```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

This identity configuration will be attached to all your commits. To set up this repository, follow these steps:
1. Fork the repository by clicking the dropdown next to "Fork" and selecting "Create a New Fork". Unselect "Copy the `main` branch only" to get the incomplete version.
2. Clone your fork onto your computer with `git clone [github fork URL]` in a directory of your choice.
3. Switch to the `incomplete` branch with `git switch incomplete`. To see all branches, run `git branch -a`.

You now have a remote fork on GitHub and a local clone on your device. Next, let's create your first commit and push it:
1. Always make changes on a dedicated branch and merge back into the target branch — this keeps changes isolated until they've been tested. Confirm you're on `incomplete` with `git branch -a`, then create a new branch with `git checkout -b change-readme`.
2. Open `README.md` and fill in the `Analyst/Associate Name:` field with your name.
3. Stage your changes with `git add .` — this tells Git which files to include in the next commit. You can also stage just the README with `git add README.md`.
4. Commit with `git commit -m "changed readme with my name"` (the message can be anything, but keep it short and descriptive). This saves a permanent snapshot to your local history with a unique ID, your name, and a timestamp.
5. Push with `git push` to copy the commit to your remote repository. If successful, you'll see a new `change-readme` branch on GitHub.
6. Finally, merge `change-readme` into `incomplete`. This is how real teams collaborate — each engineer works on their own branch and merges back when done. Run the following in your terminal:
   ```
   git switch incomplete
   git merge change-readme
   git push
   ```

   You should now be able to see your name on the README in the `incomplete` branch!

### Part 0-0-3: Node

Install Node from https://nodejs.org/en — select the LTS (Long-Term Support) version, as it is the most stable and production-ready build. Verify the installation with `node --version` (expect something like `v2X.XX.X`) and `npm --version` (expect `v10.X.X`), since npm comes bundled with Node.

Note: other version numbers are fine, especially if this guide hasn't been updated recently. Just make sure you're on a verified, stable release.

### Part 0-0-4: Postman

Postman is a desktop application for testing APIs by sending requests and inspecting responses. Install it from https://www.postman.com/downloads/. For this primer you won't need an account, but I recommend creating one for features like saving requests and sharing test collections with collaborators.

### Part 0-0-5: Supabase

Supabase is the free SQL database service used for this project — and most TCG projects going forward. Create an account at https://supabase.com/, create an organization and project, then navigate to "Project Settings" and extract the following values:
1. Under "General", you will find a project ID. This project ID will be used to form your Supabase URL, which is https://[project-id].supabase.co. 
2. Under "API Keys", navigate to the "Legacy anon, service_role API keys" section, and get your service role key. This is a special API key that allows you to work with Supabase without setting up the internal RLS (row level security) service that can cause issues with accessing and editing data. 

Copy `/backend/.env.example` and rename it `.env`, then fill in `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` with the values above.

Note: NEVER provide these values to an AI or share them outside of your team/organization. Also, when working with projects of your own, make sure that the `.env` which stores these values is added to your `.gitignore`, which removes certain files from tracking in Git (it has already been added for this primer). Exposing API keys is a major security risk, and under real SWE production scenarios, which we are training you for, can result in major breaches and thousands of dollars lost, if not more.

## Part 0-1: Running the Repository

Open your local repository in VS Code and open a terminal from the top-left menu — it should already be pointed at your project directory. In the first terminal, run:
```
cd frontend
npm install
npm run dev
```

This navigates to the frontend directory, installs dependencies, and starts the development server at http://localhost:3000. You should see the app's basic structure, but no data will appear yet.

Then, create a new terminal within VS Code by clicking on the "+" button in the terminal window. Run the following commands to do the same for the backend:
```
cd backend
npm install
npm start
```

After this, you should have two terminals, one with frontend logs and one with backend logs. If you ever need to debug what is going on in your code, make sure to check these terminals.

# Part 1: Backend

## Part 1-1: Setting Up Supabase

At this point, you should already have the organization, projects, and your `.env` variables defined. Now, you have to create three tables with the following structure:

**`users`**
| Column | Type |
|---|---|
| `id` | int8 (primary key) |
| `created_at` | timestamptz |
| `user_name` | text |
| `user_grad_year` | int8 |
| `user_tcg_status` | text |
| `user_email` | text |

**`projects`**
| Column | Type |
|---|---|
| `id` | int8 (primary key) |
| `created_at` | timestamptz |
| `project_name` | text |
| `project_manager_id` | int8 (foreign key → `users.id`) |
| `project_description` | text |

**`associates`**
| Column | Type |
|---|---|
| `id` | int8 (primary key) |
| `created_at` | timestamptz |
| `project_id` | int8 (foreign key → `projects.id`) |
| `associate_id` | int8 (foreign key → `users.id`) |

A **foreign key** links a column in one table to the primary key of another, enforcing that the referenced row must exist. For example, `project_manager_id` references `users.id` because every project manager must be an existing user. The `associates` table is a **junction table** — each row represents one user's membership on one project, linking `users` and `projects` together.

To create these tables in Supabase:
1. Go to the "Table Editor" in the Supabase sidebar.
2. Click "New Table" and give it a name.
3. Add each column with the correct name, data type, and foreign key references where applicable.

Once all three tables are created, you are ready to build the backend APIs.

## Part 1-2: Creating the Project Controller and Routes

The `/backend` folder currently has no logic for interacting with the `projects` table. Let's fix that by building its API.

The first step is creating a **controller** — a set of functions containing the core logic for accessing, adding, editing, and deleting rows.

Here is what each request type does in the context of our primer:
1. A GET request retrieves rows from a table to read.
2. A POST request creates new rows.
3. A PUT request edits existing rows.
4. A DELETE request removes a row from the table.

APIs also return different status codes depending on the outcome of the request:
- **200 OK** — the request succeeded and the response contains the expected data.
- **201 Created** — the request succeeded and a new resource was created (common for POST requests).
- **400 Bad Request** — the request was malformed or missing required fields (e.g. sending incomplete data).
- **401 Unauthorized** — the request lacks valid authentication credentials.
- **403 Forbidden** — the server understood the request but refuses to fulfill it (e.g. insufficient permissions).
- **404 Not Found** — the requested resource doesn't exist (e.g. querying an ID that isn't in the database).
- **500 Internal Server Error** — something went wrong on the server side (e.g. a bug in your backend code or a failed database query).

The functionality and availability of these vary depending on the API. For example, if you were to access repository data from the GitHub API, you could use GET, but exposing a DELETE endpoint to all API users would be a security risk.

Open `projects.ts` in `/backend/controllers` and start with `getProjectById` — given a project ID, return that project's row. Define the function header:

```
export const getProjectById = async (req: Request, res: Response) => {}
```

Here's what each component does:
1. `export` allows the function to be called from other files.
2. `const` defines the function as a constant (i.e. it cannot be reassigned later in the file).
3. `getProjectById` is the name of the function.
4. `async` marks the function as asynchronous — if an operation takes time, it does not block other operations. This requires `await` inside the function, which pauses execution until the awaited response finishes.
5. `req: Request, res: Response` define the types for the incoming request and outgoing response.

Inside the curly braces, first extract the project ID from the request:
```
const projectId = req.params.id
```

`req.params` contains values embedded in the URL. In this case, we send a request to `localhost:4000/project/<id>`, and this line extracts that ID.

Now let's query Supabase. The Supabase client is already initialized in `app.ts` using the values from your `.env`. Use the following code to fetch the project with the given ID:

```
const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();
```

Here's what each chained method does:
1. `.from("projects")` specifies the table to query.
2. `.select("*")` selects all columns.
3. `.eq("id", projectId)` filters for rows where the `id` column matches `projectId`.
4. `.single()` ensures only one row is returned (since project IDs are unique).

Next, handle any errors:
```
if (error) {
    console.error("Error fetching project by ID:", error);
    return res.status(500).json({ error: "Failed to fetch project" });
}
```

We return a 500 here because this indicates a server-side failure (e.g. a bad database query), not a problem with the request itself.

Finally, return the data as JSON:
```
return res.json(data)
```

Your completed function should look like this:
```
// GET /project/:id - Get project by ID
export const getProjectById = async (req: Request, res: Response) => {
    const projectId = req.params.id;
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", projectId)
        .single();
    if (error) {
        console.error("Error fetching project by ID:", error);
        return res.status(500).json({ error: "Failed to fetch project" });
    }
    return res.json(data);
};
```

In addition to URL parameters (`req.params`), you can also pass data through the **request body** — useful for POST and PUT requests where you don't want fields visible in the URL:

```
const { field1, field2, field3 } = req.body;
```

Now implement the remaining controllers on your own:
1. **GET** `/projects/all` — return all projects.
2. **POST** `/project` — create a new project. Accept `name`, `managerId`, and `description` in the request body. Import or copy `checkUserExists` from `users.ts` and verify that the provided manager exists before creating the project.
3. **PUT** `/project/:id` — update an existing project. Accept any combination of `name`, `managerId`, and `description`. If `managerId` is provided, verify that the user exists.
4. **DELETE** `/project/:id` — delete a project by ID.

Once the controllers are done, define the routes in `routes/projects.ts`. Reference `routes/associates.ts` for the pattern — each route follows this structure:

```
router.<method>('<url>', <controllerFile>.<controllerFunction>)
```

## Part 1-3: Testing the Project APIs

Now that you have defined the project controller, test each API using Postman:
1. Make sure the backend is running (`cd backend` && `npm start`).
2. Enter the API URL in the URL field (e.g. `http://localhost:4000/projects/all`).
3. Set the request type (GET, POST, PUT, or DELETE) using the dropdown to the left of the URL field.
4. Verify that each endpoint behaves as expected — every request should return a `200 OK` response.

> **Note:** If `/projects/all` returns an error about `all` not being a valid ID, check your route order. Express matches routes top-to-bottom, so if `/projects/:id` is defined before `/projects/all`, the `all` literal gets caught as an ID parameter. Define `/projects/all` first to fix this.