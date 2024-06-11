import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import ContentRight from "./ContentRight";
import { setSubject } from "../stores/reducers/Subject";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// const data = [
//   {
//     src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
//     title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
//     title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
//     title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
//     title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
//     title: "Queen - Greatest Hits",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
//   {
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     star: 2,
//   },
// ];

function Media() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Subject.resultSearch);

  const handleItemClick = (item) => {
    dispatch(setSubject(item));
    navigate("/tailieu");
  };
  return (
    <Box
      sx={{
        height: "90vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f2f5f7",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#f2f5f7",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#000",
        },
      }}
    >
      <Box
        sx={{
          mt: "80px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            width: "50%",
            bgcolor: "#ffffff",
            padding: 2,
            pt: 5,
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ mt: 5, mb: "100px", px: "60px" }}>
              Search Results for: giải tích
            </Typography>
          </Box>
          {data.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: "100px",
                cursor: "pointer",
              }}
              onClick={() => handleItemClick(item)}
            >
              <Box sx={{ width: "85%", mb: 3 }}>
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
                  <Box sx={{ py: 2 }}>
                    <Typography gutterBottom variant="h4">
                      {item.title}
                    </Typography>
                    <Box>
                      <Rating
                        name="read-only"
                        value={item.rating}
                        readOnly
                        sx={{ mt: 1, mb: 3, fontSize: "2.1rem" }}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                )}
                <Divider color="#555" sx={{ mt: "100px", mb: 3.25 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            width: "20%",
            bgcolor: "#f2f5f7",
            marginLeft: 4,
          }}
        >
          <ContentRight />
        </Box>
      </Box>
    </Box>
  );
}

export default function ResultSearch() {
  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Media />
    </Box>
  );
}
