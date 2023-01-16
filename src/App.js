import React, { useContext }  from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from "./context/auth-context";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/auth/Login";

function App() {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={<div> home </div>} />
        <Route path="login" element={<Login />} />
        <Route
          path="private"
          element={
            <PrivateRoute>
              <div> private </div>
            </PrivateRoute>
          }
        />
        {/*<Route path="*" element={<div />} />*/}
      </Routes>
    </div>
  );
}

export default App;
