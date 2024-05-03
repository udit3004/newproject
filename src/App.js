import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from "./Components/Body";
function App() {
 const router= createBrowserRouter([
      {
        path:"/",
        element:<Body/>
      }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
