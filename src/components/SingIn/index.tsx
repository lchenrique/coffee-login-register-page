import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
} from "@material-ui/core";
import Image from "next/image";
import Flip from "react-reveal/Flip";

function SingIn({
  onSingUp,
  isVisible,
}: {
  onSingUp: (isSingleUp: boolean) => void;
  isVisible: boolean;
}) {
  function singUp() {
    onSingUp(true);
  }

  return (
    <Box
      position={isVisible ? "relative" : "absolute"}
      width="100%"
      top={0}
      display={isVisible ? "block" : "none"}
    >
      <Flip right cascade>
        <div>
          <Box display="flex" justifyContent="center">
            <Image src="/assets/logo.svg" height={150} width={150} />
          </Box>
          <TextField
            fullWidth
            id="standard-basic"
            label="Login"
            variant="outlined"
            size={"small" as any}
          />
          <Box paddingTop={3}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Password"
              variant="outlined"
              type="password"
              size={"small" as any}
            />
          </Box>
          <Box paddingTop={3}>
            <Stack spacing={2}>
              <Button variant="contained">Sign in</Button>
              <Button onClick={singUp}>Sing up</Button>
            </Stack>
          </Box>
          <Stack spacing={3} width="100%">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box textAlign="center">
                <FormControlLabel
                  control={<Checkbox name="gilad" />}
                  label="keep connected"
                />
              </Box>
              <Box textAlign="center">
                <Link href="#">Forgot Password</Link>
              </Box>
            </Stack>
          </Stack>
        </div>
      </Flip>
    </Box>
  );
}

export { SingIn };
