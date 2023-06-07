import React, { useState } from 'react'
import './PricingComponent.css';
import tickSVG from './icon-check.svg';
import Switch from "react-switch";


function PricingComponent() {
  const [value, setValue] = useState(1);
  const [index, setIndex] = useState(0);
  const [check,setCheck]=useState(false);

  // const getBackgroundSize = () => {
  //   return ;
  // };


  

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value < 20) {
      setIndex(0);
    } else if (event.target.value < 40) {
      setIndex(1);
    } else if (event.target.value < 60) {
      setIndex(2);
    } else if (event.target.value < 80) {
      setIndex(3);
    } else {
      setIndex(4);
    }
    // setIndex(event.target.value - 1);
  };
  //   - 10K pageviews / $8 per month
  // - 50K pageviews / $12 per month
  // - 100K pageviews / $16 per month
  // - 500k pageviews / $24 per month
  // - 1M pageviews / $36 per month
  const prices = ["10K PAGEVIEWS", "50K PAGEVIEWS", "100K PAGEVIEWS", "500K PAGEVIEWS", "1M PAGEVIEWS"];
  const money = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
  return (
    <div className='pricingComponent'>
      {/* Top Component */}
      <div className="pricingComponent__top">
        <p>{prices[index]}</p>

        <div className='pricingComponent__top__price'>
          <p>{money[index]}</p>
          <p> / {check?"year":"month"}</p>
        </div>
      </div>

      {/* Middle Component */}
      {/* <input type='range' value={value} onChange={handleChange} min={0} max={8} step={2}/> */}
      <div className="pricingComponent__middle">
        <div class="slidecontainer">
          <input type="range" min={1} max={100} step={1} value={value} className="slider" id="myRange" onChange={handleChange} style={{ backgroundSize: `${(value * 100) / 100}% 100%` }} />
        </div>

        <div className="billing">
          <p className='billing__month'>Monthly billing</p>
          <Switch checkedIcon={false} onChange={()=>setCheck(n=>!n)} checked={check} uncheckedIcon={false} onColor={"#a5f3eb"} 
          offColor={"#eaeefb"} handleDiameter={20}/>
          <p className='billing__year'>Yearly billing</p>
          <p className='billing__discount'>25% discount</p>
        </div>
      </div>


      {/* Bottom Component */}
      <div className="pricingComponent__bottom">
        <div className="pricingComponent__bottom__left">
          <div>
            <li><img src={tickSVG} height={"20px"} alt='tick' /> Unlimited Websites</li>
            <li><img src={tickSVG} height={"20px"} alt='tick' /> 100% data ownership</li>
            <li><img src={tickSVG} height={"20px"} alt='tick' /> Email reports</li>
          </div>
        </div>


        <button className="pricingComponent__bottom__right">Start my trial</button>
      </div>

    </div>
  )
}

export default PricingComponent