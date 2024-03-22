import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

function Signup() {
  return (
    <div>
      <center
        style={{
          paddingTop: 200,
          marginBottom: 10,
        }}
      >
        <Typography variant="h5">Welcome to Course.Sign up below</Typography>
      </center>
      <center>
        <Card
          variant="outlined"
          style={{
            padding: 20,
            width: 400,
            borderRadius: 8,
          }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <br />
          <br />
          <Button variant="contained" size="large">
            Sign up
          </Button>
        </Card>
      </center>
    </div>
  );
}

export default Signup;
