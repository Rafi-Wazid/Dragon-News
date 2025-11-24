import Advertisements from "./Advertisements";
import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";

const RightNavbar = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <Advertisements></Advertisements>
        </div>
    );
};

export default RightNavbar;