import './css/LookUp.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import bieu3 from './pictures/bieu3.jpg';
import drugImg from './pictures/drug.png'

function LookUp() {
    const [file, setFile] = useState(null);
    const [drugName, setDrugName] = useState('');
    const [drugImage, setDrugImage] = useState('');
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
      setDrugImage(URL.createObjectURL(event.target.files[0]));
    };
  
    const uploadImage = () => {
      const formData = new FormData();
      formData.append('image', file);
  
      axios.post('http://127.0.0.1:8000/api/create/', formData)
        .then((response) => {
          const drug = response.data;
          const idDrug = drug.idDrug;
          const fileImages = drug.picture;
          const linkImage = `http://127.0.0.1:8000${fileImages}/`;
  
          setDrugImage(linkImage);
  
          axios.get(`http://127.0.0.1:8000/api/detail/${idDrug}/`)
            .then((response) => {
              const drug = response.data;
              setDrugName(drug.name);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const handleCheck = (event) => {
      event.preventDefault();
      uploadImage(); // Gọi hàm uploadImage để gửi ảnh lên máy chủ và hiển thị kết quả
    };
    
    return (
        <div className='LookUp'>
            <div class = "uploadImage">
                <form class="drugForm" id="drugForm" encType="multipart/form-data">
                    <div class="input_group">
                        <input type="file" class="form_control" id="imageInput" name="image" onChange={handleFileChange} />
                        <label class="input_group_text" for="inputGroupFile02" onSubmit={uploadImage}>Tải ảnh lên</label>
                    </div>
                    <br />
                </form>
                <button type="button" id="btnCheck" class="btn_check" onClick={handleCheck}>Tra cứu</button>
            </div>
            <div className="result">
                <div className='square1' style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img src={bieu3}></img>
                </div>
                <div className='rectangle'>
                    <div className='square2'>
                        <p className='line1'>Drug predicted:</p>
                        <p className='resultDrug1' id="decor"><h2 className='resultDrug' id="result">"Drug's name"</h2></p>
                    </div>
                    <div className='square3'>
                        <img className='drugImage' id="drugImage" src={drugImage} alt="Drug" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
export default LookUp;