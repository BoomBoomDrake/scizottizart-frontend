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

  React.useEffect(() => {
    getAnimals();
    getSketches();
    getCelebrities();
  }, []);

  const commonProps = {}
  const categories = [animals, sketches, celebrities]

  async function getAnimals() {
    ItemDataService.getItemsByCategory("Animals")
      .then(response => {
        console.log(response.data.items)
        setAnimals(response.data.items)
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async function getSketches() {
    ItemDataService.getItemsByCategory("Sketches")
      .then(response => {
        console.log(response.data.items)
        setSketches(response.data.items)
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async function getCelebrities() {
    ItemDataService.getItemsByCategory("Celebrities")
      .then(response => {
        console.log(response.data.items)
        setCelebrities(response.data.items)
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/", 
          element: <HomePage categories={categories}/>,
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
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
