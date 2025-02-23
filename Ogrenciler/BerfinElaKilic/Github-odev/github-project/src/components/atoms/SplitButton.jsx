import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function SplitButton() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="secondary">Star</Button>

      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitButton;
