import React, { useContext, useEffect, useState } from 'react';
import "./Profile.scss";
import { Data_User } from '../LayoutUser/LayoutUser';
import Default_Avatar from "../../../Assets/avatar/defaul_avatar.jpeg"
import axios from 'axios';
const Profile = () => {
    const { data } = useContext(Data_User);
    const [formData, setFormData] = useState(data);
    const [visible, setVisible] = useState(true);
    const [load, setload] = useState(false);

    const [Avatar, setAvatar] = useState(Default_Avatar);
    const handleAvatar = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);

    }
    const handleChange = (e) => {
        try {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });

        } catch {
            alert("gaik")

        }
    };

    const handleSubmit = async () => {
        console.log(formData);
        try {
            let response = await axios.post("http://localhost:1234/api/user/update", formData);
            response ? alert("Cập nhật thành công") : alert("Cập nhật không thành công")
            setVisible(true)
            window.location.reload();
        }
        catch (error) {
            alert("lỗi" + error)
        }

    }



    return (
        <div className=' profile container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='wrapper_avatar'>
                        <img src={Avatar} alt='avatar' />
                        <input type='file' onChange={(e) => handleAvatar(e)}
                            accept=".jpg, .jpeg, .png"
                        />
                    </div>
                </div>
                <form className='col-6'  >
                    <div className='form-group'>
                        <label className='form-label'>Full Name:</label>
                        <input className='form-control' type="text" name="fullname" value={formData.fullname} onChange={handleChange}
                            spellCheck={false}
                            disabled={visible}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Password:</label>
                        <input className='form-control' type="text" name="password" value={formData.password} onChange={handleChange}
                            spellCheck={false}
                            disabled={visible}
                        />
                    </div>
                    <div className='form-group'>
                        <labe className='form-label' >Email:</labe>
                        <input className='form-control' type="email" name="email" value={formData.email} onChange={handleChange}
                            spellCheck={false}
                            disabled={visible}
                        />
                    </div>
                    <div className='form-group'>
                        <labe className='form-label' >Phone:</labe>
                        <input className='form-control' type="text" name="phone" value={formData.phone} onChange={handleChange}
                            spellCheck={false}
                            disabled={visible}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='form-label'>Address:</label>
                        <input className='form-control' type="text" name="address" value={formData.address} onChange={handleChange}
                            spellCheck={false}
                            disabled={visible}
                        />
                    </div>
                    <div className='btn-profile'>
                        {
                            visible ? <div onClick={() => setVisible(false)}>Edit</div>
                                :
                                <button type="button" onClick={() => handleSubmit()}>Save</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );

}
export default Profile;