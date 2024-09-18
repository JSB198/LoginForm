let error_Fname = document.getElementById('Error_fname');
let error_Lname = document.getElementById('Error_lname');
let error_email = document.getElementById('Error_email');
let error_phone = document.getElementById('Error_phone');
let error_userId = document.getElementById('Error_userID');
let error_userRef = document.getElementById('Error_userRef');
let error_button = document.getElementById('button_Error');
let error_dropdown = document.getElementById('Error_Dropdown');

let resultArray = [];

let nameAdded = false;
let surnameAdded = false;
let phoneAdded = false;
let emailAdded = false;
let userIdAdded = false;
let referenceAdded = false;
let dropdownAdded = false;



const countryDropdown = document.getElementById("countryDropdown");
const stateDropdown = document.getElementById("stateDropdown");
const cityDropdown = document.getElementById("cityDropdown");

//Please modify to include more countries and cities if you want*
const jsonData = {
  "countries": [
    {
      "name": "South Africa",
      "states": [
        { "name": "Eastern Cape", "cities": ["Port Elizabeth", "East London", "Mthatha"] },
        { "name": "Free State", "cities": ["Bloemfontein", "Welkom", "Parys"] },
        { "name": "Gauteng", "cities": ["Johannesburg", "Pretoria", "Soweto"] },
        { "name": "KwaZulu-Natal", "cities": ["Durban", "Pietermaritzburg", "Richards Bay"] },
        { "name": "Limpopo", "cities": ["Polokwane", "Tzaneen", "Makhado"] },
        { "name": "Mpumalanga", "cities": ["Nelspruit", "Witbank", "Secunda"] },
        { "name": "North West", "cities": ["Rustenburg", "Potchefstroom", "Klerksdorp"] },
        { "name": "Northern Cape", "cities": ["Kimberley", "Upington", "Springbok"] },
        { "name": "Western Cape", "cities": ["Cape Town", "Stellenbosch", "George"] }
      ]
    },
    {
      "name": "Lesotho",
      "states": [
        { "name": "Maseru", "cities": ["Maseru City", "Mafeteng", "Hlotse"] },
        { "name": "Berea", "cities": ["Teyateyaneng", "Maputsoe", "Tsoela"] },
        { "name": "Leribe", "cities": ["Hlotse", "Maputsoe", "Moyeni"] }
      ]
    },
    {
      "name": "Namibia",
      "states": [
        { "name": "Khomas", "cities": ["Windhoek", "Rehoboth", "Okahandja"] },
        { "name": "Erongo", "cities": ["Walvis Bay", "Swakopmund", "Henties Bay"] },
        { "name": "Oshana", "cities": ["Oshakati", "Ondangwa", "Ongwediva"] }
      ]
    },
    {
      "name": "United States",
      "states": [
        { "name": "California", "cities": ["Los Angeles", "San Francisco", "San Diego"] },
        { "name": "Texas", "cities": ["Houston", "Dallas", "Austin"] },
        { "name": "Florida", "cities": ["Miami", "Orlando", "Tampa"] }
      ]
    },
    {
      "name": "United Kingdom",
      "states": [
        { "name": "England", "cities": ["London", "Manchester", "Birmingham"] },
        { "name": "Scotland", "cities": ["Edinburgh", "Glasgow", "Aberdeen"] },
        { "name": "Wales", "cities": ["Cardiff", "Swansea", "Newport"] }
      ]
    }
  ]
};
//this populates the countries
jsonData.countries.forEach((country) => {
  const option = document.createElement("option");
  option.value = country.name;
  option.innerText = country.name;
  countryDropdown.appendChild(option);
});

// After choosing a country, this will populate the state
function updateStates() {
  const selectedCountry = countryDropdown.value;
  stateDropdown.innerHTML = "<option value=''>Select State</option>";

  const country = jsonData.countries.find(
    (country) => country.name === selectedCountry
  );

  if (country) {
    country.states.forEach((state) => {
      const option = document.createElement("option");
      option.value = state.name;
      option.innerText = state.name;
      stateDropdown.appendChild(option);
    });
  }
}

// After choosing the state, this will populate the cities
function updateCities() {
  const selectedCountry = countryDropdown.value;
  const selectedState = stateDropdown.value;
  cityDropdown.innerHTML = "<option value=''>Select City</option>";

  const country = jsonData.countries.find(
    (country) => country.name === selectedCountry
  );

  if (country) {
    const state = country.states.find(
      (state) => state.name === selectedState
    );

    if (state) {
      state.cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.innerText = city;
        cityDropdown.appendChild(option);
      });
    }
  }
}

