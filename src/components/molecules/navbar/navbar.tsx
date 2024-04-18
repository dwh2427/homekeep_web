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
  const toggleMenuClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(focusedId);
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
      <AppBar
        elevation={trigger || open ? 4 : 0}
        sx={{
          background: "#fff",
          boxShadow: "0px 13.01px 32.52px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1665px",
            maxHeight: "111px",
            paddingY: { xs: "10px", sm: "20px", lg: "26.02px" },
            paddingX: { xs: "20px", sm: "40px", lg: "85px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Toolbar
            sx={(theme) => {
              return {
                [theme.breakpoints.down("lg")]: {
                  paddingLeft: 0,
                  paddingRight: 0,
                },
                [theme.breakpoints.up("lg")]: {
                  justifyContent: "space-between",
                  alignItems: "center",
                },
              };
            }}
          > */}
          <Image
            sx={{
              width: { xs: "175px", sm: "200px", md: "230px", xl: "276.73px" },
              height: { xs: "0", xl: "59px" },
            }}
            src='/assets/Logo2.svg'
            alt='Next.js Logo'
          />

          <Grid2 container alignItems={"center"}>
            <Grid2>
              <Button
                variant='contained'
                sx={{
                  display: { xs: "none", md: "flex" },
                  paddingY: "20px",
                  paddingX: "40px",
                  fontWeight: "900",
                  width: "191px",
                  height: "62px",
                  whiteSpace: "nowrap",
                  scale: { xs: "0.9", lg: "initial" },
                }}
                style={{ fontSize: "18px" }}
              >
                Free Estimate
              </Button>
            </Grid2>
            <Grid2 sx={{ display: { md: "none", xs: "flex" } }}>
              <IconButton onClick={toggleDrawer}>
                <Menu sx={{ color: "primary.dark", scale: { sm: "1.5" } }} />
              </IconButton>
            </Grid2>
          </Grid2>
          {/* </Toolbar> */}
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
