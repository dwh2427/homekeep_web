import Image from "@/components/atoms/image/image";
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
import { start } from "repl";

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
    <Box padding={"50px 32.52px"} bgcolor={"secondary.main"} marginTop={"50px"}>
      <Box
        maxWidth={"1265.66px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginX: "auto",
        }}
      >
        <Typography
          textAlign={"center"}
          fontWeight={900}
          fontFamily={"iowan_old"}
          variant='h2'
          fontSize={{xs:'4rem',lg:80}}
          color={"primary.dark"}
          lineHeight={'90px'}
        >
          Book your painting project today →
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: "#038732",
            paddingY: "20px",
            paddingX: "40px",
            width: "221px",
            height: "62px",
            borderRadius: "100px",
            color:'#FEFFF8',
            whiteSpace: "nowrap",
            fontWeight: "900",
            fontSize: "18px",
            lineHeight: "22px",
            margin: "0 auto",
            marginTop: "41.63px",
          }}
        >
          Get Free Estimate
        </Button>
      </Box>
      <Divider
        sx={{ marginY: "2rem", marginX: "auto", maxWidth: "1495.9px" }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          marginX: "auto",
          maxWidth: "1444px",
          border: "5px",
          // paddingLeft: "30px",
        }}
      >
        <Image
          sx={{ width: "276.73px", height: "59px" }}
          src='/assets/Logo2.svg'
          alt='Next.js Logo'
        />
        <Typography
          fontWeight={700}
          fontFamily={"lato"}
          color={"primary.dark"}
          mt={"41.63px"}
          fontSize={'20.81px'}
          lineHeight={"74.28px"}
        >
          © 2024 HomeSet Pty Ltd
        </Typography>
      </Box>
    </Box>
  );
};

export default BottomBar;
