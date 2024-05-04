import './css/LookUp.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPrescription } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Link} from 'react-router-dom';

function LookUp() {
  const[selectedImage, setSelectedImage] = useState(null);
  const[resultDrug, setResultDrug] = useState(null);
  const[detailDrug, setDetailDrug] = useState(null);
  const[sourceInfo, setSourceInfo] = useState(null);
  const [relatedDrug, setRelatedDrug] = useState([]);
  const [fixedResult, setFixedResult] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleFixedListResult = () => {
      if(window.scrollY > 285)
        setFixedResult(true);
      else setFixedResult(false);
    }
    
    window.addEventListener('scroll', handleFixedListResult);
    return () => {
      window.removeEventListener('scroll', handleFixedListResult);
    }
  },[])

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
        var drug = Response.data;
        var tagDrug = drug.tagDrug;
        setResultDrug(drug.nameDrug);
        setDetailDrug(drug.detail);
        setSourceInfo(drug.cites);

        axios.get(`http://localhost:3001/related_drug/${tagDrug}`)
            .then(response => {
              setRelatedDrug(response.data);
            })
      })
      .catch(error => {
        console.error("Error while fetching result: ", error);
      });
  };
    
  return (
      <div className='LookUp'>
          <div class = "uploadImage">
            {/* <div className='decor_uploadImage'>
            </div> */}
              <p>D r u g I d e n t i f i c a t i o n</p>
              <form class="drugForm" >
                  <input class="form_control" type="file" placeholder="Tải ảnh lên" onChange={handleImageChange} name='image'/>
                  <div className="input_group_text">
                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                  </div>
              </form>
              <button class="btn_check" onClick={handleLookUp}>Tra cứu</button>
          </div>

          <div className="result">
              <div className='square1'>
                  <div className='name_drug'>
                    <p>Dilantin</p>
                  </div>
                  <div className='over_drug'>
                    <div className='describe_drug'>
                        <p><strong>Color: </strong> white</p>
                        <p><strong>Shape: </strong> round</p>
                        <p><strong>Imprint: </strong> L403 325MG</p>
                        <p></p>
                        <p><em>"Dilantin is used to control seizures. Phenytoin does not treat all types of seizures, and your doctor will determine if it is the right medicine for you."</em></p>
                    </div>
                    {/* <p className='detail_drug' dangerouslySetInnerHTML={{ __html: detailDrug }}></p> */}
                    <div className='information_source'>
                      <img src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/12/28/ceef2be96f71c72f9e60-1703752254941963328669.jpg"/>
                      <p><span> Medically reviewed by <strong>Philip Thornton, DipPharm</strong>.</span></p>
                    </div>
                  </div>
                  
                  <div className='detail_drug'>
                    <p><h3>Thông tin chi tiết:</h3></p>
                    <p>
                        <span>
                            Hạnh nhân không chỉ là một loại thực phẩm ngon miệng, mà còn mang đến nhiều lợi ích tuyệt vời cho sức khỏe của chúng ta. Với thành phần dinh dưỡng đa dạng và giàu chất béo không bão hòa, sữa hạnh nhân đã trở thành một nguồn cung cấp năng lượng và dinh dưỡng tự nhiên mà nhiều người đang ưa chuộng. Hãy cùng Green Food khám phá những lợi ích quan trọng mà sữa hạnh nhân mang lại cho sức khỏe cơ thể qua bài viết này nhé.        
                        </span>
                        <div style={{display: 'flex', flexDirection: 'column', height: '300px', width: '100%', textAlign: 'center'}}>
                            <img style={{height: '100%', textAlign: 'center'}} src={'https://cdn.tgdd.vn//News/0//cach-lam-sua-hanh-nhan-bang-may-xay-845x564-1.jpg'}/>
                            {/* <span><em>Ảnh: Sparkling là gì</em></span> */}
                        </div>
                    </p>
                    <h2>
                        <strong>
                            <span>
                                Lợi ích tuyệt vời cho sức khỏe từ sữa hạnh nhân
                            </span>
                        </strong>
                    </h2>
                    <p>
                        <span>
                            Với lợi ích vượt trội cho sức khỏe và giá trị dinh dưỡng cao, sữa hạnh nhân đã thu hút sự quan tâm của rất nhiều người. Dưới đây là một số lợi ích nổi bật mà sữa hạnh nhân mang lại cho sức khỏe của bạn.
                        </span>
                    </p>
                    <p>&nbsp;</p>
                
                    <h2>
                        <strong>
                            <span>
                                Bổ sung chất dinh dưỡng
                            </span>
                        </strong>
                    </h2>
                    <p>
                        <span>
                            Sữa hạnh nhân là một nguồn giàu chất dinh dưỡng, bao gồm các vitamin nhóm B, vitamin E, canxi, magiê và chất xơ. Đây là những chất cần thiết để duy trì sức khỏe tim mạch, hệ thần kinh và hệ tiêu hóa.
                        </span>       
                    </p>
                    <h3>
                        <strong>
                            <span>
                                Hỗ trợ sức khỏe tim mạch
                            </span>
                        </strong>
                    </h3>
                    <p>
                        <span>
                            Trong sữa hạnh nhân có chứa các chất béo không bão hòa như axit oleic và axit linoleic. Là nhóm chất béo có khả năng giảm cholesterol xấu (LDL) và tăng cholesterol tốt (HDL). Điều này giúp giảm nguy cơ mắc các bệnh tim mạch, như xơ vữa động mạch và đau thắt ngực.
                        </span>
                    </p>
                    <h3>
                        <strong>
                            <span>
                                Quản lý cân nặng
                            </span>
                        </strong>
                    </h3>
                    <p>
                        <span>
                            Sữa hạnh nhân là một lựa chọn tuyệt vời cho những người đang muốn giảm cân hoặc duy trì cân nặng. Chất xơ hòa tan trong sữa hạnh nhân hấp thụ nước và tạo thành một gel trong dạ dày, làm chậm quá trình tiêu hóa, giúp duy trì cảm giác no và ổn định đường huyết. Đồng thời kiểm soát lượng calo tiêu thụ.
                        </span>
                    </p>
                    <p>&nbsp;
                    </p> 
                
                    <h2>
                        <strong>
                            <span>
                                Cách sử dụng sữa hạnh nhân trong chế độ ăn uống
                            </span>
                        </strong>
                    </h2>
                    <p>
                        <span>
                            Sữa hạnh nhân Asturiana có thể được sử dụng linh hoạt và đa dạng, tùy thuộc vào sở thích cá nhân và mục tiêu dinh dưỡng. Dưới đây là một số gợi ý về cách sử dụng sữa hạnh nhân trong chế độ ăn uống hằng ngày mà bạn có thể tham khảo.
                        </span>        
                    </p>
                    <h2>
                        <strong>
                            <span>
                                Sử dụng trong các loại đồ uống
                            </span>
                        </strong>
                    </h2>
                    <p>
                        <span>
                            Sữa hạnh nhân có thể được thêm vào các loại đồ uống như cà phê, trà, smoothie hoặc sinh tố. Việc thêm sữa hạnh nhân sẽ tạo thêm hương vị độc đáo và giàu chất dinh dưỡng. Tạo nên thức uống dinh dưỡng thơm ngon.
                        </span>        
                    </p>
                    <h2>
                        <strong>
                            <span>
                                Uống sữa hạnh nhân trực tiếp
                            </span>
                        </strong>
                    </h2>
                    <p>
                        <span>
                            Uống trực tiếp là cách đơn giản và tiện lợi để tận hưởng giá trị dinh dưỡng từ nguồn sữa hạnh nhân. Bạn có thể uống trực tiếp, phù hợp cho một bữa sáng tiện lợi. Trước khi uống, lắc đều hộp sữa hạnh nhân để đảm bảo các thành phần hỗn hợp đều. Sau khi mở nắp sữa hạnh nhân, hãy đậy kín và bảo quản trong tủ lạnh đồng thời tuân thủ hướng dẫn về thời gian sử dụng và lưu trữ trên bao bì sản phẩm.
                        </span>        
                    </p>
                  </div>
                <p className='source_info_drug'>Trích dẫn: "{sourceInfo}"</p>
              </div>
              <div className='result_flag'>
              </div>
              <div className={fixedResult ? 'fix_list_result':'list_result'}>
                  {/* <div className='square2'>
                      <p className='line1'>Drug predicted:</p>
                      <p className='resultDrug1'>
                        <h2 className='resultDrug' id="result">{resultDrug}</h2>
                      </p>
                  </div> */}
                  <div className='square3'>
                    <div className='defineImage'>
                      <img src='https://www.drugs.com/images/pills/fio/SHR00340.JPG'></img>
                      <p>Ảnh mặc định</p>
                    </div>
                    <div className='drugImage'>
                      <img  alt="Drug" src='https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/12/28/ceef2be96f71c72f9e60-1703752254941963328669.jpg'/>
                      <p>Ảnh người dùng đăng tải</p>
                    </div>
                    {/* {selectedImage && 
                      <img className='drugImage' alt="Drug" src={URL.createObjectURL(selectedImage)}/>
                    } */}
                  </div>
                  <div className='related_drug'>
                    <p><strong>Các bài viết liên quan thuốc:</strong></p>
                    <ul>
                        {/* <li></li> */}
                      {relatedDrug.map(post => (
                        <li>{post.title}</li>
                      ))}
                    </ul>
                  </div>
              </div>
          </div>

          {/* <div className='Media_web'>
            <h2 style={{textAlign: 'center'}}>Top các loại thuốc được tìm kiếm nhiều</h2>
            <div className='list_proposed_drug'>
              <ul>
                <li><a>3B-Medi</a></li>
                <li><a>Agifamcin</a></li>
                <li><a>Agifovir</a></li>
                <li><a>Alpha-Choay</a></li>
                <li><a>Alprazolam-Mylam</a></li>
                <li><a>Ambron</a></li>
                <li><a>Ameflu-Daytime</a></li>
                <li><a>Amlodipin</a></li>
                <li><a>Apha-Bevagyl</a></li>
                <li><a>Arcalion</a></li>
                <li><a>3B-Medi</a></li>
                <li><a>Agifamcin</a></li>
                <li><a>Agifovir</a></li>
                <li><a>Alpha-Choay</a></li>
                <li><a>Alprazolam-Mylam</a></li>
                <li><a>Ambron</a></li>
                <li><a>Ameflu-Daytime</a></li>
                <li><a>Amlodipin</a></li>
                <li><a>Apha-Bevagyl</a></li>
                <li><a>Arcalion</a></li>
                <li><a>3B-Medi</a></li>
                <li><a>Agifamcin</a></li>
                <li><a>Agifovir</a></li>
                <li><a>Alpha-Choay</a></li>
                <li><a>Alprazolam-Mylam</a></li>
                <li><a>Ambron</a></li>
                <li><a>Ameflu-Daytime</a></li>
                <li><a>Amlodipin</a></li>
                <li><a>Apha-Bevagyl</a></li>
                <li><a>Arcalion</a></li>
              </ul>
            </div>
          </div> */}
      </div>
  );
}
export default LookUp;