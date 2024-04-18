import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./page.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Container,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import FeatureCard from "@/components/molecules/cards/featureCard";
import { HOME_PAGE_FEATURES_LIST } from "@/constants/HOME_PAGE_CONSTANTS";
import TextCard from "@/components/molecules/cards/textCard";
import TextCard2 from "@/components/molecules/cards/textCard2";
import { CheckCircleOutline } from "@mui/icons-material";
import Image from "@/components/atoms/image/image";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container>
        <Grid2
          xs={12}
          maxWidth={"1495.9px"}
          paddingX={{ xs: "20px", xl: "0" }}
          maxHeight={"650.39px"}
          marginX={"auto"}
          marginTop={{ xs: "60px", sm: "83px", md: "102px", xl: "111px" }}
        >
          <Box
            display={"flex"}
            borderRadius={"30px"}
            overflow={"hidden"}
            position={"relative"}
            mt={{ xs: "25px", sm: "50px" }}
            maxHeight={"600px"}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Image
                src='./assets/new_banner.png'
                style={{
                  flex: 1,
                  width: "100%",
                }}
                alt=''
              />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Image
                src='./assets/home_banner_mobile.png'
                style={{
                  flex: 1,
                  maxWidth: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                alt=''
              />
            </Box>

            <Box
              position={"absolute"}
              left={0}
              right={0}
              top={0}
              bottom={0}
              paddingTop={{ xs: "125px", md: "70px", lg: "135px", xl: "150px" }}
              paddingLeft={{ xs: "75px", xl: "80px" }}
              display={"flex"}
            >
              <Box
                gap={"20.81px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
              >
                <Typography
                  fontWeight={900}
                  fontFamily={"iowan_old"}
                  variant='h2'
                  color={"primary.dark"}
                  lineHeight={{ xs: "initial", xl: "90px" }}
                  maxWidth={{ xs: 500, lg: 600, xl: 708 }}
                  sx={{ fontSize: { xs: "3rem", sm: "3.5rem", xl: "80px" } }}
                >
                  Paint your home the easy way
                </Typography>
                <Typography
                  maxWidth={{ xs: 400, sm: 425, xl: 639 }}
                  fontFamily={"Lato"}
                  fontWeight={"600"}
                  color={"#004318"}
                  sx={{ fontSize: "18px", lineHeight: "22px" }}
                >
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "25px",
                    }}
                  >
                    HomeSet
                  </span>{" "}
                  is a professional home painting company that offers quick
                  estimates and transparent pricing
                </Typography>
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: "#038732",
                    paddingY: "20px",
                    paddingX: "40px",
                    width: "224px",
                    height: "62px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                    fontWeight: "900",
                    fontSize: "18px",
                    lineHeight: "22px",
                    marginTop: { xs: "0.5rem", sm: "1rem", xl: 0 },
                  }}
                >
                  Get Free Estimate
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid2>

        <Grid2
          alignItems={"stretch"}
          container
          xs={12}
          maxWidth={"1495.9px"}
          paddingX={{ xs: "20px", xl: "0" }}
          height={{ xs: "initial", xl: "681px" }}
          marginX={"auto"}
          marginTop={"50px"}
          display={"flex"}
          gap={{ xs: "50px", sm: "25px", xl: "50px" }}
        >
          {/* <Grid2 container bgcolor={'blue'}> */}
          {HOME_PAGE_FEATURES_LIST.map(({ title, imageSource, subtitle }) => {
            return (
              <Grid2
                display={"flex"}
                alignItems={"stretch"}
                key={title}
                // lg={{ xs: 4, lg: 0 }}
                xs={12}
                maxWidth={{
                  xs: "100%",
                  sm: "48.28%",
                  md: "31.63%",
                  xl: "465px",
                }}
                // marginX={"auto"}
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
        <Grid2
          container
          maxWidth={"1495.89px"}
          marginX={"auto"}
          height={{ xs: "auto", xl: "800px" }}
          display={"flex"}
          gap={"52.03px"}
          paddingX={{ xs: "20px", xl: "initial" }}
          flexWrap={"nowrap"}
          marginTop={"50px"}
          flexDirection={{ xs: "column", md: "row", xl: "initial" }}
        >
          <Grid2
            borderRadius={"30px"}
            overflow={{ xs: "initial", xl: "hidden" }}
            width={{ xs: "100%", md: "50%" }}
            height={"100%"}
            display='flex'
            flexDirection='column'
          >
            <TextCard
              title='We make it easy to complete your painting project'
              subtitle='1. Estimate: Answer a few questions about your project and get an estimate for the cost and timeline in as little as 30 seconds.'
              subtitle2='2. Plan: Finalize your project by uploading a few pictures with more detail, and then schedule with our crew in minutes.'
              subtitle3='3. Execute: Relax while our skilled team delivers the highest quality paint job in your home, giving you complete peace of mind'
            />
          </Grid2>
          <Grid2
            position={"relative"}
            width={{ xs: "100%", md: "50%" }}
            height={"100%"}
            display='flex'
            alignItems='stretch'
          >
            <Image
              src='./assets/home_construction.png'
              style={{ flex: 1, width: "100%", height: "100%" }}
              alt=''
            />
          </Grid2>
        </Grid2>
        <Grid2
          display={"flex"}
          xs={12}
          maxWidth={"1495.66px"}
          height={{ xs: "initial", xl: "427.96px" }}
          marginX={"auto"}
          container
          marginTop={"50px"}
          alignItems={"stretch"}
          paddingX={{ xs: "20px", xl: "0" }}
        >
          <Box
            width={{ xs: "auto", sm: "500px", xl: 1000 }}
            gap={{ xs: "0", xl: "32px" }}
            flexDirection='column'
            bgcolor={"primary.light"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flex={1}
            minHeight={300}
            borderRadius={"30px"}
            padding={{ md: 10, xs: 5 }}
          >
            <Typography
              textAlign={"center"}
              color={"primary.dark"}
              fontWeight={900}
              lineHeight={{ xs: "initial", xl: "60px" }}
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem", lg: "40px" },
                width: { xs: "500px", sm: "650px", md: "800px", xl: "1079px" },
                height: { xs: "auto", xl: "120px" },
              }}
              fontFamily={"lato_black"}
            >
              Proudly serving the{" "}
              <span
                style={{
                  lineHeight: "inherit",
                  borderBottom: "5px solid #004318",
                  display: "inline-block",
                }}
              >
                Inner Sydney
              </span>{" "}
              area where we have been busy painting over 1,474 homes
            </Typography>
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#038732",
                paddingY: "20px",
                paddingX: "40px",
                width: "224px",
                height: "62px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                fontWeight: "900",
                fontSize: "18px",
                lineHeight: "22px",
                margin: "0 auto",
                marginTop: { xs: "1rem", xl: 0 },
                scale: { xs: "0.85", lg: "initial" },
              }}
            >
              Get Free Estimate
            </Button>
          </Box>
        </Grid2>
        <Grid2
          container
          maxWidth={"1493.87px"}
          marginX={"auto"}
          display={"flex"}
          gap={"50px"}
          flexWrap={"nowrap"}
          marginTop={"50px"}
          height={{ xs: "auto", xl: "800px" }}
          paddingX={{ xs: "20px", xl: "initial" }}
          flexDirection={{ xs: "column", md: "row", xl: "initial" }}
        >
          <Grid2
            position={"relative"}
            height={"100%"}
            display='flex'
            alignItems='stretch'
            borderRadius={"30px"}
            width={{ xs: "100%", md: "50%" }}
          >
            <Image
              src='./assets/no_hidden_fees.png'
              style={{ flex: 1, width: "100%", height: "100%" }}
              alt=''
            />
          </Grid2>
          <Grid2
            borderRadius={"30px"}
            overflow={{ xs: "initial", xl: "hidden" }}
            width={{ xs: "100%", md: "50%" }}
            height={"100%"}
            display='flex'
            flexDirection='column'
          >
            <TextCard2
              title='No hidden fees No surprises'
              subtitle='We believe that all homeowners deserve access to high quality craftsmanship, regardless of who they are or where they live.'
              subtitle2="With HomeSet, there's no more guessing about how much your next paint project will cost - our online estimate tool and flat-rate pricing ensures you'll always know exactly what to expect."
            />
          </Grid2>
        </Grid2>
        <Grid2
          display={"flex"}
          xs={12}
          maxWidth={"1495.9px"}
          height={"892.97px"}
          marginX={{ xs: "20px", xl: "auto" }}
          container
          marginTop={"50px"}
          borderRadius={"30px"}
          sx={{ background: "black" }}
          justifyContent={"center"}
          paddingY={"120px"}
          paddingX={"80px"}
        >
          <Typography
            textAlign={"center"}
            variant='h2'
            color={"white"}
            fontWeight={900}
            sx={{ fontSize: { xs: "2.25rem", md: "60px" } }}
            fontFamily={"iowan_old"}
          >
            Don&apos;t just take our word for it
          </Typography>
          <Box
            marginTop={"64px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              minWidth: { xs: "100%", lg: "1495.9px" },
              maxHeight: "523.97px",
              alignItems: "center",
              gap: { xs: "2rem", xl: "120px" },
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "0px",
                width: "500px",
                height: "523.88px",
                background: "black",
              }}
            >
              <CardMedia
                component='img'
                height='334.88px'
                width='100%'
                image='./assets/interior_painting.png'
                alt=''
              />
              <Typography sx={{ height: "22px", marginTop: "16px" }}>
                ⭐⭐⭐⭐⭐️
              </Typography>
              <Typography
                color='white'
                fontWeight='400'
                component='div'
                fontFamily='Lato'
                fontSize='18px'
                lineHeight={"25px"}
                marginTop={"16px"}
              >
                We used Craftwork to repair and paint the accent wall in our
                kitchen, and we&apos;re very happy with it.
              </Typography>
              <Typography
                color='white'
                fontWeight='400'
                component='div'
                fontFamily='Lato'
                fontSize='18px'
                lineHeight={"25px"}
                marginTop={"16px"}
              >
                The wall had damage from the previous owner, and the Craftwork
                team did an incredible job fixing it and apply a fresh coat of
                paint on top!
              </Typography>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "0px",
                width: "500px",
                height: "523.88px",
                background: "black",
              }}
            >
              <CardMedia
                component='img'
                height='350'
                image='./assets/exterior_painting.png'
                alt=''
              />
              <Typography sx={{ height: "22px", marginTop: "16px" }}>
                ⭐⭐⭐⭐⭐️
              </Typography>
              <Typography
                color='white'
                fontWeight='400'
                component='div'
                fontFamily='Lato'
                fontSize='18px'
                lineHeight={"25px"}
                marginTop={"16px"}
              >
                We used Craftwork to repair and paint the accent wall in our
                kitchen, and we&apos;re very happy with it.
              </Typography>
              <Typography
                color='white'
                fontWeight='400'
                component='div'
                fontFamily='Lato'
                fontSize='18px'
                lineHeight={"25px"}
                marginTop={"16px"}
              >
                The wall had damage from the previous owner, and the Craftwork
                team did an incredible job fixing it and apply a fresh coat of
                paint on top!
              </Typography>
            </Card>
          </Box>
        </Grid2>
        <Grid2
          container
          maxWidth={"1493.87px"}
          marginX={"auto"}
          display={"flex"}
          columnGap={"52.03px"}
          flexWrap={"nowrap"}
          marginTop={"50px"}
          height={{ xs: "auto", xl: "800px" }}
          paddingX={{ xs: "20px", xl: "initial" }}
          flexDirection={{ xs: "column", md: "row", xl: "initial" }}
        >
          <Grid2
            borderRadius={"30px"}
            overflow={{ xs: "initial", xl: "hidden" }}
            width={{ xs: "100%", md: "50%" }}
            height={"100%"}
            display='flex'
            flexDirection='column'
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              paddingLeft={{ xl: "80px" }}
              borderRadius={"30px"}
              bgcolor={"#F2F8E2"}
              flex={1}
            >
              <Grid2 container>
                <Grid2 width={"100%"}>
                  <Typography
                    fontFamily={"iowan_old"}
                    fontWeight={900}
                    variant='h2'
                    color={"#004318"}
                    width={{ xs: "70%", xl: "610.07px" }}
                    marginX={{ xs: "auto", xl: "initial" }}
                    textAlign={{ xs: "center", xl: "initial" }}
                    sx={{
                      fontSize: {
                        xs: "2.25rem",
                        sm: "2rem",
                        lg: "2.75rem",
                        xl: "55px",
                      },
                      marginTop: { xs: "1rem", xl: "initial" },
                      lineHeight: { xs: "initial", xl: "65px" },
                    }}
                  >
                    Meet our talented Inner Sydney team
                  </Typography>
                </Grid2>
                <Box
                  width={{ xs: "auto", xl: "544px" }}
                  marginTop='40px'
                  paddingX={{
                    xs: "5rem",
                    sm: "2rem",
                    md: "3rem",
                    xl: "initial",
                  }}
                >
                  <Grid2 paddingY={0}>
                    <Typography
                      fontFamily={"Lato"}
                      color={"black"}
                      fontWeight={400}
                      sx={{ fontSize: { lg: "25px" }, lineHeight: "30px" }}
                    >
                      It can be uncomfortable inviting strangers into your home,
                      so let&apos;s get acquainted - here a few examples of the
                      talented people we have on our team!
                    </Typography>
                    <Typography
                      fontFamily={"Lato"}
                      color={"black"}
                      fontWeight={400}
                      marginTop={"15px"}
                      sx={{ fontSize: { lg: "25px" }, lineHeight: "30px" }}
                    >
                      We train our painters from apprentice to seasoned veteran,
                      to ensure that we always deliver the highest quality paint
                      work in your home.
                    </Typography>
                  </Grid2>
                  <Grid2
                    marginTop={"40px"}
                    display={{ xs: "flex", lg: "block" }}
                    justifyContent={{ xs: "center", xl: "initial" }}
                    paddingBottom={{ xs: "1rem", lg: "initial" }}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        backgroundColor: "#038732",
                        paddingY: "20px",
                        paddingX: "40px",
                        width: "224px",
                        height: "62px",
                        borderRadius: "100px",
                        whiteSpace: "nowrap",
                        fontWeight: "900",
                        fontSize: "18px",
                        lineHeight: "22px",
                      }}
                    >
                      Get Free Estimate
                    </Button>
                  </Grid2>
                </Box>
              </Grid2>
            </Box>
          </Grid2>
          <Grid2
            position={"relative"}
            height={"100%"}
            display='flex'
            alignItems='stretch'
            borderRadius={"30px"}
            width={{ xs: "100%", md: "50%" }}
          >
            <Image
              src='./assets/image 43.png'
              style={{ flex: 1, width: "100%", height: "100%" }}
              alt=''
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
