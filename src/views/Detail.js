import {
  Box,
  Typography,
  Paper,
  Button,
  Rating,
  TextField,
  Avatar,
} from "@mui/material";
import ContentRight from "./ContentRight";
import { useSelector } from "react-redux";
import { useState } from "react";
import PdfViewer from "./PdfViewer";

const Detail = () => {
  const src = useSelector((state) => state.Subject.src);
  const title = useSelector((state) => state.Subject.title);
  // const star = useSelector((state) => state.Subject.star);
  const [myComment, setMyComment] = useState("");
  const [myStar, setMyStar] = useState(0);
  const [comment, setComment] = useState([
    {
      name: "Nguyễn Văn Nam",
      star: 5,
      content: "Bài giảng rất hay",
    },
    {
      name: "Trần Thị Hà",
      star: 4,
      content: "Bài giảng rất hay",
    },
    {
      name: "Hoàng Văn Huy",
      star: 3,
      content: "Bài giảng rất hay",
    },
    {
      name: "Nguyễn Hoàng An",
      star: 2,
      content: "Bài giảng rất hay",
    },
    {
      name: "Lê Thị Thanh Hằng",
      star: 1,
      content: "Bài giảng rất hay",
    },
  ]);
  const handleSubmit = () => {
    setComment([
      {
        name: "Phạm Xuân Duy",
        star: myStar,
        content: myComment,
      },
      ...comment,
    ]);
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
        <Box
          sx={{
            width: "55%",
            bgcolor: "#ffffff",
            px: "100px",
            py: "50px",
          }}
        >
          <img style={{ width: "100%" }} alt={title} src={src} />
          <Typography gutterBottom variant="h3" sx={{ mt: 5 }}>
            {title}
          </Typography>
          <Paper variant="outlined" sx={{ p: 3, mt: 5 }}>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ p: 1, color: "#cf2e2e", fontSize: "22px" }}
            >
              Nội dung
            </Typography>
            <Typography variant="body1" sx={{ p: 1, ml: 2 }}>
              1. Bài tập giải tích 1 CTTT
            </Typography>
            <Typography variant="body1" sx={{ p: 1, ml: 2 }}>
              2. Tải đề thi giữa kỳ, cuối kỳ
            </Typography>
          </Paper>
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              mt: 5,
              fontSize: "30px",
              color: "#cf2e2e",
              fontWeight: "500",
            }}
          >
            1. Bài tập giải tích 1 CTTT
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Dưới đây là file đề cương bài tập giải tích 1 chương trình tiên tiến
            nhóm ngành 1
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="outlined"
              sx={{ width: "150px", height: "50px", fontWeight: "500" }}
              component="a"
              href="https://drive.google.com/file/d/1xRl0CzmxC_f6HLNgiFvZbO_jqLpfzg_R/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              TẢI BÀI TẬP
            </Button>
          </Box>
          <PdfViewer />
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              mt: 5,
              fontSize: "30px",
              color: "#cf2e2e",
              fontWeight: "500",
            }}
          >
            2. Tải đề thi giữa kỳ, cuối kỳ
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Dưới đây là file đè thi giữa kỳ, cuối kỳ của môn giải tích 1
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="outlined"
              sx={{ width: "150px", height: "50px", fontWeight: "500" }}
              component="a"
              href="https://drive.google.com/file/d/1xRl0CzmxC_f6HLNgiFvZbO_jqLpfzg_R/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              TẢI BÀI TẬP
            </Button>
          </Box>
          <PdfViewer />
          <Box sx={{ mt: "100px", display: "flex" }}>
            <Typography
              variant="body1"
              sx={{
                p: 0.5,
                fontSize: "30px",
                color: "#cf2e2e",
                fontWeight: "500",
              }}
            >
              Đánh giá:
            </Typography>
            <Rating
              sx={{ fontSize: "50px", ml: 5 }}
              name="simple-controlled"
              value={myStar}
              onChange={(event, newValue) => {
                setMyStar(newValue);
              }}
            />
          </Box>
          <TextField
            placeholder="Nhập bình luận của bạn..."
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={myComment}
            onChange={(e) => setMyComment(e.target.value)}
            sx={{ my: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ width: "120px", height: "40px", fontWeight: "500" }}
              onClick={handleSubmit}
            >
              Gửi
            </Button>
          </Box>

          <Typography
            gutterBottom
            variant="body1"
            sx={{
              mt: 5,
              fontSize: "30px",
              color: "#cf2e2e",
              fontWeight: "500",
            }}
          >
            Bình luận:
          </Typography>
          <Box>
            {comment.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 3,
                  p: 3,
                  bgcolor: "#f2f5f7",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Avatar>{item.name[0]}</Avatar>
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ ml: 2, fontSize: "20px", fontWeight: "500", p: 0.7 }}
                  >
                    {item.name}
                  </Typography>
                </Box>
                <Rating
                  name="read-only"
                  value={item.star}
                  readOnly
                  sx={{ fontSize: "20px" }}
                />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

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
};

export default Detail;
