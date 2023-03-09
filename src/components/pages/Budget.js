import React, { useState } from "react";
import "./budget.css";
import { PieChart, Pie, Cell} from "recharts";
import LoggedInNavbar from './LoggedInNavbar';

const BudgetPieChart = () => {

  const [flowers, setFlowers] = useState({
    package1: { name: "Flowers Package 1", price: 2000, checked: false },
    package2: { name: "Flowers Package 2", price: 3000, checked: false },
    package3: { name: "Flowers Package 3", price: 5000, checked: false },
  });

  const [catering, setCatering] = useState({
    package1: { name: "Catering Package 1", price: 5000, checked: false },
    package2: { name: "Catering Package 2", price: 10000, checked: false },
    package3: { name: "Catering Package 3", price: 15000, checked: false },
  });

  const [venue, setVenue] = useState({
    package1: { name: "Venue Package 1", price: 5000, checked: false },
    package2: { name: "Venue Package 2", price: 10000, checked: false },
    package3: { name: "Venue Package 3", price: 15000, checked: false },
  });

  const [decor, setDecor] = useState({
    package1: { name: "Decor Package 1", price: 5000, checked: false },
    package2: { name: "Decor Package 2", price: 10000, checked: false },
    package3: { name: "Decor Package 3", price: 15000, checked: false },
  });

  const [misc, setMisc] = useState({
    package1: { name: "Misc Package 1", price: 5000, checked: false },
    package2: { name: "Misc Package 2", price: 10000, checked: false },
    package3: { name: "Misc Package 3", price: 15000, checked: false },
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (event) => {
    const packageName = event.target.name;
    const packageType = event.target.getAttribute("data-package-type");
  
    let packageObj;
  
    switch (packageType) {
      case "flowers":
        packageObj = flowers;
        break;
      case "catering":
        packageObj = catering;
        break;
      case "venue":
        packageObj = venue;
        break;
      case "decor":
        packageObj = decor;
        break; 
      case "misc":
        packageObj = misc;
        break;
      default:
        break;
    }
  
    packageObj[packageName].checked = event.target.checked;
  
    let floralsValue = 0;
    Object.keys(flowers).forEach((packageName) => {
      if (flowers[packageName].checked) {
        floralsValue += flowers[packageName].price;
      }
    });
  
    let cateringValue = 0;
    Object.keys(catering).forEach((packageName) => {
      if (catering[packageName].checked) {
        cateringValue += catering[packageName].price;
      }
    });
  
    let venueValue = 0;
    Object.keys(venue).forEach((packageName) => {
      if (venue[packageName].checked) {
        venueValue += venue[packageName].price;
      }
    });
  
    let decorValue = 0;
    Object.keys(decor).forEach((packageName) => {
      if (decor[packageName].checked) {
        decorValue += decor[packageName].price;
      }
    });
  
    let miscValue = 0;
    Object.keys(misc).forEach((packageName) => {
      if (misc[packageName].checked) {
        miscValue += misc[packageName].price;
      }
    });
  
    const newData = [
      { name: "Florals", value: floralsValue},
      { name: "Catering", value: cateringValue},
      { name: "Venue", value: venueValue},
      { name: "Decor", value: decorValue},
      { name: "Misc", value: miscValue},
    ].filter((obj) => obj.value !== 0);;
    
    
    setTotalPrice(floralsValue + cateringValue + venueValue + decorValue + miscValue);
    setData(newData);
  };

const [data, setData] = useState([]);
  
const COLORS = ['#672762', '#d321c6','#cd64c7',  '#ea9fe5', '#543152'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
    <div style={{textAlign: "center"}}>
     <LoggedInNavbar />
      <h1>Calculated Budget</h1>
      <div className="Budget">
      <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <h1>Select Your Event Packages</h1>
      <div className="package-container">
        <h3>Flowers</h3>
        {Object.keys(flowers).map((packageName) => (
          <div key={packageName}>
            <input
              type="checkbox"
              name={packageName}
              data-package-type="flowers"
              checked={flowers[packageName].checked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={packageName}>{flowers[packageName].name}</label>
          </div>
        ))}
      </div>
      <div className="package-container">
        <h3>Catering</h3>
        {Object.keys(catering).map((packageName) => (
          <div key={packageName}>
            <input
              type="checkbox"
              name={packageName}
              data-package-type="catering"
              checked={catering[packageName].checked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={packageName}>{catering[packageName].name}</label>
        </div>
        ))}
</div>
<div className="package-container">
        <h3>Venue</h3>
        {Object.keys(venue).map((packageName) => (
        <div key={packageName}>
            <input
                    type="checkbox"
                    name={packageName}
                    data-package-type="venue"
                    checked={venue[packageName].checked}
                    onChange={handleCheckboxChange}
                    />
                <label htmlFor={packageName}>{venue[packageName].name}</label>
            </div>
        ))}
        </div>
<div className="package-container">
        <h3>Dress</h3>
        {Object.keys(decor).map((packageName) => (
          <div key={packageName}>
            <input
              type="checkbox"
              name={packageName}
              data-package-type="decor"
              checked={decor[packageName].checked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={packageName}>{decor[packageName].name}</label>
          </div>
        ))}
      </div>
<div className="package-container">
        <h3>Misc</h3>
        {Object.keys(misc).map((packageName) => (
          <div key={packageName}>
            <input
              type="checkbox"
              name={packageName}
              data-package-type="misc"
              checked={misc[packageName].checked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={packageName}>{misc[packageName].name}</label>
          </div>
        ))}
      </div>
      <div className="total-price-container">
      <h3>Total Price: ${totalPrice}</h3>
     </div>
      <button>Checkout</button>
    </div>
  )
  
}

export default BudgetPieChart;