function ValidateFname() {
  var name = document.getElementById('fName').value;
  if (name.length == 0 || name == null) {
    error_Fname.innerHTML = "Name is required";
    return false;
  }
  else if (!name.match(/^[A-Za-z]*$/)) {
    error_Fname.innerHTML = "No numbers or spaces allowed";
    return false;
  }
  else if (name.length < 3) {
    error_Fname.innerHTML = "Name must be at least 3 characters";
    return false;
  }
  else if (name.length > 20) {
    error_Fname.innerHTML = "Maximum 20 characters";
    return false;
  }


  error_Fname.innerHTML = '<i class="fa-regular fa-circle-check fa-lg"></i>';
  if (nameAdded == false) {
    resultArray.push("Name: " + name);
    nameAdded = true;
  }

  return true;

}
function ValidateLname() {
  var name = document.getElementById('lName').value;

  if (name.length == 0 || name == null) {
    error_Lname.innerHTML = "Last name is required";
    return false;
  }
  else if (!name.match(/^[A-Za-z]*$/)) {
    error_Lname.innerHTML = "No numbers or spaces allowed";
    return false;
  }
  else if (name.length < 3) {
    error_Lname.innerHTML = "Last name must be at least 3 characters";
    return false;
  }
  else if (name.length > 20) {
    error_Lname.innerHTML = "Maximum 20 characters";
    return false;
  }

  error_Lname.innerHTML = '<i class="fa-regular fa-circle-check fa-lg"></i>';
  if (surnameAdded == false) {
    resultArray.push(" Surname: " + name);
    surnameAdded = true;
  }

  return true;
}
function ValidateEmail() {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById('emailId').value;

  if (email.length == 0) {
    error_email.innerHTML = "Email Required";
    return false;
  }
  if (!email.match(mailformat)) {
    error_email.innerHTML = "Valid email only";
    return false;
  }


  error_email.innerHTML = '<i class="fa-regular fa-circle-check fa-lg"></i>';
  if (emailAdded == false) {
    resultArray.push(" Email: " + email);
    emailAdded = true;
  }
  return true;
}
function ValidatePhone() {
  let phoneFormat = /^0*[0-9]{10}$/;
  let phone = document.getElementById('userCell').value;

  if (phone.length == 0) {
    error_phone.innerHTML = "Phone number required";
    document.getElementById('userCell').style.color = 'red';
    return false;
  }
  else if (phone[0] !== '0') {
    error_phone.innerHTML = "Phone number must start with 0";
    document.getElementById('userCell').style.color = 'red';
    return false;
  }
  else if (!phone.match(phoneFormat) || phone.length > 10) {
    error_phone.innerHTML = "Invalid number, 10 digits only";
    document.getElementById('userCell').style.color = 'red';
    return false;
  }
  error_phone.innerHTML = '<i class="fa-regular fa-circle-check fa-lg"></i>';
  document.getElementById('userCell').style.transition = "all 2s";
  document.getElementById('userCell').style.color = '#333333';

  if (phoneAdded == false) {
    resultArray.push(" Phone: " + phone);
    phoneAdded = true;
  }

  return true;
}

function ValidateUserID() {
  let userID = document.getElementById('userId').value;

  if (userID.length == 0) {
    error_userId.innerHTML = "User ID required"
    return false;
  }
  error_userId.innerHTML = '<i class="fa-solid fa-lock fa-lg"></i>';
  if (userIdAdded == false) {
    resultArray.push(" User ID: " + userID);
    userIdAdded = true;
  }

  return true;
}

function ValidateUserRef() {
  let userRef = document.getElementById('userRef').value;

  if (userRef.length == 0) {
    error_userRef.innerHTML = "Reference code required";
    return false;
  }
  error_userRef.innerHTML = '<i class="fa-regular fa-circle-check fa-lg"></i>';
  if (referenceAdded == false) {
    resultArray.push(" Reference Code: " + userRef);
    referenceAdded = true;
  }
  return true;

}

function ValidateDropDown() {
  let country = document.getElementById('countryDropdown').value;
  let state = document.getElementById('stateDropdown').value;
  let city = document.getElementById('cityDropdown').value;

  if (country == "") {
    error_dropdown.innerHTML = "Please select country, state, and city";
    document.getElementById('countryDropdown').style.borderColor = 'red';
    document.getElementById('stateDropdown').style.borderColor = 'lightgrey';
    document.getElementById('cityDropdown').style.borderColor = 'lightgrey';

    return false;
  }
  else if (state == "")
  {
    error_dropdown.innerHTML = "Please select country, state, and city";
    document.getElementById('stateDropdown').style.borderColor = 'red';
    document.getElementById('countryDropdown').style.borderColor = 'green';
    document.getElementById('countryDropdown').style.transition = "all 2s";
    document.getElementById('cityDropdown').style.borderColor = 'lightgrey';
    
    return false;

  }
  else if (city == ""){
    error_dropdown.innerHTML = "Please select country, state, and city";
    document.getElementById('cityDropdown').style.borderColor = 'red';
    document.getElementById('stateDropdown').style.borderColor = 'green';
    document.getElementById('stateDropdown').style.transition = "all 2s";
    return false;
  }
  if (dropdownAdded == false){
    resultArray.push(" Country: " + country);
    resultArray.push(" State: " + state);
    resultArray.push(" City: " + city);
    dropdownAdded = true;
  }
 

  error_dropdown.innerHTML = '';
  document.getElementById('cityDropdown').style.borderColor = 'green';
  document.getElementById('cityDropdown').style.transition = "all 2s";

  return true;

}

function ValidateForm() {
  if (ValidateFname() == false || ValidateLname() == false || ValidateEmail() == false || ValidateUserID() == false || ValidateDropDown() == false || ValidatePhone() == false || ValidateUserRef() == false) {
    error_button.innerHTML = "Error! Please fill in all required fields"
    return false;
  }
  sessionStorage.setItem("results", resultArray);
  return true;
}


function ShowResults() {
  let results = document.getElementById('resultsArea');
  let newArray = [];
  newArray = sessionStorage.getItem("results");
  let resultString = newArray.toString();


  results.innerHTML = resultString;
}




function resetForm() {
  document.getElementById("form").reset;
  error_Fname.innerHTML = "";
  error_Lname.innerHTML = "";
  error_email.innerHTML = "";
  error_phone.innerHTML = "";
  error_userId.innerHTML = "";
  error_userRef.innerHTML = "";
  error_button.innerHTML = "";
  error_dropdown.innerHTML = "";
  document.getElementById('countryDropdown').style.borderColor = 'lightgrey';
  document.getElementById('stateDropdown').style.borderColor = 'lightgrey';
  document.getElementById('cityDropdown').style.borderColor = 'lightgrey';

}
