"use_client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./page.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import FeatureCard from "@/components/molecules/cards/featureCard";
import { HOME_PAGE_FEATURES_LIST } from "@/constants/HOME_PAGE_CONSTANTS";
import TextCard from "@/components/molecules/cards/textCard";
import { CheckCircleOutline } from "@mui/icons-material";
import Image from "@/components/atoms/image/image";

export default function Home() {
  return (
    // <Container maxWidth={"xl"}>
    <Box m={{ xs: 3, lg: 5 }} sx={{ flexGrow: 1 }}>
      <Grid2
        container
        alignItems="stretch"
        // rowGap={4}
        // columnGap={4}
        spacing={{ xs: 4, md: 4 }}
      >
        <Grid2 xs={12}>
          <Box
            display={"flex"}
            borderRadius={0.5}
            overflow={"hidden"}
            position={"relative"}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img
                src="./assets/banner.png"
                style={{ flex: 1, width: "100%" }}
              />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <img
                src="./assets/home_banner_mobile.png"
                style={{ flex: 1, width: "100%" }}
              />
            </Box>

            <Box
              position={"absolute"}
              left={0}
              right={0}
              top={0}
              bottom={0}
              alignItems={"center"}
              p={5}
              // justifyContent={"center"}
              // bgcolor={"red"}
              display={"flex"}
            >
              <Box maxWidth={500}>
                <Typography
                  fontWeight={900}
                  fontFamily={"iowan_old"}
                  variant="h2"
                  color={"primary.dark"}
                >
                  Your Home, Made Easy
                </Typography>
                {/* <Typography
                    fontWeight={900}
                    variant="h2"
                    color={"primary.dark"}
                  >
                    
                  </Typography> */}
                <Typography
                  fontFamily={"Lato"}
                  fontWeight={"900"}
                  color={"primary.dark"}
                >
                  Your 24/7 property manager that manages all your home’s
                  repairs, maintenance and renovations.
                </Typography>
                <Grid2
                  mt={2}
                  container
                  bgcolor={"white"}
                  paddingBlock={2}
                  paddingInline={4}
                  borderRadius={0.5}
                >
                  <Grid2 display={"flex"} xs alignItems={"center"}>
                    <InputBase
                      sx={{
                        // borderColor: "white",
                        fontFamily: "Lato",
                      }}
                      placeholder="Your Address"
                    />
                  </Grid2>

                  <Button variant="contained">Get Started</Button>
                </Grid2>
              </Box>
            </Box>
          </Box>
        </Grid2>

        <Grid2
          display={"flex"}
          borderRadius={0.5}
          overflow={"hidden"}
          xs={12}
          lg={6}
          md={6}
        >
          <TextCard
            title="Your best version of your home without the effort"
            subtitle="Stress-free home ownership. Your partner you can trust. Fair
          transparent pricing, always"
          />
        </Grid2>
        <Grid2 position={"relative"} xs={12} md={6} lg={6} xl={6}>
          
          <img
            src="./assets/home_inside_1.png"
            style={{ flex: 1, width: "100%" }}
          />
        </Grid2>
        <Grid2 alignItems={"stretch"} container xs={12}>
          {/* <Grid2 container bgcolor={'blue'}> */}
          {HOME_PAGE_FEATURES_LIST.map(({ title, imageSource, subtitle }) => {
            return (
              <Grid2
                display={"flex"}
                alignItems={"stretch"}
                key={title}
                lg={4}
                xs={12}
              >
                <FeatureCard
                  title={title}
                  imageSource={imageSource}
                  subtitle={subtitle}
                />
              </Grid2>
            );
          })}
        </Grid2>
        <Grid2 display={"flex"} xs={12} lg={6}>
          <TextCard
            subtitle="Your personal, proactive property concierge. Team of experts at your disposal 24/7. Call or text us 24/7 for urgent assistance. We serve all properties - homes, apartments, strata buildings and even your beach house"
            title="We’re your expert team you can rely on, not just an app"
          />
        </Grid2>
        <Grid2 xs={12} lg={6}>
          <img
            src="./assets/home_construction.png"
            style={{ flex: 1, width: "100%" }}
          />
        </Grid2>
        <Grid2 display={"flex"} xs={12} lg={6}>
          <TextCard
            subtitle="View, prioritise and add to your property roadmap. Create new tasks for completion based on their urgency as easily as taking a photo. Arrival times / scheduling"
            title="Everything is at your fingertips via our property portal"
            bgcolor={"black"}
            buttonVariant="contained_light"
          />
        </Grid2>
        <Grid2 display={"flex"} xs={12} lg={6}>
          <Box
            display={"flex"}
            borderRadius={0.5}
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            p={5}
            bgcolor={"primary.main"}
          >
            <img src="./assets/home_app.png" style={{ maxWidth: "100%" }} />
          </Box>
        </Grid2>
        <Grid2 display={"flex"} xs={12}>
          <Box
            bgcolor={"primary.light"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flex={1}
            p={{ md: 10, xs: 5 }}
            minHeight={300}
            borderRadius={0.5}
          >
            <Box maxWidth={1000}>
              <Typography
                textAlign={"center"}
                variant="h4"
                color={"primary.dark"}
                fontWeight={900}
              >
                2K HomeMade members have completed 1.5K projects to save 6K
                hours of their lives
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 display={"flex"} xs={12} lg={6}>
          <Box
            display={"flex"}
            borderRadius={0.5}
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            p={{ xs: 3, md: 8 }}
            bgcolor={"secondary.main"}
          >
            <Grid2 spacing={5} container my={5}>
              <Grid2 xs={12}>
                <Typography
                  fontFamily={"iowan_old"}
                  variant="h3"
                  color={"primary.dark"}
                >
                  Our pricing gives you peace of mind
                </Typography>
              </Grid2>
              <Grid2 xs={6} md={4}>
                <Typography color={"primary"}>Homes</Typography>
                <Typography variant="h4" color={"primary.dark"}>
                  $59/mth
                </Typography>
              </Grid2>
              <Grid2 xs={6} md={4}>
                <Typography color={"primary"}>Units</Typography>
                <Typography variant="h4" color={"primary.dark"}>
                  $39/mth
                </Typography>
              </Grid2>
              <Grid2 xs={6} md={4}>
                <Typography color={"primary"}>Buildings</Typography>
                <Typography variant="h4" color={"primary.dark"}>
                  Ask us
                </Typography>
              </Grid2>
              <Grid2 xs={12}>
                <Grid2 container spacing={2.5}>
                  <Grid2 xs={12} display={"flex"}>
                    <CheckCircleOutline fontSize={"small"} color="primary" />
                    <Typography color={"primary.dark"}>
                      Dedicated concierge providing 24/7 home support
                    </Typography>
                  </Grid2>
                  <Grid2 xs={12} display={"flex"}>
                    <CheckCircleOutline fontSize={"small"} color="primary" />
                    <Typography color={"primary.dark"}>
                      All your works co-ordinated by us with our A-team
                    </Typography>
                  </Grid2>
                  <Grid2 xs={12} display={"flex"}>
                    <CheckCircleOutline fontSize={"small"} color="primary" />
                    <Typography color={"primary.dark"}>
                      Custom plan for your best version of your home ($99
                      one-off)
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
              <Grid2 xs={4}>
                <Typography color={"primary"}>Repairs</Typography>
                <Typography color={"primary.dark"}>$120/hr</Typography>
              </Grid2>
              <Grid2 xs={4}>
                <Typography color={"primary"}>Maintenance</Typography>
                <Typography color={"primary.dark"}>$50-80/hr</Typography>
              </Grid2>
              <Grid2 xs={4}>
                <Typography color={"primary"}>Other</Typography>
                <Typography color={"primary.dark"}>+15%</Typography>
              </Grid2>
              <Grid2>
                <Button variant="contained">View pricing details</Button>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
        <Grid2 display={"flex"} xs={12} lg={6}>
          <Box display={"flex"}>
            <img src="./assets/home_plumber.png" style={{ maxWidth: "100%" }} />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
    // </Container>
  );
}
