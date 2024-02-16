import { getAuth } from "firebase/auth";
import { firebase_app } from "@/firebase/config";
import { useRouter } from "next/router";

const SignOut = () => {
  const router = useRouter();

  const signOut = async () => {
    const auth = getAuth(firebase_app);

    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return { signOut };
};

export default SignOut;
