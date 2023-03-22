import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import _, { add } from "lodash";

import Root from "./components/Root";
import CategoryView from "./components/CategoryView";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";
import ShoppingCart from "./components/Shopping Cart";
import Dashboard from "./components/Dashboard"
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
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const createCheckoutSession = (arr) => {
    ItemDataService.createCheckoutSessions(arr)
      .then((res) => {
        // console.log(res.data);
        window.location = res.data.url
      })
      .catch(e => {
        console.error(e);
      });
  }

  const addToCart = (childData) => {
    if (cart.length === 0) {
      setCart([childData]);
    }

    if (checkItemExistInCart(childData)) {
      updateCartItem(childData);
    } else {
      setCart([...cart, childData])
    }
  }

  const checkItemExistInCart = (childData) => {
    let filtered = cart.map(item => {
      return isEqual(childData, item)
    })

    return filtered.length > 0
  }

  const updateCartItem = (childData) => {
    setCart((current) => {
      current.map((item) => {
        if (isEqual(childData, item)) {
          return {...item, quantity: item.quantity + childData.quantity};      }
      })
    })
  }

  const isEqual = (childData, existingData) => {
    if (childData.id !== existingData.id) {
      return false
    } else {
      return _.isEqual(childData.attributes, existingData.attributes)
    }
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
          element: <CategoryView category={animals} addToCart={addToCart} />,
        },
        {
          path: "/sketches",
          element: <CategoryView category={sketches} addToCart={addToCart} />,
        },
        {
          path: "/celebrities",
          element: <CategoryView category={celebrities} addToCart={addToCart}/>,
        },
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
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
