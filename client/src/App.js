import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import "./index.css";
import Editor from "./Pages/Editor";
import Login from "./Pages/Login"; // Убедитесь, что у вас есть Login компонент
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { ProtectedRoutes } from "./ProtectRoutes/ProtectRoutes";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Основной маршрут для Dashboard и его вложенные маршруты */}

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="" element={<Dashboard />} />
          <Route index element={<Home />} />
          {/* Используйте index для обозначения начального пути внутри Dashboard */}
          <Route path="editor" element={<Editor />} />
          {/* Можно добавить еще вложенные маршруты здесь, если необходимо */}
        </Route>
        {/* Маршрут для страницы входа */}
        <Route path="/login" element={<Login />} />
        {/* Если у вас есть другие страницы, добавьте их маршруты здесь */}
      </Routes>
    </>
  );
}

export default App;
