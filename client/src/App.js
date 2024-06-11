import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import User from "./pages/User";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/editexperiences/:edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
