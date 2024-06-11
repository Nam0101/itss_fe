import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { setSubject } from "../stores/reducers/Subject";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSubjectApi } from "../stores/apis/Api";

function Media() {
  const data = useSelector((state) => state.Subject.listSubject);
  const isOpen = useSelector((state) => state.Customization.isOpen);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleItemClick = (item) => {
    dispatch(setSubject(item));
    navigate("/tailieu");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isOpen) {
        try {
          await getSubjectApi(isOpen, dispatch);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    };
    fetchData();
  }, [isOpen]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "87vh",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 3,
        }}
      >
        <Grid container spacing={7} sx={{ width: "100%" }}>
          {itemsToDisplay?.map((item, index) => (
            <Grid
              item
              key={index}
              xs={4}
              sx={{ width: "100%", cursor: "pointer" }}
              onClick={() => handleItemClick(item)}
            >
              <Box sx={{ width: "100%", height: "300px", mb: 3 }}>
                {item ? (
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.imgUrl}
                  />
                ) : (
                  <Skeleton variant="rectangular" width="100%" />
                )}

                {item ? (
                  <Box sx={{ pr: 2 }}>
                    <Typography gutterBottom variant="body2">
                      {item.title}
                    </Typography>
                    <Box>
                      <Rating name="read-only" value={item.rating} readOnly />
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          mr: 3,
          alignSelf: "flex-end",
        }}
      >
        <Pagination
          count={Math.ceil(data?.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="secondary"
        />
      </Box>
    </Box>
  );
}

export default function Overview() {
  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Media />
    </Box>
  );
}
