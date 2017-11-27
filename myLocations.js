var myLocations = {
  crs: "WGS 84 (EPSG: 4326)",
author: "Courtney Simonse",

// function to show all names in data
describeMe: function() {

  // declare variables at top of function
  var myList = "";

  // loop through all features to build list of names
  for (i = 0; i < this.features.length; i++) {
      myList += this.features[i].name + ", ";

      // at the end of the list give a final message.
      if (i === this.features.length-1) {
        myList += " are all of the places I have mapped!";
      }
    }
  return console.log("Report: " + myList );
},
// Locations as array of JS objects
features: [{
  name: "Dairy Queen",
  properties: {
    coordinates: [36.610249,-88.316841],
    type: 'Restaurant',
    details: 'Stop by for a refreshing treat!<br><img src="dairy_queen.jpg" alt="Dairy Queen sign" width=180 height=240>',
    locationMSU: false
  }
  },
  {
  name: "CFSB Center",
  properties: {
    coordinates: [36.622574,-88.319443],
    type: "Basketball",
    details: 'aka RSEC - home of MSU <a href="http://goracers.com/schedule.aspx?path=mbball" target="_blank">Racer basketball</a>',
    locationMSU: true
  }
  },
  {
  name: "The Arboretum at Murray State University",
  properties: {
    coordinates: [36.606239,-88.329956],
    type: "Park",
    details: 'Great for a walk!<br><a href="https://www.facebook.com/MSUArboretum/" target="_blank"><img src="the_arboretum.jpg" alt="The Arboretum at Murray State" width=240 height=240></a>',
    locationMSU: true
  }
  },
  {
  name: "Cheri Theaters",
  properties: {
    coordinates: [36.617699,-88.313515],
    type: "Theater",
    details: 'Catch a movie!<br><a href="http://www.moviesinmurray.com" target="_blank"><img src="cheri_theater.jpg" alt="Cheri Theater" width=210 height=175></a>',
    locationMSU: false
  }
  },
  {
  name: "Gate 28",
  properties: {
    coordinates: [36.614860,-88.314710],
    type: "Clothing Store",
    details: 'Cute boutique',
    locationMSU: false
  }
  },
  {
  name: "St. Leo",
  properties: {
    coordinates: [36.615368,-88.315300],
    type: "Church",
    details: 'Catholic Church',
    locationMSU: false
  }
  },
  {
  name: "Walmart",
  properties: {
    coordinates: [36.626980,-88.317581],
    type: "Grocery Store",
    details: 'Sometimes you just have to make the trip',
    locationMSU: false
  }
  },
  {
  name: "Kroger",
  properties: {
    coordinates: [36.625004,-88.312813],
    type: "Grocery Store",
    details: "has bulk bins",
    locationMSU: false
  }
  },
  {
  name: "Food Giant",
  properties: {
    coordinates: [36.597057,-88.315796],
    type: "Grocery Store",
    details: "aka Story's - The best fried chicken in town",
    locationMSU: false
  }
  },
  {
  name: "Pagliai's Pizza",
  properties: {
    coordinates: [36.617760, -88.311020],
    type: "Restaurant",
    details: "<a href='http://pagliaispizzaofmurray.com/menu.htm' target='_blank'>Italian restaurant</a> with a buffet and kid's play area",
    locationMSU: false
  }
  },
  {
  name: "H.R.H. Dumplin's",
  properties: {
    coordinates: [36.604908, -88.314804],
    type: "Restaurant",
    details: "Great lunch spot. Check out the <a href='https://locu.com/places/dumplins-murray-us/#menu' target='_blank'>menu</a>",
    locationMSU: false
  }
  },
  {
  name: "Calloway County High School",
  properties: {
    coordinates: [36.618820, -88.341710],
    type: "School",
    details: "Home of the Lakers",
    locationMSU: false
  }
  },
  {
  name: "Central Park",
  properties: {
    coordinates: [36.623680, -88.309790],
    type: "Park",
    details: "Murray's largest park and home to the <a href='http://www.playhousemurray.org/' target='_blank'>Playhouse in the Park</a> theater",
    locationMSU: false
  }
  },
  {
  name: "Chestnut Park",
  properties: {
    coordinates: [36.616337, -88.310141],
    type: "Park",
    details: "playground, picnic area, baseball fields, basketball courts",
    locationMSU: false
  }
  },
  {
  name: "Murray High School",
  properties: {
    coordinates: [36.602016, -88.332184],
    type: "School",
    details: "Home of the Tigers",
    locationMSU: false
  }
  },
  {
  name: "Roy Stewart Stadium",
  properties: {
    coordinates: [36.621210, -88.317930],
    type: "Football",
    details: "Home of Racer Football<br>Check out the <a href='http://goracers.com/schedule.aspx?path=football' target='_blank'>schedule</a>",
    locationMSU: true
    }
  }
],
mexFood: [{
    name: "Los Portales",
    properties: {
      coordinates: [36.618679, -88.313560],
      type: "Restaurant",
      details: "Try the Pollo Loco or Speedy Gonzales",
    }
  },
  {
    name: "La Cocina",
    properties: {
      coordinates: [36.602291, -88.314934],
      type: "Restaurant",
      details: "Best chips and salsa",
    }
  },
  {
    name: "The Burrito Shack",
    properties: {
      coordinates: [36.612110, -88.321663],
      type: "Restaurant",
      details: "Good for a quick lunch",
    }
  }
]
};

// How would you call the describeMe() method?
myLocations.describeMe();
