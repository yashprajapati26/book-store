import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {  sm: "block" } }}
          >
            Book Store
          </Typography>
          <Box sx={{ display: { sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>
              <Link to="/">Home</Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link to="add-book">Add Book</Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link to="book-list">Books List</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
