import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { SystemMenu } from "../../constants/SideBar";

import "./SideMenu.scss";
import { useHistory } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

interface MenuIcon {
  menuIcon: boolean;
}

const SideMenu: React.FC<MenuIcon> = ({ menuIcon }) => {
  const history = useHistory();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home"].map((text, index) => (
          <ListItem
            key={text}
            onClick={() => history.push(`/${text}`.toLocaleLowerCase())}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={menuIcon ? text : null} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography className="sideMenu-title">System</Typography>
      <List>
        {SystemMenu.map((item, index) => (
          <ListItem
            key={item.text}
            onClick={() => history.push(`/${item.text}`.toLocaleLowerCase())}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <item.labelICon />
              </ListItemIcon>
              <ListItemText primary={menuIcon ? item.text : null} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div key="left" className="sideMenu">
      <Drawer
        anchor={"left"}
        open={menuIcon}
        variant="permanent"
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default SideMenu;
