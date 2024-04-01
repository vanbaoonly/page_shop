import { useNavigate } from 'react-router-dom';
import { ROUTERS } from '../../Router/router';
function Logout(props) {
    let Navigate = useNavigate();
    const Logoutt = () => {
        localStorage.removeItem("status_login");
        localStorage.removeItem("data");
        Navigate(ROUTERS.ACTIONS.LOGIN);
    }
    return (
        <div className='logout' style={{ display: "inline-block" }}>
            <button onClick={() => Logoutt()}>log out</button>
        </div>
    );
}

export default Logout;