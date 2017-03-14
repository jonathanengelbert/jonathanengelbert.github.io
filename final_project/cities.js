
//The objects below reflect data collected and analyzed from:www.bicycling.com/culture/news/the-50-best-bike-cities-of-2016. 

var bestCities = {
              "type": "FeatureCollection",
              "features": [
              {
                    "type": "Feature", 
                    "properties": {
                    "name": "Chicago",
                    "popupContent": "<h2 style=color:green><b>Chicago<p></h2>Ranking:</b> 1st<p><b>Population:</b> 2,695,598<p><b>Bicycle Facilities Score</b>: 1<p><b>Bicycling-Friendly Business Score:</b> 7<p><b>People Per Bike-Share Bike:</b> 568<p><b>Median Home Value:</b> $208,600"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-87.629798, 41.878114]
              }
              },
              {
                  "type": "Feature",
                  "properties": {
                  "name": "San Francisco",
                  "popupContent": "<h2 style=color:green><b>San Francisco<p></h2>Ranking:</b> 2nd<p><b>Population:</b> 864,816<p><b>Bicycle Facilities Score</b>: 2.4<p><b>Bicycling-Friendly Business Score:</b> 10<p><b>People Per Bike-Share Bike:</b> 1236<p><b>Median Home Value:</b> $1,135,900"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-122.419416, 37.774929]
                }
              },
               {
                  "type": "Feature",
                  "properties": {
                  "name": "Portland",
                  "popupContent": "<h2 style=color:green><b>Portland<p></h2>Ranking:</b> 3rd<p><b>Population:</b> 632,209<p><b>Bicycle Facilities Score</b>: 2.7<p><b>Bicycling-Friendly Business Score:</b> 56<p><b>People Per Bike-Share Bike:</b> 632<p><b>Median Home Value:</b> $368,800"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-122.676482, 45.523062]
                }
              },
                {
                  "type": "Feature",
                  "properties": {
                  "name": "New York City",
                  "popupContent": "<h2 style=color:green><b>New York City<p></h2>Ranking:</b> 4th<p><b>Population:</b> 8,550,405<p><b>Bicycle Facilities Score</b>: 1.3<p><b>Bicycling-Friendly Business Score:</b> 2<p><b>People Per Bike-Share Bike:</b> 1140<p><b>Median Home Value:</b> $613,300"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-74.005941, 40.712784]
                }
              },
                        {
                  "type": "Feature",
                  "properties": {
                  "name": "Seattle",
                  "popupContent": "<h2 style=color:green><b>Seattle<p></h2>Ranking:</b> 5th<p><b>Population:</b> 684,451<p><b>Bicycle Facilities Score</b>: 1.5<p><b>Bicycling-Friendly Business Score:</b> 7<p><b>People Per Bike-Share Bike:</b> 1,369<p><b>Median Home Value:</b> $508,800"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-122.332071, 47.606209]
                }
              },
                         {
                  "type": "Feature",
                  "properties": {
                  "name": "Minneapolis",
                  "popupContent": "<h2 style=color:green><b>Minneapolis<p></h2>Ranking:</b> 6th<p><b>Population:</b> 209,700<p><b>Bicycle Facilities Score</b>: 3.4<p><b>Bicycling-Friendly Business Score:</b> 39<p><b>People Per Bike-Share Bike:</b> 274<p><b>Median Home Value:</b> $201,100"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-93.265011, 44.977753]
                }
              },
                   {
                  "type": "Feature",
                  "properties": {
                  "name": "Austin",
                  "popupContent": "<h2 style=color:green><b>Austin<p></h2>Ranking:</b> 7th<p><b>Population:</b> 931,830<p><b>Bicycle Facilities Score</b>: 1.4<p><b>Bicycling-Friendly Business Score:</b> 15<p><b>People Per Bike-Share Bike:</b> 2330<p><b>Median Home Value:</b> $299,700"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-97.743061, 30.267153]
                }
              },
                    {
                  "type": "Feature",
                  "properties": {
                  "name": "Cambridge",
                  "popupContent": "<h2 style=color:green><b>Cambridge<p></h2>Ranking:</b> 8th<p><b>Population:</b> 110,402<p><b>Bicycle Facilities Score</b>: 10.7<p><b>Bicycling-Friendly Business Score:</b> 2<p><b>People Per Bike-Share Bike:</b> 87<p><b>Median Home Value:</b> $654,000"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-71.109734, 42.373616]
                }
              },
                       {
                  "type": "Feature",
                  "properties": {
                  "name": "Washington D.C",
                  "popupContent": "<h2 style=color:green><b>Washington D.C<p></h2>Ranking:</b> 9th<p><b>Population:</b>672,228<p><b>Bicycle Facilities Score</b>: 2.2<p><b>Bicycling-Friendly Business Score:</b> 43<p><b>People Per Bike-Share Bike:</b> 336<p><b>Median Home Value:</b> $498,000"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-77.036871, 38.907192]
                }
              },
                          {
                  "type": "Feature",
                  "properties": {
                  "name": "Boulder",
                  "popupContent": "<h2 style=color:green><b>Boulder<p></h2>Ranking:</b> 10th<p><b>Population:</b>10,349<p><b>Bicycle Facilities Score</b>: 4<p><b>Bicycling-Friendly Business Score:</b> 15<p><b>People Per Bike-Share Bike:</b> 390<p><b>Median Home Value:</b>$648.200"
              },
                "geometry": {
                    "type": "Point",
              "coordinates": [-105.270546, 40.014986]
                }
              },
             ]
             };

