import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="font font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn btn-outline bg-base-300"><FcGoogle></FcGoogle> Login With Google</button>
                <button className="btn btn-outline bg-base-300"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;