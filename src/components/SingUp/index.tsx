import { Box, Button, Stack, TextField } from "@material-ui/core";
import Image from "next/image";
import Flip from "react-reveal/Flip";

function SingUp({
  onSingUp,
  isVisible,
}: {
  onSingUp: (isSingleUp: boolean) => void;
  isVisible: boolean;
}) {
  function singIn() {
    onSingUp(false);
  }

  return (
    <Box
      position={isVisible ? "relative" : "absolute"}
      display={isVisible ? "block" : "none"}
      width="100%"
      top={0}
    >
      <Flip right cascade>
        <div>
          <Box display="flex" justifyContent="center">
            <Image src="/assets/logo.svg" height={150} width={150} />
          </Box>
          <TextField
            fullWidth
            id="standard-basic"
            label="Name"
            variant="outlined"
            size={"small" as any}
          />
          <Box paddingTop={3}>
            <TextField
              fullWidth
              id="standard-basic"
              label="E-mail"
              type="email"
              variant="outlined"
              size={"small" as any}
            />
          </Box>
          <Box paddingTop={3}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Login"
              type="password"
              variant="outlined"
              size={"small" as any}
            />
          </Box>

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
              <Button variant="contained">Register</Button>
              <Button onClick={singIn}>Have account? SingIn</Button>
            </Stack>
          </Box>
        </div>
      </Flip>
    </Box>
  );
}

export { SingUp };
