import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

function Register() {
  return (
    <Card
      sx={{
        width: "500px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "2rem",
          }}
        >
          <Typography variant="h5">ثبت نام</Typography>
          <MuiLink component={Link} href={"/auth/login"}>
            قبلا ثبت نام کرده اید؟
          </MuiLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField name="firstName" label="نام" variant="outlined" size="small" />
            <TextField
              name="lastName"
              label="نام خانوادگی"
              variant="outlined"
               size="small"
            />
          </Box>
          <TextField name="email" label="ایمیل" variant="outlined" type="email" size="small" />
          <TextField name="password" label="رمز" variant="outlined" type="password" size="small" />
        </Box>
        <FormControlLabel required control={<Checkbox size="small"/>} label="قوانین را میپذیرم." />
        <Button disableElevation variant="contained">ثبت نام</Button>
        </CardContent>
    </Card>
  );
}

export default Register;
