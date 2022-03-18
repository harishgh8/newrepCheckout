import React, { useState } from "react";
import { TextBox } from "@veneer/core";
import { Container, Row } from "./style";
import Countries from "./Countries";

export default function AddShipVeneer() {
  const [address, setAddress] = useState({
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const updateAddress = (key, val) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [key]: val,
    }));
  };

  const updateCountry = (country) => {
    setAddress({ ...address, country });
  };
  return (
    <Container>
      <TextBox
        required
        id="streetAddress1"
        name="streetAddress1"
        label="Street Address 1"
        value={address.streetAddress1}
        onChange={(val) => updateAddress("streetAddress1", val)}
      />
      <TextBox
        required
        id="streetAddress2"
        name="streetAddress2"
        label="Street Address 2"
        value={address.streetAddress2}
        onChange={(val) => updateAddress("streetAddress2", val)}
      />

      <Row>
        <TextBox
          required
          id="city"
          name="city"
          label="City"
          value={address.city}
          onChange={(val) => updateAddress("city", val)}
        />
        <TextBox
          required
          id="state"
          name="state"
          label="State"
          value={address.state}
          onChange={(val) => updateAddress("state", val)}
        />
      </Row>

      <Row>
        <TextBox
          required
          id="zipcode"
          name="zipcode"
          label="Zip Code"
          onChange={(val) => updateAddress("zipcode", val)}
        />
        <Countries value={address.country} onSelect={updateCountry}></Countries>
      </Row>
    </Container>
  );
}
