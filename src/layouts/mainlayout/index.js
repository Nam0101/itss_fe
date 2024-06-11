import { styled } from "@mui/material/styles";
import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../stores/reducers/Customization";
import { drawerWidth, headerHeight } from "../../stores/Constant";
import Header from "./header";
import Sidebar from "./sidebar";

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
  height: `calc(100vh - ${headerHeight}px)`, // chiều cao của main layout
  transition: "width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms", // hiệu ứng chuyển động khi mở rộng menu
  overflowX: "hidden", // ẩn thanh cuộn ngang
  overflowY: "auto", // hiển thị thanh cuộn dọc
  position: "relative", // vị trí tương đối
  display: "flex", // hiển thị dạng flex
  flexDirection: "column", // hiển thị dạng cột
  flex: "1 1 auto", // tự động co giãn
  zIndex: 1,
}));

const MainLayout = () => {
  const opened = useSelector((state) => state.Customization.opened);
  const dispatch = useDispatch();

  const handleDrawer = () => {
    dispatch(setMenu(!opened));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ height: headerHeight }}>
        <Toolbar>
          <Header handleDrawer={handleDrawer} headerHeight={headerHeight} />
        </Toolbar>
      </AppBar>
      <Sidebar
        handleDrawer={handleDrawer}
        opened={opened}
        headerHeight={headerHeight}
      />
      <Main
        open={opened}
        sx={{
          bgcolor: "#f2f5f7",
          marginTop: `${headerHeight}px`,
          px: 3,
        }}
      >
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
