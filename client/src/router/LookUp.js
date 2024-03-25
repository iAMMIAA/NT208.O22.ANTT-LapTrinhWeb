import './css/LookUp.css';
import axios from 'axios';
import React, { useState } from 'react';

function LookUp() {
  const[selectedImage, setSelectedImage] = useState(null);
  const[resultDrug, setResultDrug] = useState(null);
  const[detailDrug, setDetailDrug] = useState(null);
  const[sourceInfo, setSourceInfo] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file)
  };

  const handleLookUp = () =>{
    if(!selectedImage){
      alert("Vui long chon hinh anh truoc khi tra cuu");
      return;
    } 
    
    const formData = new FormData();
    formData.append('image', selectedImage);

    axios.post('http://localhost:3001/predict', formData)
      .then(Response => {
        const drug = Response.data;
        const nameDrug = drug.nameDrug;
        const cite = drug.cites;
        const detailDrug = drug.detail;
        setResultDrug(nameDrug);
        setDetailDrug(detailDrug);
        setSourceInfo(cite);
      })
      .catch(error => {
        console.error("Error while fetching result: ", error);
      });
  };
    
  return (
      <div className='LookUp'>
          <div class = "uploadImage">
              <form class="drugForm" >
                  <div class="input_group">
                      <input type="file" class="form_control" placeholder="Tải ảnh lên" onChange={handleImageChange} name='image'/>
                      <label class="input_group_text">Tải ảnh lên</label>
                  </div>
                  <br/>
              </form>
              <button type="button" class="btn_check" onClick={handleLookUp}>Tra cứu</button>
          </div>
          <div className="result">
              <div className='square1' style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className='information_drug'>
                  <p className='detail_drug'>{detailDrug}</p>
                  <p className='source_info_drug'>Trích dẫn: "{sourceInfo}"</p>
                </div>
                  
              </div>
              <div className='rectangle'>
                  <div className='square2'>
                      <p className='line1'>Drug predicted:</p>
                      <p className='resultDrug1'>
                        <h2 className='resultDrug' id="result">{resultDrug}</h2>
                      </p>
                  </div>
                  <div className='square3'>
                      {selectedImage && 
                        <img className='drugImage' alt="Drug" src={URL.createObjectURL(selectedImage)}/>
                      }
                  </div>
              </div>
          </div>
      </div>
  );
}
export default LookUp;