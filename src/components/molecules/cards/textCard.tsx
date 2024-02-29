'use client'
import { Box, BoxProps, Button, ButtonProps, Theme, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type Props = {
  title: string;
  subtitle: string;
  bgcolor?: BoxProps["color"];
  buttonVariant?: ButtonProps['variant']
};

const TextCard = (props: Props) => {
  const {
    title,
    subtitle,
    bgcolor = "primary.dark",
    buttonVariant = "contained",
  } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      padding={{ lg: 8, md: 4, xs: 4 }}
      borderRadius={0.5}
      bgcolor={bgcolor}
      flex={1}
    >
      <Grid2 container spacing={2.5}>
        <Grid2>
          <Typography fontFamily={'iowan_old'} fontWeight={900} variant="h3" color={"white"}>
            {title}
          </Typography>
        </Grid2>
        <Grid2>
          <Typography fontFamily={"Lato"} color={"white"}>
            {subtitle}
          </Typography>
        </Grid2>
        <Grid2>
          <Button variant={buttonVariant}>
            Learn More
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TextCard;
