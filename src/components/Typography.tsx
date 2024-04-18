import { Typography as CustomTypography, useTheme } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography"; 

export default function Typography(props: TypographyProps) {
    const theme = useTheme();
    
    const {
      fontWeight,
      fontFamily,
      variant,
      color,
      lineHeight,
    } = props;

  return <CustomTypography {...props} />;
}
