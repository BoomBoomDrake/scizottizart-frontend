import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./components/Root";
import CategoryView from "./components/CategoryView";
import HomePage from "./components/HomePage";
import ItemDataService from "./services/item.js";

function App() {
  const [cart, setCart] = React.useState(["Test", "Items"])
  const [animals, setAnimals] = React.useState(["Test", "Animals"])
  const [sketches, setSketches] = React.useState(["Test", "Sketches"])
  const [celebrities, setCelebrities] = React.useState(["Test", "Celebrities"])
  // Disabled until client gets commision work
  // const [commissions, setCommissions] = React.useState(["Test", "Commissions"])

  const commonProps = {}
  const categories = {animals, sketches, celebrities}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/", 
          element: <HomePage />,
        },
        {
          path: "/animals",
          element: <CategoryView category={animals} />,
        },
        {
          path: "/sketches",
          element: <CategoryView category={sketches} />,
        },
        {
          path: "/celebrities",
          element: <CategoryView category={sketches} />,
        },
      ]
    }
  ])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
