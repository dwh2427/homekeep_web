import { ArrowCircleRight, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const NAVIGATIONS = [
  {
    title: "Services",
    children: [{ title: "Products" }],
  },
  {
    title: "Products",
    children: [{ title: "Products" }],
  },
  {
    title: "Resources",
    children: [{ title: "Pricing" }, { title: "FAQs" }, { title: "Support" }],
  },
  {
    title: "Locations",
    children: [{ title: "Sydney" }],
  },
  {
    title: "Downloads",
    children: [
      { title: "iOS app" },
      { title: "Desktop app" },
      { title: "Android app" },
    ],
  },
];

const BottomBar = () => {
  return (
    <Box p={{ xs: 2, md: 8 }} bgcolor={"secondary.main"}>
      <Container maxWidth={"md"}>
        <Typography
          textAlign={"center"}
          fontWeight={900}
          fontFamily={"iowan_old"}
          variant="h2"
          color={"primary.dark"}
        >
          Save the pain... Your home made easy is just a step away
        </Typography>
      </Container>
      <Box
        borderRadius={0.5}
        my={5}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"primary.main"}
        p={{ xs: 3, md: 10 }}
        flexWrap={"wrap"}
        display={"flex"}
      >
        <Typography
          textAlign={"center"}
          fontWeight={900}
          color={"white"}
          variant="h5"
        >
          Join our newsletter
        </Typography>
        <Box
          sx={{
            px: 4,
            backgroundColor: "white",
            borderRadius: 0.5,
            alignItems: "center",
            display: "flex",
            minWidth: "35%",
          }}
        >
          <InputBase sx={{ py: 2.5, flex: 1 }} placeholder="Enter Email" />
          <IconButton sx={{ backgroundColor: "primary.main", color: "white" }}>
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
      <Grid2 mb={5} container alignItems={'flex-start'}>
        <Grid2 xs={2}>
          <Box>
            <Typography fontWeight={900} color={"primary.dark"}>
              Contact
            </Typography>
          </Box>
          <Box mt={2.5} mb={1}>
            <Button variant="contained">Call us</Button>
          </Box>
          <Box>
            <Button variant="contained">Email us</Button>
          </Box>
        </Grid2>
        {NAVIGATIONS.map(({ title, children }) => {
          return (
            <Grid2 key={title} container xs={2} alignItems={'flex-start'}>
              {/* <Grid2 container> */}
              <Grid2 mb={1.5} xs={12}>
                <Typography color={'primary.dark'} fontWeight={700}>{title}</Typography>
              </Grid2>
              {children.map(({ title }) => {
                return (
                  <Grid2 key={title} xs={12}>
                    <Typography color={'primary.dark'} fontWeight={300}>{title}</Typography>
                  </Grid2>
                );
              })}
              {/* </Grid2> */}
            </Grid2>
          );
        })}
      </Grid2>
      <Divider/>
    </Box>
  );
};

export default BottomBar;
