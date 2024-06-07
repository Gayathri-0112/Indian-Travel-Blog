document.getElementById('next').onclick = function () {
    let items = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(items[0]);
}

document.getElementById('prev').onclick = function () {
    let items = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(items[items.length - 1]);
}

// Function to handle the search button click
function search() {
    // Get the selected value from the dropdown
    var selectedPlace = document.getElementById("searchDropdown").value;
  
    // Define the links to the details pages based on the selected place
    var placeLinks = {
      "Andhra Pradesh": "andhrapradesh.html",
      "Arunachal Pradesh": "arunachalpradesh.html",
      "Assam": "assam.html",
      "Bihar": "bihar.html",
      "Chhattisgarh": "chhattisgarh.html",
      "Goa": "Goa.html",
      "Gujarat": "gujarat.html",
      "Haryana": "haryana.html",
      "Himachal Pradesh": "himachalpradesh.html",
      "Jharkhand": "jharkhand.html",
      "Karnataka": "karnataka.html",
      "Kerala": "kerala.html",
      "Madhya Pradesh": "madhyapradesh.html",
      "Maharashtra": "maharashtra.html",
      "Manipur": "manipur.html",
      "Meghalaya": "meghalaya.html",
      "Mizoram": "mizoram.html",
      "Nagaland": "nagaland.html",
      "Odisha": "odisha.html",
      "Punjab": "Punjab.html",
      "Rajasthan": "rajasthan.html",
      "Sikkim": "sikkim.html",
      "Tamil Nadu": "tamilnadu.html",
      "Telangana": "telangana.html",
      "Tripura": "tripura.html",
      "Uttar Pradesh": "uttarpradesh.html",
      "Uttarakhand": "uttarakhand.html",
      "West Bengal": "westbengal.html",
      // Add links for other places
    };
  
    // Redirect to the details page based on the selected place
    var selectedPlaceLink = placeLinks[selectedPlace];
    if (selectedPlaceLink) {
      window.location.href = selectedPlaceLink;
    } else {
      // Handle the case where the selected place link is not defined
      console.error("Link not found for selected place: " + selectedPlace);
    }
  }
  
  // Add event listener to the search button
  document.getElementById("search-button").addEventListener("click", search);
  
  // Add any additional JavaScript logic as needed
  