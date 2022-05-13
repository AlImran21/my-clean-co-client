import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from './routes/PublicRoutes';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => <Route
              key={index}
              path={path}
              element={<Component />}
            />
            )
          }
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
