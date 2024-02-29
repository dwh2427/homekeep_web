import { Box, Menu, MenuList, MenuProps } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const MENU_LIST = {
  services: [
    {
      title: "Repairs",
      children: [
        { title: "Cleaning" },
        { title: "Gardening" },
        { title: "Painting" },
      ],
    },
    {
      title: "Repairs",
      children: [
        { title: "Cleaning" },
        { title: "Gardening" },
        { title: "Painting" },
      ],
    },
    {
      title: "Repairs",
      children: [
        { title: "Cleaning" },
        { title: "Gardening" },
        { title: "Painting" },
      ],
    },
  ],
};

type Props = {
  open: boolean;
  anchorEl: MenuProps["anchorEl"];
};

const MenuExpanded = (props: Props) => {
  const { open, anchorEl } = props;
  return (
    <Menu sx={{width:'100%'}} open={open} anchorEl={anchorEl}>
      <Grid2 spacing={2} container>
        {MENU_LIST.services.map((item) => {
          return (
            <Grid2 key={item.title}>
              <Box p={2} borderRadius={0.5}>
                {item.children.map((item)=>{
                    return(item.title)
                })}
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
    </Menu>
  );
};

export default MenuExpanded;
