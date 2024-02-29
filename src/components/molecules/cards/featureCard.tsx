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

const FeatureCard = (props: Props) => {
  const { title, imageSource, subtitle } = props;
  return (
    // <Box display={'flex'} flex={1}>
    <Card
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
      // sx={{flex:1, display:'flex'}}
    >
      <CardMedia component="img" height="350" image={imageSource} alt={title} />
      <CardContent
        sx={{
          p: 5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          color={"primary.dark"}
          fontWeight={"900"}
          gutterBottom
          variant="h4"
          component="div"
          fontFamily={"Lato"}
        >
          {title}
        </Typography>
        <Typography fontFamily={"Lato"} color="primary.dark">
          {subtitle}
        </Typography>
        <Box mt={1} mb={2}>
          <Button variant="dashed">Learn More</Button>
        </Box>
      </CardContent>
    </Card>
    // </Box>
  );
};

export default FeatureCard;
