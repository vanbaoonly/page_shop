import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [avatar, setAvatar] = useState("");
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);


            axios.post('http://localhost:1234/api/upload', formData)
                .then(response => {
                    alert('Hình ảnh đã được tải lên thành công!');
                })
                .catch(error => {
                    alert('Đã xảy ra lỗi khi tải lên hình ảnh:', error);
                });
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <img src='http://localhost:1234/api/images/8c49e8072d16c57a1c2ba87db43253aa.jpg' width={'200px'} height={'200px'} />
                    <img src={avatar} alt='avatart' width={"100%"} height={"200px"} />
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div className='col-12'>
                    <button onClick={handleUpload}>Tải lên</button>
                </div>
            </div>
        </div>
    );
}

export default ImageUpload;
