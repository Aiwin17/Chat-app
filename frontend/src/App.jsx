import Body from "./components/Body";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import { Toaster } from "react-hot-toast";
import { SocketContextProvider } from "./context/SocketContex";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <div className="h-screen bg-zinc-800 fixed top-0 right-0 left-0 bottom-0 overflow-y-scroll scrollable-hide">
      <Provider store={store}>
        <SocketContextProvider>
          <RouterProvider router={appRouter} />
        </SocketContextProvider>
      </Provider>
      <Toaster />
    </div>
  );
};

export default App;
