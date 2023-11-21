/*global document*/

// ALL COMMENTS ARE FOR THE FUNCTIONS BELOW THEM

// Functions to change the gender button backgrounds when clicked

let gender;

// Here, the male button is defined and an event listener added for when the element is clicked

let male = document.getElementById("male");
male.addEventListener("click", changeMaleBg);

// Here, the female button is defined and an event listener added for when the element is clicked

let female = document.getElementById("female");
female.addEventListener("click", changeFemaleBg);

// This function controls the behaviour of the male button when clicked

function changeMaleBg(event) {
  if (female.style.backgroundColor === "green") {
  this.style.backgroundColor = "green";
  female.style.backgroundColor = "#7b0077";
  } else {
  this.style.backgroundColor = "green";
  }
}

// This function controls the behaviour of the female button when clicked

function changeFemaleBg(event) {
  if (male.style.backgroundColor === "green") {
  this.style.backgroundColor = "green";
  male.style.backgroundColor = "#000067";
  } else {
  this.style.backgroundColor = "green";
  }
}

// Functions to change the goal button backgrounds when clicked

let goal;

// Here, the bulk button is defined and an event listener added for when the element is clicked

let bulk = document.getElementById("bulk");
bulk.addEventListener("click", changeBulkBg);

// Here, the cut button is defined and an event listener added for when the element is clicked

let cut = document.getElementById("cut");
cut.addEventListener("click", changeCutBg);

// Here, the maintain button is defined and an event listener added for when the element is clicked

let maintain = document.getElementById("maintain");
maintain.addEventListener("click", changeMaintainBg);

// This function controls the behaviour of the bulk button when clicked

function changeBulkBg(event) {
  window.alert("A resistance training routine is recommended when choosing this option.");
  if (cut.style.backgroundColor === "green"
 || maintain.style.backgroundColor === "green") {
  bulk.style.backgroundColor = "green";
  cut.style.backgroundColor = "#005352";
  maintain.style.backgroundColor = "#004544";
  } else {
  bulk.style.backgroundColor = "green";
  }
}

// This function controls the behaviour of the cut button when clicked

function changeCutBg(event) {
  if (bulk.style.backgroundColor === "green"
 || maintain.style.backgroundColor === "green") {
  cut.style.backgroundColor = "green";
  bulk.style.backgroundColor = "#003938";
  maintain.style.backgroundColor = "#004544";
  } else {
  cut.style.backgroundColor = "green";
  }
}

// This function controls the behaviour of the maintain button when clicked

function changeMaintainBg(event) {
  if (bulk.style.backgroundColor === "green"
 || cut.style.backgroundColor === "green") {
  maintain.style.backgroundColor = "green";
  bulk.style.backgroundColor = "#003938";
  cut.style.backgroundColor = "#005352";
  } else {
  maintain.style.backgroundColor = "green";
  }
}

// Function to populate the age datalist with age options

function populateAgeList() {
  
// Here, ageDataList is defined
  
  let ageDataList = document.getElementById("ageList");
  
// A for loop is used to create the age options, finite numbers between 16 and 85, and appended as children to the datalist element
  
    for (let age = 16; age <= 85; age +=1) {
      let optionElement = document.createElement("option");
      optionElement.value = age;
      ageDataList.appendChild(optionElement);
    }
}

// The function is called

populateAgeList();

// Function to populate the height datalist with height options

function populateHeightList() {

// Here, heightDataList is defined

  let heightDataList = document.getElementById("heightList");

  // A for loop is used to create the height options, finite numbers between 120 and 225, and appended as children to the datalist element
  
    for (let height = 120; height <= 225; height +=1) {
      let optionElement = document.createElement("option");
      optionElement.value = height;
      heightDataList.appendChild(optionElement);
    }
}

// The function is called

populateHeightList();

// Functions to populate the weight datalist with weight options

function populateWeightList() {

  // Here, weightDataList is defined

  let weightDataList = document.getElementById("weightList");

    // A for loop is used to create the weight options, which are appended as children to the datalist element. As this range increases by 0.5, the toFixed method is used to display the whole numbers to 1 decimal place

    for (let weight = 38.0; weight <= 190.0; weight += 0.5) {
      let optionElement = document.createElement("option");
       optionElement.value = weight % 1 === 0 ?
 weight.toFixed(1) : weight.toFixed(1);
      weightDataList.appendChild(optionElement);
    }
}

// The function is called

populateWeightList();

// Functions to change the activity level button backgrounds when clicked

