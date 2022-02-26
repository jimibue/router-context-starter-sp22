#  React starter with router, context, axios setup
You can clone this and use this as a starting point for HW and Lectures or you can
just use it as a reference

View live demo [here](https://boring-curran-6ef654.netlify.app).

###  Getting Started: Setup Instructions


```
$ git clone git@github.com:jimibue/router-context-starter-sp22.git <project-name>
$ cd  <project-name>
$ yarn
$ yarn start

//  git/github: if you want to use github remove origin and
// create your own repo and added that origin
$ git remote rm origin
$ git remote add origin ssh-link
$ git add .
$ git commit -m 'init'
$ git push origin master

``` 

### what is included in this project
- axios
- react-router-dom v6
- data provider skelton

#### App.js
App.js is where the navbar lives where our nested routes or render in 
the Outlet component
```javascript
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Users App</h1>
      <nav
        style={{
          borderBottom:'1px solid'
        }}
        >
          <Link to='/home'>Home</Link> - {' '}
          <Link to='/about'>About</Link> 
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;
```

#### DataProvider.js
DataProvider.js is where we can manage global state for our app, and export
DataContext to be used in components to get and set this state

```javascript
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [dataDemo, setDataDemo] = useState('dataDemo from provider');

  // create an object that will be 'global state'
  const dataProviderThing = {
    dataDemo,
    setDataDemo
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
```

To use this provider we can use the useContext hook and the DataContext obj
example given below in the Home.js file

```javascript
import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const Home = ()=>{
    const {dataDemo, dataDemo} = useContext(DataContext)
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>setDataDemo('changed in about')}>change</button>
            <p>demoState: {dataDemo}</p>
        </div>
    )
}

export default Home
```

#### index.js
In our index js we wrap our whole App with the DataProvider, this way it well be accessible to all children components.  We also define our routes and which components they render

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Home from "./pages/Home";


const NotFound = ()=>{
  return <p>path not found</p>
}

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
