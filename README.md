# React-router-dom practise 🛤

This project was initialized with <code>create-react-app</code>. Then, <code>react-router-dom</code> was installed, so everything is up and running. *BrowserRouter* was already implemented in the <code>index.js</code> file.

To start, you only need to run the following:

```bash
npm install
```

---

## Iteration 1: The navigation

Right now, our <code>App.js</code> component is only displaying the <code>Home</code> component, but we don't have a way of accessing the other views, such as <code>Contact</code> or <code>Other</code>.

Use the `<Routes>` tag to create a specific `Route` for each one of our views: Home, Contact.

💡 Remember the Route syntax:
```js
<Route path="contact" element={<Contact/>} />
```

Now, create a `Navbar` component to be able to access those routes, and import it into the App.js file. When you finish this iteration, **you should be able to navigate through the different views of the app with your navbar**.

---

## Iteration 2
