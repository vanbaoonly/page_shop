import { useNavigate } from 'react-router-dom';

function Logout(props) {
    let Navigate = useNavigate();
    const Logoutt = () => {
        localStorage.setItem("status_login", false);
        Navigate("/login");
    }

    return (
        <div className='logout'>
            <button onClick={() => Logoutt()}>log out</button>
        </div>
    );
}

export default Logout;