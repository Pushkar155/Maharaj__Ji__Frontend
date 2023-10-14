import { useEffect, useState } from 'react'
import "./anounce.css"


const Anounce = () => {
  const [data, setData] = useState([]);
  // const [isloading,setIsloading]=useState(true);

  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    },);
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://maharaj-ji-backend.vercel.app/API/anounce/getAnounce');
      const jsonData = await response.json();
      setData(jsonData);
      // setIsloading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    data.map((item,index)=>(
      <div className='anounce'>
        <img src={item.image} alt="" />
        <div className="new">
          <h6>New</h6>
        </div>
        <div className="data">
            <div className="address">
                <p> Address</p>
                <h6>{item.address}</h6>
            </div>
            <div className="location">
              <a href={item.map} rel="noreferrer" target='_blank'>&#128204;</a>
            </div>
            
        </div>
    </div>
    ))
  )
}

export default Anounce