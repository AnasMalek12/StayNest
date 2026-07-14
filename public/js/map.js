function initMap() {
  const mapElement = document.getElementById("map");

  // 1. Read the data attribute and parse it
  const rawGeometry = mapElement.getAttribute("data-geometry");
  const listingGeometry = JSON.parse(rawGeometry);

  // 2. Check if coordinates exist
  if (!listingGeometry) {
    console.warn("No coordinates found for this listing.");
    new google.maps.Map(mapElement, {
      zoom: 5,
      center: { lat: 20.5937, lng: 78.9629 }, // Default location
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    return;
  }

  // 3. Render the map using the extracted coordinates
  const coordinates = {
    lat: listingGeometry.coordinates[1],
    lng: listingGeometry.coordinates[0],
  };

  const map = new google.maps.Map(mapElement, {
    zoom: 13,
    center: coordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  new google.maps.Marker({
    map: map,
    position: coordinates,
    title: "Location",
    animation: google.maps.Animation.DROP,
  });
}

window.onload = initMap;