// The none button is defined and an event listener added for when the element is clicked

let none = document.getElementById("none");
none.addEventListener("click", changeNoneBg);

// The light button is defined and an event listener added for when the element is clicked

let light = document.getElementById("light");
light.addEventListener("click", changeLightBg);

// The medium button is defined and an event listener added for when the element is clicked

let medium = document.getElementById("medium");
medium.addEventListener("click", changeMediumBg);

// The high button is defined and an event listener added for when the element is clicked

let high = document.getElementById("high");
high.addEventListener("click", changeHighBg);

// The extreme button is defined and an event listener added for when the element is clicked

let extreme = document.getElementById("extreme");
extreme.addEventListener("click", changeExtremeBg);

// Function to control the behaviour of the none button when clicked

function changeNoneBg(event) {
  if (light.style.backgroundColor === "green"
 || medium.style.backgroundColor === "green"
 || high.style.backgroundColor === "green"
 || extreme.style.backgroundColor === "green") {
  this.style.backgroundColor = "green";
  light.style.backgroundColor = "#7b0000";
  medium.style.backgroundColor = "#790001";
  high.style.backgroundColor = "#6a0001";
  extreme.style.backgroundColor = "#580001";
  } else {
  this.style.backgroundColor = "green";
  }
}

// Function to control the behaviour of the light button when clicked

function changeLightBg(event) {
  if (none.style.backgroundColor === "green"
 || medium.style.backgroundColor === "green"
 || high.style.backgroundColor === "green"
 || extreme.style.backgroundColor === "green") {
  this.style.backgroundColor = "green";
  none.style.backgroundColor = "#8b0001";
  medium.style.backgroundColor = "#790001";
  high.style.backgroundColor = "#6a0001";
  extreme.style.backgroundColor = "#580001";
  } else {
  this.style.backgroundColor = "green";
  }
}

// Function to control the behaviour of the medium button when clicked

function changeMediumBg(event) {
  if (none.style.backgroundColor === "green"
 || light.style.backgroundColor === "green"
 || high.style.backgroundColor === "green"
 || extreme.style.backgroundColor === "green") {
  this.style.backgroundColor = "green";
  none.style.backgroundColor = "#8b0001";
  light.style.backgroundColor = "#7b0000";
  high.style.backgroundColor = "#6a0001";
  extreme.style.backgroundColor = "#580001";
  } else {
  this.style.backgroundColor = "green";
  }
}

// Function to control the behaviour of the high button when clicked

function changeHighBg(event) {
  if (none.style.backgroundColor === "green"
 || light.style.backgroundColor === "green"
 || medium.style.backgroundColor === "green"
 || extreme.style.backgroundColor === "green") {
  this.style.backgroundColor = "green";
  none.style.backgroundColor = "#8b0001";
  light.style.backgroundColor = "#7b0000";
  medium.style.backgroundColor = "#790001";
  extreme.style.backgroundColor = "#580001";
  } else {
  this.style.backgroundColor = "green";
  }
}

// Function to control the behaviour of the extreme button when clicked

function changeExtremeBg(event) {
  if (none.style.backgroundColor === "green"
 || light.style.backgroundColor === "green"
 || medium.style.backgroundColor === "green"
 || high.style.backgroundColor === "green") {
  this.style.backgroundColor = "green";
  none.style.backgroundColor = "#8b0001";
  light.style.backgroundColor = "#7b0000";
  medium.style.backgroundColor = "#790001";
  high.style.backgroundColor = "#6a0001";
  } else {
  this.style.backgroundColor = "green";
  }
}

// Functions to handle the datalist inputs

// convertToNumber function used to convert variables to numbers so they can be used in calculations

function convertToNumber(value) {
  return +value;
}

// The weight input datalist is defined and an event listener added for when the option is selected

let weightsInput = document.getElementById("weights");
weightsInput.addEventListener("input", handleWeightSelection);

let weightSelection;
let numericWeight;

// Function to retrieve the selected value input and convert it to a number

function handleWeightSelection () {
  let selectedWeight = weightsInput.value;
  let weightSelection = selectedWeight;
  numericWeight = convertToNumber(selectedWeight);
}

// The height input datalist is defined and an event listener added for when the option is selected

let heightsInput = document.getElementById("heights");
heightsInput.addEventListener("input", handleHeightSelection);

let heightSelection;
let numericHeight;

// Function to retrieve the selected value input and convert it to a number

