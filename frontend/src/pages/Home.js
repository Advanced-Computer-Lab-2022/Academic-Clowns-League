import { useEffect, useState } from "react";

//components

import AdminForm from "../components/AdminForm";
import InstructorForm from "../components/InstructorForm";
const Home = () => {
  return (
    <div className="home">
      <AdminForm />
      <InstructorForm />
    </div>
  );
};

export default Home;
