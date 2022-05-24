import { Box, Button, Heading } from "@chakra-ui/react";
import { signInWithRedirect } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/config";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider).catch((err) => alert(err.message));
    navigate("/");
  };
  return (
    <div>
      <Heading>ログイン</Heading>
      <Button
        bg="blue.900"
        color="white"
        _hover={{ opacity: 0.8, bg: "blue.900" }}
        onClick={signInWithGoogle}
      >
        Googleでログイン
      </Button>
      <Box>
        <Link to="/signup">新規登録へ</Link>
      </Box>
    </div>
  );
};

export default Login;
