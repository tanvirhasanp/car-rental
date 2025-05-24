import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home"
import About from "./pages/About";
import Vehicle from "./pages/Vehicle";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vehicle' element={<Vehicle />} />
      <Route path='testimonials' element={<Testimonials />} />
      <Route path='team' element={<Team />} />
      <Route path='contact' element={<Contact />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
