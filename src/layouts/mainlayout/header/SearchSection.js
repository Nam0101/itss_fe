import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SearchSubjectApi } from "../../../stores/apis/Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchSection = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      await SearchSubjectApi(search, dispatch);
      setSearch("");
      navigate("/timkiem");
    } catch (error) {
      console.error("Error during search:", error.message || error);
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 500,
        marginLeft: "50px",
        borderRadius: "23px",
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1, borderRadius: "23px" }}
        placeholder="tìm kiếm môn học"
        inputProps={{ "aria-label": "tìm kiếm môn học" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchSection;
