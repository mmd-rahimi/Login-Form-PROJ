"use client";

import { register } from "@/actions/register";
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
import { useActionState } from "react";

function Register() {
  const [state, action, pending] = useActionState(register, undefined);

  return (
    <Card
      sx={{
        width: "500px",
        // bgcolor: "secondary.dark"
      }}
    >
      <CardContent>
        <form action={action}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                <TextField
                  name="firstName"
                  error={!!state?.errors?.firstName}
                  helperText={state?.errors?.firstName}
                  label="نام"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  name="lastName"
                  error={!!state?.errors?.lastName}
                  helperText={state?.errors?.lastName}
                  label="نام خانوادگی"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <TextField
                name="email"
                error={!!state?.errors?.email}
                helperText={state?.errors?.email}
                label="ایمیل"
                variant="outlined"
                type="email"
                size="small"
              />
              <TextField
                name="password"
                error={!!state?.errors?.password}
                helperText={state?.errors?.password?.map((e: string)=> <Box component="span" display="block" key={e}>{e}</Box>)}
                label="رمز"
                variant="outlined"
                type="password"
                size="small"
              />
            </Box>
            <FormControlLabel
          required
          control={<Checkbox size="small" />}
          label="قوانین را میپذیرم."
        />
        <Button
          disabled={pending}
          disableElevation
          type="submit"
          variant="contained"
        >
          ثبت نام
        </Button>
          </Box>
        </form>


      </CardContent>
    </Card>
  );
}

export default Register;
