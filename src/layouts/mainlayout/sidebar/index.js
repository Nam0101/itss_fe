import { Box } from "@mui/material";
import { drawerWidth } from "../../../stores/Constant";
import MenuLists from "./MenuLists";

const Sidebar = ({ handleDrawer, opened, headerHeight }) => {
  return (
    <Box
      sx={{
        marginTop: `${headerHeight}px`,
        width: drawerWidth,
        height: `calc(100vh - ${headerHeight}px)`,
        flexShrink: 0,
        bgcolor: "#081627",
        display: opened ? "block" : "none",
        padding: "20px",
        overflowX: "hidden",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: 10,
        },
        "&::-webkit-scrollbar-track": {
          background: "#081627",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#081627",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      <MenuLists />
    </Box>
  );
};

export default Sidebar;
