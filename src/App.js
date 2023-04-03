import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import _ from "lodash";

import Root from "./components/Root";
import CategoryView from "./components/CategoryView";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";
import ShoppingCart from "./components/Shopping Cart";
import Dashboard from "./components/Dashboard"
import ItemDataService from "./services/item.js";
import DBAddItem from "./components/DBAddItem";
import DBSearchResults from "./components/DBSearchResults";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  const [cart, setCart] = React.useState([])
  const [searchResults, setSearchResults] = React.useState(null);
  const [animals, setAnimals] = React.useState([])
  const [sketches, setSketches] = React.useState([])
  const [celebrities, setCelebrities] = React.useState([])
  // Disabled until client gets commision work
  // const [commissions, setCommissions] = React.useState(["Test", "Commissions"])

  const [displayCartButton, setDisplayCartButton] = React.useState(true);

  React.useEffect(() => {
    getAnimals();
    getSketches();
    getCelebrities();
  }, []);

  const categories = [animals, sketches, celebrities]

  const find = (query, by) => {
    ItemDataService.find(query, by)
            .then(response => {
              setSearchResults(response.data.items)
              return response.data.items
            })
  }

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

  const addStoreItem = (data) => {
    ItemDataService.addStoreItem(data)
      .then(response => {
        console.log(response);
        alert("Item uploaded successfully. Returning to dashboard home.");
        window.location = "/dashboard"
      })
      .catch(error => {
        alert("Error: " + error)
        return {error: error}
      })
  }

  const updateStoreItem = (data) => {
    ItemDataService.updateStoreItem(data)
      .then(response => {
        console.log(response.data)
        alert("Item successully updated. Returning to dashboard home.")
        window.location = "/dashboard";
      })
      .catch(error => {
        alert("Error: " + error);
        return {error: error}
      })
  }

  const deleteStoreItem = (id) => {
    ItemDataService.deleteStoreItem(id)
      .then((response) => {
        console.log(response)
        alert("Item successully deleted. Returning to dashboard home.")
        window.location = "/dashboard";
      })
      .catch(error => {
        alert("Error: " + error);
        return {error: error}
      })
  }

  const createCheckoutSession = (arr) => {
    ItemDataService.createCheckoutSessions(arr)
      .then((res) => {
        window.location = res.data.url
      })
      .catch(e => {
        console.error(e);
      });
  }

  const addToCart = (childData) => {

    if (checkItemExistInCart(childData)) {
      updateCartItem(childData);
    } else {
      setCart([...cart, {...childData}])
    }
  }

  const checkItemExistInCart = (childData) => {
    let filtered = cart.filter(item => {
      return isEqual(childData, item)
    })

    return filtered.length > 0
  }

  const updateCartItem = (childData) => {

    let updatedCart = cart.map((item) => {
      if (isEqual(childData, item)) {
        return {...item, quantity: item.quantity + childData.quantity};
      } else return item
    })

    setCart(updatedCart);
  }

  const isEqual = (childData, existingData) => {
    if (childData._id !== existingData._id) {
      return false
    } else {
      return _.isEqual(childData.attributes, existingData.attributes)
    }
  }

  const incItemCount = (childData) => {
    setCart((current) =>
      current.map((item) => {
        if (item.id === childData.id) {
          return { ...item, quantity: Number(item.quantity + 1) };
        }
        return item;
      })
    );
  };

  const decItemCount = (childData) => {
    if (childData.quantity === 1) {
      let response = window.confirm("Remove from cart?");
      if (response) {
        removeFromCart(childData);
      } else return;
    }
    setCart((current) =>
      current.map((item) => {
        if (item.id === childData.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const removeFromCart = (childData) => {
    let filteredCart = cart.filter((item) => {
      return !isEqual(childData, item)
    })
    setCart(filteredCart);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root setDisplayCartButton={setDisplayCartButton}/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
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
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/cancel",
          element: <Cancel />,
        },
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard 
                  categories={categories}
                  find={find}
                  setSearchResults={setSearchResults}
                  setDisplayCartButton={setDisplayCartButton}
                />,
      children: [
        {
          path: "/dashboard",
          element: <DBSearchResults 
                      searchResults={searchResults} 
                      updateStoreItem={updateStoreItem}
                      deleteStoreItem={deleteStoreItem}
                    />
        },
        {
          path: "/dashboard/add-item",
          element: <DBAddItem 
                    addStoreItem={addStoreItem}
                    setSearchResults={setSearchResults}
                    searchResults={searchResults}
                    find={find}
                  />
        }
      ] 
    }
  ])


  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <ContactForm />
      <ShoppingCart 
        cart={cart}
        removeFromCart={removeFromCart}
        incItemCount={incItemCount}
        decItemCount={decItemCount}
        setCart={setCart}
        createCheckoutSession={createCheckoutSession}
        displayCartButton={displayCartButton}
      />
    </React.Fragment>
  );
}

export default App;
