import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./components/Root";
import CategoryView from "./components/CategoryView";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";
import ItemDataService from "./services/item.js";

function App() {
  const [cart, setCart] = React.useState(["Test", "Items"])
  const [animals, setAnimals] = React.useState([])
  const [sketches, setSketches] = React.useState([])
  const [celebrities, setCelebrities] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false);
  // Disabled until client gets commision work
  // const [commissions, setCommissions] = React.useState(["Test", "Commissions"])

  React.useEffect(() => {
    getAnimals();
    getSketches();
    getCelebrities();
  }, []);

  const commonProps = {}
  const categories = [animals, sketches, celebrities]

  const getAnimals = () => {
    setIsLoading(true);
    ItemDataService.getItemsByCategory("Animals")
      .then(response => {
        setAnimals(response.data.items)
        console.log(animals)
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const getSketches = () => {
    setIsLoading(true);
    ItemDataService.getItemsByCategory("Sketches")
      .then(response => {
        setSketches(response.data.items)
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const getCelebrities = () => {
    setIsLoading(true);
    ItemDataService.getItemsByCategory("Celebrities")
      .then(response => {
        setCelebrities(response.data.items)
        console.log(celebrities);
        setIsLoading(false);
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
          element: <HomePage animals={animals} categories={categories} isLoading={isLoading}/>,
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
          element: <CategoryView category={celebrities} />,
        },
      ]
    }
  ])


  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <ContactForm />
    </React.Fragment>
  );
}

export default App;
