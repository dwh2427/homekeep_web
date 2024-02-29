import React, { useMemo } from "react";
import { Button, Popper, Paper, Typography, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Circle } from "@mui/icons-material";
import { NAVBAR_HEADERS } from "@/constants/NAVBAR_CONSTANTS";

const servicesMenu = [
  { title: "Repairs", items: ["Cleaning", "Gardening", "Painting"] },
  { title: "Maintenance", items: ["Cleaning", "Gardening", "Painting"] },
  { title: "Prevention", items: ["Gutter cleaning", "Gardening", "Painting"] },
  {
    title: "Renovations",
    items: ["Wall removal", "Kitchens", "Bathrooms", "Decks"],
  },
  {
    title: "Consulting",
    items: [
      "Roadmap",
      "Architectural Design",
      "Interior Design",
      "Engineering",
    ],
  },
];

type Props = {
  open: boolean;
  anchorEl: any;
  handleClick: any;
  type: string;
};

const MENU_LIST = {
  services: servicesMenu,
};

function ServiceMenu(props: Props) {
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleClick = (event) => {
  //     setAnchorEl(anchorEl ? null : event.currentTarget);
  //   };

  //   const open = Boolean(anchorEl);
  const { open, anchorEl, handleClick, type } = props;
  const id = open ? "service-popper" : undefined;

  const menuList = useMemo(() => {
    return NAVBAR_HEADERS.filter((item) => {
      return item.title === type;
    })[0];
  }, [type]);

  return (
    <div>
      {/* <Button aria-describedby={id} type="button" onClick={handleClick}>
        Services
      </Button> */}
      <Popper
        onClickCapture={handleClick}
        sx={{ width: "100%" }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <Paper
          sx={{
            p: 10,
            bgcolor: "background.paper",
            width: "100%",
            borderRadius: 0,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Grid2 spacing={4} container>
            {menuList?.items?.map((item) => {
              return (
                <Grid2 key={item.title}>
                  <Box
                    borderRadius={0.5}
                    padding={3}
                    bgcolor={"secondary.main"}
                  >
                    <Typography color={"primary.dark"} fontWeight={700}>
                      {item.title}
                    </Typography>

                    {item?.items?.map((item) => {
                      return (
                        <div key={item.title} style={{ marginTop: 10 }}>
                          <Typography color={"primary.dark"}>
                            {item.title}
                          </Typography>
                        </div>
                      );
                    })}
                  </Box>
                </Grid2>
              );
            })}
          </Grid2>
        </Paper>
      </Popper>
    </div>
  );
}

export default ServiceMenu;
