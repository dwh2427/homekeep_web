"use client";
import Image from "@/components/atoms/image/image";
import { KeyboardArrowDown, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";
import { cloneElement, useCallback, useState } from "react";
import DrawerMenu from "./drawerMenu";
import MenuExpanded from "./menuExpanded";
import ServiceMenu from "./serviceMenu";
import { NAVBAR_HEADERS } from "@/constants/NAVBAR_CONSTANTS";
// import Image from "next/image";
// import { ReactComponent as Logo } from "/assets/Logo.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [focusedId, setFocusedId] = useState("");
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((val) => !val);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const toogleMenuClick = useCallback(
     (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(focusedId)
      if (event.currentTarget.id === focusedId) {
        setFocusedId("");
        setAnchorEl(null);
      } else {
        setFocusedId(event.currentTarget.id);
        setAnchorEl(event.currentTarget);
      }
    },
    [focusedId]
  );
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar elevation={trigger || open ? 4 : 0} sx={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar
            sx={(theme) => {
              return {
                [theme.breakpoints.down("lg")]: {
                  paddingLeft: 0,
                  paddingRight: 0,
                },
                [theme.breakpoints.up("lg")]: {
                  paddingLeft: 4,
                  paddingRight: 4,
                },
                justifyContent: "space-between",
                padding: 1,
              };
            }}
          >
            <Image
              sx={{}}
              src="/assets/LogoDual.svg"
              alt="Next.js Logo"
              width={"20%"}
              style={{ minWidth: 120 }}
            />
            {/* <img /> */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {NAVBAR_HEADERS.map((item) => (
                <Button
                  endIcon={item?.items && <KeyboardArrowDown />}
                  key={item.title}
                  onClick={item?.items && toogleMenuClick}
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "primary.dark",
                  }}
                  variant="text"
                  id={item.title}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <Grid2 container spacing={{ lg: 2, xl: 3 }} alignItems={"center"}>
              <Grid2>
                <Button
                  sx={{
                    display: { xs: "none", md: "flex" },
                    color: "primary.dark",
                  }}
                  variant="text"
                >
                  Log in
                </Button>
              </Grid2>
              <Grid2>
                <Button variant="contained">Get Started</Button>
              </Grid2>
              <Grid2 sx={{ display: { md: "none", xs: "flex" } }}>
                <IconButton onClick={toggleDrawer}>
                  <Menu sx={{ color: "primary.dark" }} />
                </IconButton>
              </Grid2>
            </Grid2>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerMenu open={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {/* <MenuExpanded anchorEl={anchorEl} open={open}/> */}
      <ServiceMenu
        type={focusedId}
        open={open}
        anchorEl={anchorEl}
        handleClick={handleClose}
      />
    </>
  );
};

export default Navbar;
