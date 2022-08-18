# React-router-dom practise 🛤

This project was initialized with <code>create-react-app</code>. Then, <code>react-router-dom</code> was installed, so everything is up and running. *BrowserRouter* was already implemented in the <code>index.js</code> file.

To start, you only need to run the following:

```bash
npm install
```

---

## Iteration 1: The navigation 🛳

### The routes

Right now, our <code>App.js</code> component is only displaying the <code>Home</code> component, but we don't have a way of accessing the other views, such as Contacts or Projects.

- Use the `<Routes>` tag to create a specific `<Route>` for each one of our views: **for now just do Home, Contact and Projects**.

💡 Remember the Route syntax:
```js
<Route path="contact" element={<Contact/>} />
```

- Also, include a `Route` for those cases when the user has typed a route that doesn't exist, and make sure it displays the error page.

> ⚠️ Remember to import the components and everything you need from 'react-router-dom', or it won't work.

### The navbar

- Create a `Navbar` component to be able to access those routes, and import it into the App.js file.

> ⚠️ When doing the navbar also remember to import the Link from 'react-router-dom'.

When you finish this iteration, **you should be able to navigate through the different views of the app with your navbar**.

---

## Iteration 2: Nested routes 🪺

As you can see, we have a `ProjectsApps` component and a `ProjectsGames` component. That is because these components are supposed to be displayed into the `Projects` component.

1. In the `App.js` file, create a nested route to make sure the final routes are: 
- projects/games
- projects/apps

2. In the `Projects` view, create a small navigation system (buttons, links or whichever one you prefer) to switch between games and apps

3. In the `Projects` view, use the `<Outlet/>` component from 'react-router-dom' to make sure the `games` and `apps` components are displayed when the route matches.

### When you finish, it should do the following:

![](final.gif)


<details>
<summary> ⛔️ Click to see the solution in times of crisis</summary>

App.js
```js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import Projects from './views/Projects';
import ProjectsGames from './components/ProjectsGames';
import ProjectsApps from './components/ProjectsApps';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />}>
          <Route path="games" element={<ProjectsGames />} />
          <Route path="apps" element={<ProjectsApps />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
```

components/Navbar.jsx
```js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}
```

views/Projects.jsx
```js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <nav>
        <ul>
          <li><Link to="/projects/games">See games</Link></li>
          <li><Link to="/projects/apps">See apps</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
```

</details>