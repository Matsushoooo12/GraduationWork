import { Box, Button, Heading } from "@chakra-ui/react";
import { signInWithRedirect } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase/config";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider).catch((err) => alert(err.message));
    navigate("/");
  };
  return (
    <div>
      <Heading>Signup</Heading>
      <Button
        bg="blue.900"
        color="white"
        _hover={{ opacity: 0.8, bg: "blue.900" }}
        onClick={signInWithGoogle}
      >
        Googleで登録
      </Button>
      <Box>
        <Link to="/login">ログインへ</Link>
      </Box>
    </div>
  );
};

export default SignUp;
