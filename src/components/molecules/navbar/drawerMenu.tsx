import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/system";

// Custom components for specific styling
const MenuButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));

const DownloadButton = styled(MenuButton)({
  marginTop: 8,
  marginBottom: 8,
});

const FDICBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  textAlign: "center",
}));

type Props = {
  open: boolean;
  toggleDrawer?: () => void;
};

const DrawerMenu = (props: Props) => {
  const { open, toggleDrawer = () => {} } = props;

  return (
    <Drawer
      sx={{
        ".MuiDrawer-paper": {
          justifyContent: "flex-start",
          top: "64px", // Adjust this value based on the height of your AppBar
          // borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          // boxSizing: "border-box", // To include the border in the height
          backgroundColor:'#fff'
        },
      }}
      hideBackdrop
      anchor={"right"}
      open={open}
      onClose={toggleDrawer}
    >
      <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {[
            "Services",
            "Locations",
            "Property Types",
            "Pricing",
            "About Us",
            "Log in",
          ].map((text, index) => (
            <ListItem key={text}>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <FDICBox>
          <Typography variant="subtitle1">
            FDIC insured up to $250,000
          </Typography>
          <Typography variant="caption">
            Dave accounts are FDIC insured up to $250,000 through our partner
            banks.
          </Typography>
        </FDICBox>
        <DownloadButton
          fullWidth
          //   startIcon={<AppleIcon />}
        >
          Download iOS
        </DownloadButton>
        <DownloadButton
          fullWidth
          //   startIcon={<AndroidIcon />}
        >
          Download Android
        </DownloadButton>
      </div>
    </Drawer>
  );
};

export default DrawerMenu;
