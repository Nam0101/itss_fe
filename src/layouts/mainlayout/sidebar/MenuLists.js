import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuOpen } from "../../../stores/reducers/Customization";
import MenuItems from "../../../menus";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const MenuLists = () => {
  const [menuItem, setMenuItem] = useState(null);
  const isOpen = useSelector((state) => state.Customization.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    setMenuItem(MenuItems.admin);
  }, []);

  const itemHandle = (id) => {
    dispatch(menuOpen(id));
  };

  return (
    <Box>
      {menuItem &&
        menuItem?.item?.map((item, index) => {
          if (item.type === "group") {
            return (
              <Accordion
                key={index}
                sx={{ bgcolor: "#081627", color: "#ffffff", width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon sx={{ color: "#ffffff" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ width: "100%" }}
                >
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ width: "100%" }}>
                  {item?.children?.map((child, index) => {
                    return (
                      <Box
                        key={index}
                        component={Link}
                        to={"/trangchu"}
                        onClick={() => itemHandle(child.id)}
                        sx={{
                          display: "flex",
                          py: 1.5,
                          my: 0.25,
                          cursor: "pointer",
                          textDecoration: "none",
                          borderRadius: "5px",
                          "&:hover": {
                            backgroundColor: "#ffffff14",
                          },
                          ...(isOpen === child.id && {
                            backgroundColor: "#1976d2",
                            fontWeight: 800,
                            "&:hover": {
                              backgroundColor: "#1976d2",
                            },
                          }),
                        }}
                      >
                        <Typography
                          sx={{
                            pl: 2,
                            color: "#ffffff",
                            fontSize: "0.9rem",
                            textDecoration: "none",
                          }}
                        >
                          {child.title}
                        </Typography>
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          } else {
            return <Box key={index}>{item.title}</Box>;
          }
        })}
    </Box>
  );
};

export default MenuLists;
