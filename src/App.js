import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./components/Root";
import CategoryView from "./components/CategoryView";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";
import ShoppingCart from "./components/Shopping Cart";
import ItemDataService from "./services/item.js";

function App() {
  const [cart, setCart] = React.useState([])
  const [animals, setAnimals] = React.useState([])
  const [sketches, setSketches] = React.useState([])
  const [celebrities, setCelebrities] = React.useState([])
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
    ItemDataService.getItemsByCategory("Animals")
      .then(response => {
        setAnimals(response.data.items)
        console.log(animals)
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const getSketches = () => {
    ItemDataService.getItemsByCategory("Sketches")
      .then(response => {
        setSketches(response.data.items)
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const getCelebrities = () => {
    ItemDataService.getItemsByCategory("Celebrities")
      .then(response => {
        setCelebrities(response.data.items)
        console.log(celebrities);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const createCheckoutSession = (arr) => {
    console.log(arr);
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
          element: <CategoryView category={celebrities} />,
        },
      ]
    }
  ])


  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <ContactForm />
      <ShoppingCart 
        cart={cart} 
        setCart={setCart} 
        animals={animals}
        createCheckoutSession={createCheckoutSession}
      />
    </React.Fragment>
  );
}

export default App;
