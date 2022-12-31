import AdminForm from "../components/adminForm";
import InstructorForm from "../components/instructorForm";
import CTraineeForm from "../components/cTraineeForm";
import { useState } from "react";

import AdminNavbar from "../components/adminNavbar";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

/*const AdminAddUsers = () => {
  return (
    <div>
      <AdminNavbar />
      <p>
        <CTraineeForm />
      </p>
    </div>
  );
};*/

/*<p>
        <InstructorForm />
      </p>

      <p>
        <CTraineeForm />
      </p>*/

/*import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

const AdminAddUsers = () => {
  const { admin, setAdmin } = useState(false);
  const { instructor, setInstructor } = useState(false);
  const { ctrainee, setCTrainee } = useState(false);

  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Insructor</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled">corporate Trainee</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
};*/

const AdminAddUsers = () => {
  const [basicActive, setBasicActive] = useState("admin");
  const value = "";
  const handleBasicClick = (value) => {
    //value: string
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div>
      <AdminNavbar />
      <form>
        <MDBTabs pills className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("admin")}
              active={basicActive === "admin"}
            >
              Admin
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("instructor")}
              active={basicActive === "instructor"}
            >
              Instructor
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("ctrainee")}
              active={basicActive === "ctrainee"}
            >
              Corporate Trainee
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={basicActive === "admin"}>
            {" "}
            <AdminForm />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "instructor"}>
            <InstructorForm />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "ctrainee"}>
            {" "}
            <CTraineeForm />
          </MDBTabsPane>
        </MDBTabsContent>
      </form>
    </div>
  );
};

export default AdminAddUsers;
