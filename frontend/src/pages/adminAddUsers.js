import AdminForm from "../components/adminForm";
import InstructorForm from "../components/instructorForm";
import CTraineeForm from "../components/cTraineeForm";

import AdminNavbar from "../components/adminNavbar";



const AdminAddUsers = () => {
  return (
    <div>
      <AdminNavbar/>
      <div>
      <AdminForm />
      <InstructorForm />
      <CTraineeForm />
      </div>
    </div>
  );
};

export default AdminAddUsers;
