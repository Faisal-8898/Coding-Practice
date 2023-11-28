import {
  Adb as AdbIcon,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = ["Home", "Blogs", "Category", "Info", "Contact Us"];
const categoryMenuItems = ["Sports", "Tech", "Blockchain"]; // Add your category items here

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElCategory, setAnchorElCategory] = React.useState(null);
  const [anchorElContactMenu, setAnchorElContactMenu] = React.useState(null);

  const handleOpenContactMenu = (event) => {
    setAnchorElContactMenu(event.currentTarget);
  };

  const handleCloseContactMenu = () => {
    setAnchorElContactMenu(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenCategoryMenu = (event) => {
    setAnchorElCategory(event.currentTarget);
  };

  const handleCloseCategoryMenu = () => {
    setAnchorElCategory(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid rgb(54,66,73,0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="Black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "Black",
              textDecoration: "none",
            }}
          >
            Life Style
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "block" },
              textAlign: "left",
              fontFamily: "Telo",
              fontWeight: 700,
              letterSpacing: ".2rem",
              fontSize: 25,
              color: "Black",
              paddingRight: "5px", // Adjust the spacing as needed
            }}
          >
            LifeStyle
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              paddingRight: "9px",
              justifyContent: "center", // Center the buttons horizontally
            }}
          >
            {pages.map((page) => (
              <React.Fragment key={page}>
                {page === "Category" ? (
                  // Render dropdown for "Category" page
                  <Box sx={{ position: "relative", display: "inline-block" }}>
                    <Button
                      onClick={handleOpenCategoryMenu}
                      sx={{
                        my: 3,
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 400,
                        fontSize: 15,
                        mx: 3.5,
                        color: "#232428",
                        display: "block",
                      }}
                    >
                      {page}
                    </Button>
                    <Menu
                      anchorEl={anchorElCategory}
                      open={Boolean(anchorElCategory)}
                      onClose={handleCloseCategoryMenu}
                    >
                      {/* Dropdown items for "Category" */}
                      {categoryMenuItems.map((category) => (
                        <MenuItem
                          key={category}
                          onClick={handleCloseCategoryMenu}
                        >
                          <Typography textAlign="center">{category}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  // Render regular button for other pages
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 3,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 400,
                      fontSize: 15,
                      mx: 3.5,
                      color: "#232428",
                      display: "block",
                    }}
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="Black"
              href="your_facebook_link"
              targeta="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton color="Black" href="your_twitter_link" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton
              color="Black"
              href="your_instagram_link"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
