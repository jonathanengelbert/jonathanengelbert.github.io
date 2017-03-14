
                // MAP CONTAINER
       
  

var map = L.map('map',

{

center: [39.810492, -98.556061],

zoom: 4,

});


mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
ocmlink = '<a href="http://thunderforest.com/">Thunderforest</a>';
L.tileLayer(
    'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', {
    attribution: '&copy; '+mapLink+' Contributors & '+ocmlink 
   
    }).addTo(map);//adds the tile to the map, as well as the attribution.




            //FUNCTION AND CONTROL SECTION
       
function stateStyle(feature) {
    return {
        fillColor: getColor(feature.properties.dpmp),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.6
       
    };
} //calls colors based on the features of "dpmp" variable, located on the doc 'states.js'

function getColor(d) {
    return d > 4 ? '#800026' :       
           d > 3.5  ? '#FC4E2A' :
           d > 2   ? '#FD8D3C' :
           d > 0.99   ? '#FED976' :
                      '#FFEDA0';
}
            


function highlightFeature(e) {
    var layer = e.target;
    info.update(layer.feature.properties);
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.05
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}// adds the style for mouse hover on, sets a target for the layer(e)

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}// resets style on mouse-out event 
     

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}// zooms to state boundaries when clicked

    function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });//the functions that apply to the states.js layer
}

                
var info = L.control(); 

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
    
};
            
info.update = function (props) {
    this._div.innerHTML = '<h1 style="text-align:center"> US Cycling Map </h1>' +  (props ?
        '<b>' + props.name + '</b><br/>' + props.dpmp + ' people / per million population'
        : 'Hover over a state to get stats on cyclists mortality rate accross the US '); 
    };

info.addTo(map);

var legend = L.control({position: 'topright'}); //creates a legend variable, places it on the top right, below the info box.

legend.onAdd = function (map) {//defines legend properties

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 2, 3, 4],
        labels = [];
        
    
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');//generates graduated colors based on values entered on grades.
    }

    return div;
};
            
legend.addTo(map);// adds the legend to the map


                    //LAYER SECTION    


       
L.geoJson(statesData, {style: stateStyle}).addTo(map)//adds my states data, contained in states.js and calls for the function "stateStyle" defined right above

geojson = L.geoJson(statesData, {
    style: stateStyle,
    onEachFeature: onEachFeature
}).addTo(map);          
       
var bestCities = L.geoJSON(bestCities).bindPopup(function(layer) {
    return layer.feature.properties.popupContent;
}); 
var worstCities =  L.geoJSON(worstCities).bindPopup(function(layer){
    return layer.feature.properties.popupContent;
});   

//POLYLINE SECTION: this is where you will find the lines you asked for, harcoded as leaflet objects. They represent a fictional proposed federal bicycle freeway connecting cities along the West Coast.
       
 var westCoastFreeway = L.polyline([
            [47.5982922650485,  -122.3279571533203],
            [47.28854494625741, -122.25311279296874],
            [47.21583707523794, -122.42889404296875],
            [47.18597932702905, -122.56347656249999],
            [47.07199249565323, -122.67059326171874],
            [47.01397113616876, -122.90954589843749],
            [46.13417004624326, -122.89581298828125],
            [45.76943886620391, -122.65686035156249],
            [45.521743896993634,-122.68707275390624],
            [45.460130637921004, -122.67333984374999],
            [44.68427737181225, -123.134765625],
            [43.89789239125797, -122.98095703125],
            [42.98857645832184, -123.55224609375],
            [42.4234565179383, -123.28857421875],
            [42.261049162113856, -122.56347656249999],
            [41.5579215778042,-122.56347656249999],
            [41.16211393939692, -122.25585937500001],
            [40.38002840251183, -122.40966796874999],
            [39.62261494094297, -122.1240234375],
            [38.34165619279595, -121.904296875],
            [37.37015718405753, -120.73974609374999],
            [34.05265942137599, -118.2568359375],
            [33.8339199536547, -117.1142578125],
            [34.05265942137599, -116.45507812500001],
            [34.016241889667015, -115.26855468749999]
        
 ], 
        {color: 'green',
         weight: 3,
         opacity:1,
         dashArray:'10,5',
         lineJoin: 'round'
        }                          
            );   //Polyline attru Attributes 
 

                //LAYER CONTROLS SECTION       
       
var overlay = {
    "Best Cities for Cyclists": bestCities,
    "Worst Cities for Cyclists": worstCities,
    "Proposed West Coast Bicycle Freeway": westCoastFreeway
};
            
L.control.layers(null, overlay).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ],
    routeWhileDragging: true
}).addTo(map);

var redMarker = L.AwesomeMarkers.icon({
icon: 'tint',
markerColor: 'red'
});
L.marker([35.10418, -106.62987], {icon: redMarker}).addTo(map);



                    //END OF CODE