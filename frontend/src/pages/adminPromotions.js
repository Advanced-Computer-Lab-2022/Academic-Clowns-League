import AdminNavbar from "../components/adminNavbar";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import CourseDetailsAdmin from "../components/courseDetailsAdmin";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { CgTrashEmpty } from "react-icons/cg";
import Moment from "react-moment";

const AdminPromotions = () => {
  const [courses, setCourses] = useState([]); //null
  const [selectAll, setSelectAll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [discount, setDiscount] = useState("");
  const [discountValidUntil, setDiscountValidUntil] = useState("");

  const [open, setOpen] = useState([]);
  const [error, setError] = useState(null);
  //const [temp, setTemp] = useState([]);
  const [states, setStates] = useState([]);
  const [discountmessage, setDiscountMessage] = useState(false);
  const [datemessage, setDateMessage] = useState(false);
  const [selectmessage, setSelectMessage] = useState(false);
  //var date = moment(discountValidUntil, "DD-MM-YYYY", true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);

  const handleCheck = async () => {
    if (selectAll == false) {
      //courses.map((course, index) => states);

      const response = await fetch("/api/courses");
      const temp = await response.json();

      for (let i = 0; i < temp.length; i++) {
        states[i] = temp[i]._id;
      }

      console.log(temp);
      console.log(states);
      setSelectAll(true);
      //setOpen(true);
    } else if (selectAll == true) {
      //this.setState({ temp: [] }); // class component

      // setTemp([]);
      for (let j = 0; j < states.length; j++) {
        states[j] = null;
      }
      // console.log(temp);
      console.log(states);

      setSelectAll(false);
      //setIsChecked(false);
    }
  };

  const handleClick = (event) => {
    if (states[event.target.name] == event.target.value) {
      states[event.target.name] = null;
    } else {
      states[event.target.name] = event.target.value;
      console.log(states);
    }
  };

  const handlePromotion = async (e) => {
    e.preventDefault();
    console.log(states.length);
    console.log(states);
    for (let i = 0; i < states.length; i++) {
      console.log("hi");

      const response = await fetch("/api/courses/adminAddDiscount", {
        method: "PATCH",
        body: JSON.stringify({
          id: states[i],
          courseDiscount: discount,
          courseDiscountValidUntil: discountValidUntil,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setDiscount("");
        setDiscountValidUntil("");
        setSelectAll(false);
        setError(null);

        console.log("Discount is Added", json);
      }
    }

    if (discount > 100 || discount <= 0) {
      setDiscountMessage("Please enter a discount between 1-100");
    }

    if (states.length <= 0) {
      setSelectMessage("please select courses");
    }

    /*if (!date) {
      var date = Moment(discountValidUntil, "DD-MM-YYYY", true);
      setDateMessage("Please enter a valid date format");
    }*/
  };

  return (
    <form>
      <AdminNavbar />

      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle
            style={{
              fontSize: "20px",
              fontStyle: "-moz-initial",
              color: "#B71C1C",
            }}
          >
            Select courses to add discount
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      <div className="courses" style={{ transform: "translate(2%, 0%)" }}>
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Select All"
          //style={{ transform: "translate(200%, 300%)" }}
          checked={selectAll}
          onChange={handleCheck}
        />
        {courses &&
          courses.map(
            (
              course,
              index //course, index
            ) => (
              <>
                <CourseDetailsAdmin course={course} key={course._id} />
                <MDBCheckbox
                  name={index}
                  value={course._id}
                  checked={selectAll}
                  onChange={handleClick}
                  style={{ transform: "translate(-20%,-580%)" }}
                />{" "}
              </>
            )
          )}
      </div>

      <MDBCard
        alignment="center"
        style={{
          align: "center",
          width: "300px",
          height: "400px",
          transform: "translate(285%, 19%)",
        }}
      >
        <MDBCardBody style={{ transform: "translate(0%,10%)" }}>
          <MDBCardTitle>Discount</MDBCardTitle>
          <MDBInput
            label="Discount"
            id="form1"
            type="text"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            style={{
              align: "center",
              width: "130px",
            }}
          ></MDBInput>

          <br></br>
          <MDBCardTitle>Discount Valid Until</MDBCardTitle>
          <br></br>
          <MDBInput
            label="Discount Valid Until"
            id="form1"
            type="date"
            onChange={(e) => setDiscountValidUntil(e.target.value)}
            value={discountValidUntil}
            style={{
              align: "center",
              width: "260px",
            }}
          />
          <MDBBtn
            href="#"
            type="button"
            color="danger"
            style={{ transform: "translate(0%, 140%)" }}
            onClick={(e) => handlePromotion(e)}
          >
            Add Discount
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <p style={{ color: "red", transform: "translate(61.5%, 1300%)" }}>
        {" "}
        {discountmessage}
      </p>
      <p style={{ color: "red", transform: "translate(61.5%, 1300%)" }}>
        {" "}
        {datemessage}
      </p>
      <p style={{ color: "red", transform: "translate(66%, 1300%)" }}>
        {" "}
        {selectmessage}
      </p>
    </form>
  );
};

export default AdminPromotions;
