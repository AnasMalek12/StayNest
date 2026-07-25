async function initMap() {
  const mapElement = document.getElementById("map");

  const rawGeometry = mapElement.getAttribute("data-geometry");
  const listingGeometry = JSON.parse(rawGeometry);

  if (!listingGeometry) {
    new google.maps.Map(mapElement, {
      zoom: 5,
      center: { lat: 20.5937, lng: 78.9629 },
    });
    return;
  }

  const coordinates = {
    lat: listingGeometry.coordinates[1],
    lng: listingGeometry.coordinates[0],
  };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const map = new Map(mapElement, {
    center: coordinates,
    zoom: 13,
    mapId: "DEMO_MAP_ID", // Replace with your own Map ID later
  });

  new AdvancedMarkerElement({
    map,
    position: coordinates,
    title: "Location",
  });
}

window.onload = initMap;
