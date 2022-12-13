import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddTaskPage from "./pages/AddTaskPage/AddTaskPage";
import HomePage from "./pages/Home/HomePage";
import TaskPage from "./pages/TaskPage/TaskPage";
import TasksPage from "./pages/Tasks/TasksPage";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="tasks/:taskId" element={<TaskPage />} />
            <Route path="tasks/add" element={<AddTaskPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
