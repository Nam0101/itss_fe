import { ButtonBase } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import { headerHeight } from "../../stores/Constant";

const LogoSection = () => {
  return (
    <ButtonBase sx={{ height: headerHeight }}>
      <img src={Logo} alt="logo" style={{ height: "100%", width: "auto" }} />
    </ButtonBase>
  );
};

export default LogoSection;
