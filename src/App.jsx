//Packages
import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom';

//Components
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App