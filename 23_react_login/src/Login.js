// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#5FF531',
        light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    },
  });

export default function Login() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <Box
          sx={{
            mt: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    {/* <Avatar sx={{ m: 1, bgcolor: 'success.light' }}>
            <LockOutlinedIcon />
          </Avatar> */}
    <Typography component="h1" variant="h5">
            Dururu
          </Typography>
          
    <TextField margin="normal" label="Email Address" required fullWidth name="email" autoComplete="email" autoFocus />
    <TextField margin="normal" label="Password" type="password" required fullWidth name="password" autoComplete="current-password" autoFocus />
    <Button size='large' type="submit" color='primary' fullWidth variant="contained" sx={{ mt: 3, mb: 2, fontSize: 15, fontWeight: 'bold' }} >로그인</Button>
    <Grid container>
              <Grid item xs={6}>
                <Link variant="body2">
                  회원가입
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link variant="body2">
                  비밀번호 찾기
                </Link>
              </Grid>
            </Grid>
            </Box>
        </Container>
        </ThemeProvider>
    </>
  );
}
