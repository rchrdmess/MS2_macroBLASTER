// Function to populate the datalist with age options

function populateAgeList() {
  let dataList = document.getElementById('ageList');

    for (let age = 16; age <= 85; age++) {
      let optionElement = document.createElement('option');
      optionElement.value = age;
      dataList.appendChild(optionElement);
    }
}

// Call the function to populate the datalist with age options

populateAgeList();

// Function to populate the datalist with height options

function populateHeightList() {
  let dataList = document.getElementById('heightList');

    for (let height = 120; height <= 225; height++) {
      let optionElement = document.createElement('option');
      optionElement.value = height;
      dataList.appendChild(optionElement);
    }
}

// Call the function to populate the datalist with height options

populateHeightList();

// Function to populate the datalist with weight options

function populateWeightList() {
  let dataList = document.getElementById('weightList');

    for (let weight = 38.0; weight <= 190.0; weight += 0.5) {
      let optionElement = document.createElement('option');
       optionElement.value = weight % 1 === 0 ? weight.toFixed(1) : weight.toFixed(1);
      dataList.appendChild(optionElement);
    }
}

// Call the function to populate the datalist with weight options

populateWeightList();