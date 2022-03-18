import React, { useState } from "react";

export default function AddShipping() {
  const [address, setAddress] = useState({
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipcode: "",
    selectCountry: "",
  });



  function updateAddress(event) {
      console.log(event.target.value)
    setAddress((prevAddress) => {
      return {
        ...prevAddress,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <form>
      <input
        required
        type="text"
        name="streetAddress1"
        placeholder="Street Address 1"
        value={address.streetAddress1}
        onChange={updateAddress}
      />
      <input
        required
        type="text"
        name="streetAddress2"
        placeholder="Street Address 2"
        value={address.streetAddress2}
        onChange={updateAddress}
      />
      <input
        required
        type="text"
        name="city"
        placeholder="City"
        value={address.city}
        onChange={updateAddress}
        />
      <input
        required
        type="text"
        name="state"
        placeholder="State"
        value={address.state}
        onChange={updateAddress}
        />
      <input
        required
        type="text"
        name="zipcode"
        placeholder="Zip Code"
        value={address.zipcode}
        onChange={updateAddress}
     />
    


    </form>
  );
}
