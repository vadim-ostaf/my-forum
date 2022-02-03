import './HeaderBar.css';
import {Button, ButtonGroup} from "@mui/material";

function HeaderBar() {
  return (
    <div className="header-bar">
      <div className={"container"}>
        <div className={"header-bar-buttons"}>
          <ButtonGroup size="small">
            <Button color={"primary"}>Login</Button>
            <Button color={"secondary"}>Register</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;