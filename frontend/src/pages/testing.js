//import statements
import InstructorNavbar from "../components/instructorNavbar";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Testing = () => {
  return (
    <div>
      <InstructorNavbar />


<Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
    </div>

  );
};

export default Testing;
