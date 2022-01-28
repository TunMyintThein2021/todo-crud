import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUserForm from "./components/forms/AddUserForm";
import Header from "./components/layout/Header";
import UserTable from "./components/UserTable";


function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/usertable" element={<UserTable />} />
          <Route path="/adduserform" element={<AddUserForm />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};


export default App;
