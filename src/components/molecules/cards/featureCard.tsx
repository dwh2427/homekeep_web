import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  title: string;
  imageSource: string;
  subtitle: string;
};

const FeatureCard = ({ title, imageSource, subtitle }: Props) => {
  return (
    <Card
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        borderRadius: "30px",
      }}
    >
      <CardMedia
        component='img'
        sx={{
          width: { sm: "auto", xl: "464px" },
          height: { sm: "auto", xl: "311px" },
        }}
        image={imageSource}
        alt={title}
      />

      <CardContent
        sx={{
          paddingTop: { xs: "1rem", xl: "60px" },
          paddingX: { xs: "0", xl: "40px" },
          marginX: { xs: "auto", xl: "0" },
          paddingBottom: "41.63px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: { xs: "auto", xl: "464px" },
        }}
      >
        <Typography
          color={"#004318"}
          fontWeight={"900"}
          variant='h4'
          component='div'
          fontFamily={"Lato"}
          height={"60px"}
          width={{ xs: "full", xl: "385.03px" }}
          fontSize={{ xs: "40px", sm: "35px", md: "30px", lg: "40px" }}
          lineHeight={"60px"}
          textAlign={{ xs: "center", xl: "initial" }}
        >
          {title}
        </Typography>
        <Typography
          fontFamily={"Lato"}
          color='#004318'
          marginTop={{ xs: "5px", xl: "20px" }}
          textAlign={{ xs: "center", xl: "initial" }}
          width={{ xs: "75%", xl: "338.2px" }}
          marginX={{ xs: "auto", xl: "initial" }}
          fontSize={{ xs: "18px", md: "15px", lg: "18px" }}
          lineHeight={"25px"}
          fontWeight={400}
          letterSpacing={0}
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
