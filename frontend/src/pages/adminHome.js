import AdminForm from "../components/adminForm";
import InstructorForm from "../components/instructorForm";
import CTraineeForm from "../components/cTraineeForm";

const AdminHome = () => {
  return (
    <div>
      <AdminForm />
      <InstructorForm />
      <CTraineeForm />
    </div>
  );
};

export default AdminHome;
