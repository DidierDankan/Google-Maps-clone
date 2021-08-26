mapboxgl.accessToken = 'pk.eyJ1IjoiZGlkaWVyZGFua2FuIiwiYSI6ImNrc3N2MmFxZjBzd2wyb3BudGozdnpvMmEifQ.c38PTHrqT7Pw0kD0UG0S0A';

//current location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position)
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setUpMap([12.496366, 41.902782])
}

function setUpMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
        });

        //add zoom in zoom out
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'bottom-right')

        //add menu to check distance with options
        map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
}


