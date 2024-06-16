import { Box, Paper, InputBase, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const ContentRight = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "200px",
          p: 3,
          pt: 5,
          bgcolor: "#ffffff",
        }}
      >
        <Typography variant="h6" sx={{ width: "100%", mb: 1 }}>
          Tìm kiếm
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "60px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, height: "60px" }}
            placeholder="tìm kiếm môn học"
            inputProps={{ "aria-label": "tìm kiếm môn học" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box
        sx={{ width: "100%", height: "80px", my: "40px", bgcolor: "#ffffff" }}
      />
      <Box sx={{ width: "100%", p: 4, bgcolor: "#ffffff" }}>
        <Typography variant="h5">Bài viết mới</Typography>
        <Typography variant="body1" sx={{ mt: 3, fontSize: "18px" }}>
          Download Red Giant Trapcode Suite 16 + Hướng dẫn cài đặt
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học Brand Marketing Finance: Tài chính ứng dụng trong Brand
          Marketing
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học Chuyên đề Firewall ASA
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học Content Marketing Planning: Hoạch định Nội dung thông minh
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học Deep Learning cho người mới bắt đầu
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học Docker từ cơ bản đến nâng cao
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học ENTITY Schema (GTV SEO)
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học Học máy (Machine learning) và ứng dụng
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học Bí kíp SEO – Vũ khí leo rank trên công cụ tìm kiếm
        </Typography>
      </Box>
      <Box sx={{ width: "100%", p: 4, mt: "40px", bgcolor: "#ffffff" }}>
        <Typography variant="h5">Danh mục</Typography>
        <Typography variant="body1" sx={{ mt: 3, fontSize: "18px" }}>
          Biên tập video, hình ảnh
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Blog – Hướng dẫn
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Điểm rèn luyện
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          IELTS
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khoa công nghệ dệt may
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khoa công nghệ hóa học
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khoa giáo dục thể chất
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khóa học
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khoa khoa học và công nghệ vật liệu
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khoa lý luận chính trị
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Tiếng anh tổng hợp
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          TOEIC
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Trường CNTT & TT
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Trường Cơ Khí
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Trường Điện – Điện tử
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Viện công nghệ hóa học
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Viện kinh tế và quản lý
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Viện ngoại ngữ
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Viện sinh phẩm
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Khoa lý luận chính trị
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Viện vật lý kỹ thuật
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontSize: "18px" }}>
          Việt toán ứng dụng và tin học
        </Typography>
      </Box>
    </Box>
  );
};
export default ContentRight;