var worstCities = {
              "type": "FeatureCollection",
              "features": [
              {
                    "type": "Feature", 
                    "properties": {
                    "name": "Orlando",
                    "popupContent": "<h2 style=color:red><b>Orlando<p></h2>Ranking:</b> 1st<p><b>Population:</b>181,900<p><b>Bicycle Facilities Score</b>: 1<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 5203<p><b>Median Home Value:</b> $190,340"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-81.379236, 28.538335]
              }
              },
                  {
                    "type": "Feature", 
                    "properties": {
                    "name": "Tampa",
                    "popupContent": "<h2 style=color:red><b>Tampa<p></h2>Ranking:</b> 2nd<p><b>Population:</b>352,957<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 85203<p><b>Median Home Value:</b> $171,900"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-82.457178, 27.950575]
              }
              },
                      {
                    "type": "Feature", 
                    "properties": {
                    "name": "Miami",
                    "popupContent": "<h2 style=color:red><b>Miami<p></h2>Ranking:</b> 3rd<p><b>Population:</b>417,650<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 45000<p><b>Median Home Value:</b>$282,000"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-80.191790, 25.761680]
              }
              },
                             {
                    "type": "Feature", 
                    "properties": {
                    "name": "Riverside",
                    "popupContent": "<h2 style=color:red><b>Riverside<p></h2>Ranking:</b> 4th<p><b>Population:</b>316,619<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 0<p><b>Median Home Value:</b>$338,600"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-117.396156, 33.953349]
              }
              },
                         {
                    "type": "Feature", 
                    "properties": {
                    "name": "Las Vegas",
                    "popupContent": "<h2 style=color:red><b>Las Vegas<p></h2>Ranking:</b> 5th<p><b>Population:</b>603,488<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 48,800<p><b>Median Home Value:</b>$209,100"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-115.139830, 36.169941]
              }
              },
                      {
                    "type": "Feature", 
                    "properties": {
                    "name": "Memphis",
                    "popupContent": "<h2 style=color:red><b>Memphis<p></h2>Ranking:</b> 6th<p><b>Population:</b>653,450<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 0<p><b>Median Home Value:</b>$79,600"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-90.048980, 35.149534]
              }
              },
                         {
                    "type": "Feature", 
                    "properties": {
                    "name": "Jacksonville",
                    "popupContent": "<h2 style=color:red><b>Jacksonville<p></h2>Ranking:</b> 7th<p><b>Population:</b>842,583<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 0<p><b>Median Home Value:</b>$146,000"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-81.655651, 30.332184]
              }
              },
                        {
                    "type": "Feature", 
                    "properties": {
                    "name": "Phoenix",
                    "popupContent": "<h2 style=color:red><b>Phoenix<p></h2>Ranking:</b> 8th<p><b>Population:</b>1,513,000<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 0<p><b>Median Home Value:</b>$205,600"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-112.074037, 33.448377]
              }
              },
                             {
                    "type": "Feature", 
                    "properties": {
                    "name": "Houston",
                    "popupContent": "<h2 style=color:red><b>Houston<p></h2>Ranking:</b> 9th<p><b>Population:</b>2,196,000<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 9,400<p><b>Median Home Value:</b>$189,900"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-95.369803, 29.760427]
              }
                                 
              },
                             {
                    "type": "Feature", 
                    "properties": {
                    "name": "Dallas",
                    "popupContent": "<h2 style=color:red><b>Dallas<p></h2>Ranking:</b> 10th<p><b>Population:</b>1,258,000<p><b>Bicycle Facilities Score</b>: 0<p><b>Bicycling-Friendly Business Score:</b> 0<p><b>People Per Bike-Share Bike:</b> 29,400<p><b>Median Home Value:</b>$160,800"

                    },
                    "geometry": {
                    "type": "Point",
                    "coordinates": [-96.796988, 32.776664]
              }
                                 
              }
]};
