import React, { useState } from "react";
import LoggedInNavbar from './LoggedInNavbar';



const NewEvent = () => {
  const [flowers] = useState({
    package1: { name: "Flowers Package 1", price: 2000, checked: false },
    package2: { name: "Flowers Package 2", price: 3000, checked: false },
    package3: { name: "Flowers Package 3", price: 5000, checked: false },
  });

  const [catering] = useState({
    package1: { name: "Catering Package 1", price: 5000, checked: false },
    package2: { name: "Catering Package 2", price: 10000, checked: false },
    package3: { name: "Catering Package 3", price: 15000, checked: false },
  });

  const [venue] = useState({
    package1: { name: "Venue Package 1", price: 5000, checked: false },
    package2: { name: "Venue Package 2", price: 10000, checked: false },
    package3: { name: "Venue Package 3", price: 15000, checked: false },
  });

  const [decor] = useState({
    package1: { name: "Dress Package 1", price: 5000, checked: false },
    package2: { name: "Dress Package 2", price: 10000, checked: false },
    package3: { name: "Dress Package 3", price: 15000, checked: false },
  });

  const [misc] = useState({
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

    let price = 0;

    Object.keys(flowers).forEach((packageName) => {
      if (flowers[packageName].checked) {
        price += flowers[packageName].price;
      }
    });

    Object.keys(catering).forEach((packageName) => {
      if (catering[packageName].checked) {
        price += catering[packageName].price;
      }
    });

    Object.keys(venue).forEach((packageName) => {
      if (venue[packageName].checked) {
        price += venue[packageName].price;
      }
    });

    Object.keys(decor).forEach((packageName) => {
        if (decor[packageName].checked) {
          price += decor[packageName].price;
        }
      });

    Object.keys(misc).forEach((packageName) => {
        if (misc[packageName].checked) {
          price += misc[packageName].price;
        }
      });

    setTotalPrice(price);
  };

  return (
    <div className="new-event-container">
    <LoggedInNavbar />
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
);
};

export default NewEvent;