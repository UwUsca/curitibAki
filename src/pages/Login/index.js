import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Login = () => {
    const { signInGoogle, signed } = useContext(AuthGoogleContext)
    async function loginGoogle(){
        await signInGoogle();
    }

    if (!signed) {
        // Front página login
        return <button onClick={loginGoogle}>Logar com o Google</button>;
      } else {
        return <Navigate to="/Home" />;
      }

    
};

