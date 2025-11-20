import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-3'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <h3 className='text-gray-500 py-2'>Journalism Without Fear or Favour</h3>
            <p className='text-gray-600'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;