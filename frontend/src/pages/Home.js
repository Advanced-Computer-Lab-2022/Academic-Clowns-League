import { useEffect, useState } from "react";

//components

import AdminForm from "../components/AdminForm";
import InstructorForm from "../components/InstructorForm";
import CTraineeForm from "../components/CTraineeForm";

const Home = () => {
  return (
    <div className="home">
      <AdminForm />
      <InstructorForm />
      <CTraineeForm />
    </div>
  );
};

export default Home;