function handleHeightSelection () {
  let selectedHeight = heightsInput.value;
  let heightSelection = selectedHeight;
  numericHeight = convertToNumber(selectedHeight);
}

// The age input datalist is defined and an event listener added for when the option is selected

let agesInput = document.getElementById("ages");
agesInput.addEventListener("input", handleAgeSelection);

let ageSelection;
let numericAge;

// Function to retrieve the selected value input and convert it to a number

function handleAgeSelection () {
  let selectedAge = agesInput.value;
  let ageSelection = selectedAge;
  numericAge = convertToNumber(selectedAge);
}

// Functions to calculate the output results. (event.preventDefault() solution provided by chatgpt, after much discussion, to prevent form submitting until all inputs selected. Chatgpt also advised to place 'window.' before each alert function to stop JSLint thinking alert was a variable.)

let activityFactor;
let exercise;
let exerciseSummary;
let extraWater;
let weightClass;
let encourage;
let yourGoal;
let goalCals;

// The submit button is defined and an event listener added to display the results when the element is clicked

let submit = document.getElementById("submit");

// The results element is defined so the program knows where to place the output results

let results = document.getElementById("results");
submit.addEventListener("click", showResults);

function showResults (event) {

// If statement prevents the results being returned if no age value is selected on the form
  
if (!numericAge) {
  window.alert("PLEASE ENTER YOUR AGE");
  event.preventDefault();
  return;
}

// If statement prevents the results being returned if no height value is selected on the form
  
if (!numericHeight) {
  window.alert("PLEASE ENTER YOUR HEIGHT");
  event.preventDefault();
  return;
}

// If statement prevents the results being returned if no age weight is selected on the form
  
if (!numericWeight) {
  window.alert("PLEASE ENTER YOUR WEIGHT");
  event.preventDefault();
  return;
}

// bmr is defined and a formula provided depending on whether the user is male or female
  
  let bmr;
  let bmrMale = 88.362 + (13.397 * numericWeight) + (4.799 * numericHeight) - (5.677 * numericAge);
  let bmrFemale = 447.593 + (9.247 * numericWeight) + (3.098 * numericHeight) - (4.330 * numericAge);

// If else statements used to setup the results page by assigning values to the gender input selections
  
  if (male.style.backgroundColor === "green") {
  bmr = bmrMale;
  gender = "Male";
  } else if (female.style.backgroundColor === "green") {
  bmr = bmrFemale;
  gender = "Female";
  } else {
  window.alert("PLEASE SELECT YOUR ASSIGNED GENDER");
  event.preventDefault();
  return;
  }

// If else statements used to setup the results page by assigning values to the activity level input selections
  
  if (none.style.backgroundColor === "green") {
  activityFactor = 1.2;
  exercise = "None";
  exerciseSummary = "Little or no exercise";
  extraWater = 0;
  } else if (light.style.backgroundColor === "green") {
  activityFactor = 1.375;
  exercise = "Light";
  exerciseSummary = "1-3 days/week";
  extraWater = 4;
  } else if (medium.style.backgroundColor === "green") {
  activityFactor = 1.55;
  exercise = "Medium";
  exerciseSummary = "3-5 days/week";
  extraWater = 8;
  } else if (high.style.backgroundColor === "green") {
  activityFactor = 1.725;
  exercise = "High";
  exerciseSummary = "6-7 days/week";
  extraWater = 12;
  } else if (extreme.style.backgroundColor === "green") {
  activityFactor = 1.9;
  exercise = "Extreme";
  exerciseSummary = "Exercise & physical job";
  extraWater = 16;
  } else {
  window.alert("PLEASE SELECT YOUR EXERCISE LEVEL");
  event.preventDefault();
  return;
  }

// Used to define the calories output as a whole number
  
  let calories = Math.round(bmr * activityFactor);

// bmi is calculated from the height and weight inputs

  let bmi = numericWeight / ((numericHeight/100)**2);

// If else statements used to determine the resulting output based on the bmi value calculated
  
  if (bmi < 18) {
  weightClass = "underweight.<br><br>Select 'Bulk' and aim for a BMI score of 18.5";
  encourage = "Oh dear!";
  } else if (bmi < 18.5) {
  weightClass = "slightly underweight.<br><br>Select 'Bulk' and aim for a BMI score of 18.5";
  encourage = "So close!";
  } else if (bmi < 24.9) {
  weightClass = "healthy weight.<br><br>Select 'Maintain' to keep you BMI score between 18.5 and 24.9";
  encourage = "Get in!";
  } else if (bmi < 25.5) {
  weightClass = "slightly overweight.<br><br>Select 'Cut' and aim for a BMI score of 24.9";
  encourage = "So close!";
  } else if (bmi < 29.9) {
  weightClass = "overweight.<br><br>Select 'Cut' and aim for a BMI score of 24.9";
  encourage = "Oh dear!";
  } else {
  weightClass = "obese.<br><br>Select 'Cut' and aim for a BMI score of 24.9";
  encourage = "Oh dear!";
  }

// If else statment used to adjust the recommended daily calories for the selected fitness goal, and set the corresponding outputs
  
  if (bulk.style.backgroundColor === "green") {
  goal = +500;
  yourGoal = "Bulk";
  goalCals = "plus 500 kcals/day";
  } else if (cut.style.backgroundColor === "green") {
  goal = -500;
  yourGoal = "Cut";
  goalCals = "less 500 kcals/day";
  } else if (maintain.style.backgroundColor === "green") {
  goal = 0;
  yourGoal = "Maintain";
  goalCals = "0 extra kcals/day";
  } else {
  window.alert("PLEASE SELECT YOUR EXERCISE GOAL");
  event.preventDefault();
  return;
}

let caloriesOut = calories + goal;

// Used to fix the bmi value to one decimal place
  
let bmiOut = bmi.toFixed(1);

// Used to calculate the daily protein goal in grams, rounded down to the nearest whole number, based on the inputed weight
  
let protein = Math.round(1.9 * numericWeight);

// Used to calculate the daily fat consumption goal in grams, rounded down to the nearest whole number, based on the overall required calories
  
let fats = Math.round((0.2 * caloriesOut)/9);

// Used to calculate the daily carbohydrate consumption goal in grams, rounded down to the nearest whole number, based on the overall required calories, proteins and fats
  
let carbs = Math.round(caloriesOut - (protein * 4) - (fats * 9))/4;

// Used to calculate daily water consumption based on inputed weight and activity level
  
let water = (0.0295735 * numericWeight) + (extraWater * 0.0295735);

// Used to fix the daily water consumption to two decimal places
  
let waterOut = water.toFixed(2);

// The results are returned based on the above calculations and placed into the inner html using template literals

  results.innerHTML = `
<table>
 <tr>
  <th colspan="2" style="text-align:center";>YOU SELECTED</th>
 </tr>
 <tr>
<tr>
  <th>Gender:</th><td>${gender}</td>
 </tr>
 <tr>
  <th>Goal:</th><td>${yourGoal} (${goalCals})</td>
 </tr>
 <tr>
  <th>Age:</th><td>${numericAge} yrs</td>
 </tr>
 <tr>
  <th>Height:</th><td>${numericHeight} cm</td>
 </tr>
 <tr>
  <th>Weight:</th><td>${numericWeight} kgs</td>
 </tr>
 <tr>
  <th>Exercise:</th><td>${exercise} (${exerciseSummary})</td>
 </tr>
</table>
<p>Your BMI score is: <span style="background-color:white;padding:0.5vw;"><u>${bmiOut}</u></span></p>
<p>${encourage} <i>You are ${weightClass}</i>.</p>
<table>
 <tr>
  <th colspan="2" style="text-align:center";>RECOMMENDED MACROS</th>
 </tr>
 <tr>
  <th>Daily Calories:</th><td>${caloriesOut} kcal</td>
 </tr>
 <tr>
  <th>Daily Protein:</th><td>${protein} g</td>
 </tr>
 <tr>
  <th>Daily Carbs:</th><td>${carbs} g</td>
 </tr>
 <tr>
  <th>Daily Fats:</th><td>${fats} g</td>
 </tr>
 <tr>
  <th>Daily Water *:</th><td>${waterOut} litres</td>
 </tr>
</table>
<p style="font-size:2vw;">* Sugar-free soft drinks as well as tea and coffee made with fat-free milk can all be included in your water intake.</p>
<p style="font-style:italic;font-size:2vw;">** Recommended macros are based on your selections and calculated using the Harris-Benedict equation. Factors such as muscle mass, body composition, and metabolism can affect your actual requirements. If you have any underlying health conditions or fitness concerns, it's advisable to consult with a healthcare professional or a registered dietitian for personalized guidance **</i></p>
 <br>
 <br>
    <a href="index.htm" aria-label="Return to macroBLASTER"s home page"><div role="button" class="button reload" id="reload">
     <p>Reload</p>
    </div></a>
`;
}
