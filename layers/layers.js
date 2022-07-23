var wms_layers = [];

var lyr_valdassa_camporovere_19_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "valdassa_camporovere_19",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/valdassa_camporovere_19_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264459.372060, 5753015.069085, 1280628.322846, 5777367.880209]
                            })
                        });
var lyr_valdassa_camporovere_20_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "valdassa_camporovere_20",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/valdassa_camporovere_20_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264459.372060, 5753015.069085, 1280628.322846, 5777367.880209]
                            })
                        });
var lyr_valdassa_camporovere_21_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "valdassa_camporovere_21",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/valdassa_camporovere_21_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264459.372060, 5753015.069085, 1280628.322846, 5777367.880209]
                            })
                        });
var lyr_valdassa_camporovere_settembre_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "valdassa_camporovere_settembre",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/valdassa_camporovere_settembre_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264459.372060, 5753015.069085, 1280628.322846, 5777367.880209]
                            })
                        });
var format_schianti_valdassa_4 = new ol.format.GeoJSON();
var features_schianti_valdassa_4 = format_schianti_valdassa_4.readFeatures(json_schianti_valdassa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schianti_valdassa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schianti_valdassa_4.addFeatures(features_schianti_valdassa_4);
var lyr_schianti_valdassa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_schianti_valdassa_4, 
                style: style_schianti_valdassa_4,
                interactive: false,
                title: '<img src="styles/legend/schianti_valdassa_4.png" /> schianti_valdassa'
            });
var format_maschera_conifere_5 = new ol.format.GeoJSON();
var features_maschera_conifere_5 = format_maschera_conifere_5.readFeatures(json_maschera_conifere_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maschera_conifere_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maschera_conifere_5.addFeatures(features_maschera_conifere_5);
var lyr_maschera_conifere_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_maschera_conifere_5, 
                style: style_maschera_conifere_5,
                interactive: false,
                title: '<img src="styles/legend/maschera_conifere_5.png" /> maschera_conifere'
            });
var lyr_indici_conifere_settembre_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "indici_conifere_settembre",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/indici_conifere_settembre_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264459.370971, 5753015.066194, 1280628.325639, 5777367.883265]
                            })
                        });
var lyr_indici_2021_conifere_400_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "indici_2021_conifere_400",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/indici_2021_conifere_400_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264459.370971, 5753015.066194, 1280628.325639, 5777367.883265]
                            })
                        });
var lyr_indici_media_conifere_400_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "indici_media_conifere_400",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/indici_media_conifere_400_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1262867.251001, 5751258.973533, 1282784.114040, 5777430.514578]
                            })
                        });
var lyr_mappa_prossimita_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "mappa_prossimita",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mappa_prossimita_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1262867.251001, 5751258.973533, 1282784.114040, 5777430.514578]
                            })
                        });
var lyr_dem_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "dem",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dem_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264450.386846, 5753022.116208, 1280626.300775, 5777374.764434]
                            })
                        });
var format_curve_livello50_11 = new ol.format.GeoJSON();
var features_curve_livello50_11 = format_curve_livello50_11.readFeatures(json_curve_livello50_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_curve_livello50_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_curve_livello50_11.addFeatures(features_curve_livello50_11);
var lyr_curve_livello50_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_curve_livello50_11, 
                style: style_curve_livello50_11,
                interactive: false,
                title: '<img src="styles/legend/curve_livello50_11.png" /> curve_livello50'
            });
var lyr_valdassa_camporovere_22_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "valdassa_camporovere_22",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/valdassa_camporovere_22_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1264459.372060, 5753015.069085, 1280628.322846, 5777367.880209]
                            })
                        });

lyr_valdassa_camporovere_19_0.setVisible(true);lyr_valdassa_camporovere_20_1.setVisible(true);lyr_valdassa_camporovere_21_2.setVisible(true);lyr_valdassa_camporovere_settembre_3.setVisible(true);lyr_schianti_valdassa_4.setVisible(true);lyr_maschera_conifere_5.setVisible(true);lyr_indici_conifere_settembre_6.setVisible(true);lyr_indici_2021_conifere_400_7.setVisible(true);lyr_indici_media_conifere_400_8.setVisible(true);lyr_mappa_prossimita_9.setVisible(true);lyr_dem_10.setVisible(true);lyr_curve_livello50_11.setVisible(true);lyr_valdassa_camporovere_22_12.setVisible(true);
var layersList = [lyr_valdassa_camporovere_19_0,lyr_valdassa_camporovere_20_1,lyr_valdassa_camporovere_21_2,lyr_valdassa_camporovere_settembre_3,lyr_schianti_valdassa_4,lyr_maschera_conifere_5,lyr_indici_conifere_settembre_6,lyr_indici_2021_conifere_400_7,lyr_indici_media_conifere_400_8,lyr_mappa_prossimita_9,lyr_dem_10,lyr_curve_livello50_11,lyr_valdassa_camporovere_22_12];
lyr_schianti_valdassa_4.set('fieldAliases', {'id': 'id', 'codistat': 'codistat', 'nomcom': 'nomcom', 'provincia': 'provincia', 'schianti_c': 'schianti_c', });
lyr_maschera_conifere_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_curve_livello50_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_schianti_valdassa_4.set('fieldImages', {'id': 'TextEdit', 'codistat': 'TextEdit', 'nomcom': 'TextEdit', 'provincia': 'TextEdit', 'schianti_c': 'TextEdit', });
lyr_maschera_conifere_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_curve_livello50_11.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_schianti_valdassa_4.set('fieldLabels', {'id': 'no label', 'codistat': 'no label', 'nomcom': 'no label', 'provincia': 'no label', 'schianti_c': 'no label', });
lyr_maschera_conifere_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_curve_livello50_11.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_curve_livello50_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});