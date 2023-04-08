
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.8718257415477, lng: -87.65024629676189},
        zoom: 15,
        mapId: '54ba7994475ce2b2'
});


//Name
//Latitude
//Longitude
//scaleSize width, height
const markers = [
    [
        "ARC 3rd floor",
        41.874792084293944, 
        -87.6506938982862,
        "icon.png",
        38,
        31
    ],
    [
        "SCE 1st floor",
        41.87233360977798, 
        -87.64799580219731,
        "icon.png",
        38,
        31
    ],
    [
        "SCE 2nd floor",
        41.87190841620897, 
        -87.64803288065694,
        "icon.png",
        38,
        31
    ],
    [   
        "SCE 3rd floor",
        41.87149978595792, 
        -87.64791793743211,
        "icon.png",
        38,
        31
    ],
    [
        "BSB 1st floor",
        41.873717975584874, 
        -87.65263857387208,
        "icon.png",
        38,
        31
    ],
    [
        "UIC REC 1st floor",
        41.87246036759751, 
        -87.64622933906581,
        "icon.png",
        38,
        31
    ],
    [
        "SEO 1st floor",
        41.87077433461827, 
        -87.65074833380511,
        "icon.png",
        38,
        31
    ],
    [
        "SELE",
        41.87074271516642, 
        -87.64828081753379,
        "icon.png",
        38,
        31
    ],
    [
        "SELE",
        41.870496785542194, 
        -87.64760614293284,
        "icon.png",
        38,
        31
    ],
    [
        "SELW",
        41.87038084696262, 
        -87.64928103442473,
        "icon.png",
        38,
        31
    ],
    [
        "SES",
        41.868985973915, 
        -87.64845269328812,
        "icon.png",
        38,
        31
    ],
    [
        "ARC 1st floor",
        41.87465962396021, 
        -87.65038057392775,
        "watericon.png",
        50,
        50
    ],
    [
        "BSB 1st floor",
        41.873749802907064, 
        -87.65241299539639,
        "watericon.png",
        50,
        50
    ],
    [
        "SCE 1st floor",
        41.8719121050273, 
        -87.64808200203045,
        "watericon.png",
        50,
        50
    ],
    [
        "LC A",
        41.872078761176645, 
        -87.64980593090112,
        "watericon.png",
        50,
        50
    ],
    ["LC C",
    41.87211981468552, 
    -87.64871505649533,
    "watericon.png",
    50,
    50
    ],
    [
      "LC B",
      41.87220451631863, 
      -87.6492610832412,
        "watericon.png",
        50,
        50
    ],
    [
        "LC D",
        41.87167138152212, 
        -87.6486778948651,
        "watericon.png",
        50,
        50
    ],
    [
        "LC E",
        41.871617981435534, 
        -87.6493022148484,
        "watericon.png",
        50,
        50
    ],
    [
        "LC F",
        41.87170279331693, 
        -87.64975358132283,
        "watericon.png",
        50,
        50
    ],
    [
        "SELE",
        41.87074995378789, 
        -87.64829081660751,
        "watericon.png",
        50,
        50
    ],
    [
        "SELE",
        41.87046629178816, 
        -87.64753403319668,
        "watericon.png",
        50,
        50
    ],
    [
       "SELW",
       41.870454945282, 
       -87.64921520976704,
        "watericon.png",
        50,
        50
    ],
    [
        "SES",
        41.86887600254908, 
        -87.64829850456428,
        "watericon.png",
        50,
        50
    ],
    [
        "UIC REC 1st floor",
        41.87248770901213, 
        -87.64620259605978,
        "watericon.png",
        50,
        50
    ]
];

for(let i = 0;i<markers.length;i++){
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
        position: {lat: currMarker[1], lng: currMarker[2]},
        map,
        title: currMarker[0],
        icon: {
            url: currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
        },
        animation: google.maps.Animation.DROP
    });
    const infowindow = new google.maps.InfoWindow({
        content: currMarker[0],
    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}

}

