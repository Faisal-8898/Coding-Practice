import { Typography, Button } from "@mui/material";

function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
      }}
    >
      <div>
        <Typography variant="h6" className="">
          Fudemy
        </Typography>
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            marginRight: 10,
          }}
        >
          Signup
        </Button>
        <Button variant="contained">Signin</Button>
      </div>
    </div>
  );
}

export default Appbar;
