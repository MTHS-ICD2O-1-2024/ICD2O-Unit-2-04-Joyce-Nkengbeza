// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Feb 2025
// This file contains the JS functions for index.html

function enterClicked() {
  // input
  const streetnumber = parseInt(document.getElementById("street-number").value)
  const streetname = document.getElementById("street-name").value
  // output
  document.getElementById("street-adress").innerHTML =
    "Your Adress Is: " + streetnumber + " " + streetname + "."
}
