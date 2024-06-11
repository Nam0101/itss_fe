import { Box, ButtonBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoSection from "../LogoSection";
import SearchSection from "./SearchSection";
import Notifications from "./NotificationSection";
import ProfileSection from "./ProfileSection";
const Header = ({ handleDrawer, headerHeight }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LogoSection sx={{ height: headerHeight }} />
        <ButtonBase
          sx={{ marginLeft: "90px", bgcolor: "#ffffff14", borderRadius: "5px" }}
          onClick={handleDrawer}
        >
          <MenuIcon sx={{ margin: "10px", fontSize: 30 }} />
        </ButtonBase>
      </Box>
      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <Notifications />
      <ProfileSection />
    </>
  );
};

export default Header;
