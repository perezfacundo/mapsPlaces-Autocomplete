function initMap() {
  const argCoords =  { lat: -34.0, lng: -64.0 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: argCoords,
  });

  const marker = new google.maps.Marker({
    position: { lat: -34.0, lng: -64.0},
    map,
  });

  const autocomplete = new google.maps.places.Autocomplete(place_input)
  autocomplete.bindTo('bounds', map)

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    const { geometry } = place ;
    const { viewport, location } = geometry;

    // map.setCenter(location);
    // map.setZoom(12);
    // marker.setPosition(place.geometry.location)
    
    marker.setPosition(location);
    map.fitBounds(viewport);
  })
}



// map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: -34.397, lng: 150.644},
//   zoom: 8
// });
// const argCoords = {lat:-34.0, lng:-64.0};
//     let mapDiv = document.getElementById("map");
//     const input = document.getElementById("place_input");
//     let map;  
//     let marker;
//     let autocomplete;

//     function initMap() {
//       map = new google.maps.Map(mapDiv, {
//         center: argCoords,
//         zoom: 5,
//       });
    
//       marker = new google.maps.Marker({
//         position: argCoords,
//         map: map,
//       });

//       initAutocomplete();
//     } 
    
//     function initAutocomplete(){
//       autocomplete = new google.maps.places.Autocomplete(input);
//       autocomplete.addListener('place_changed', function(){
//         const place = autocomplete.getPlace();
//         map.setCenter(place.geometry.location);
//         marker.setPosition(place.geometry.location);
//       });
//     }