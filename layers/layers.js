ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DSDSL_1 = new ol.format.GeoJSON();
var features_DSDSL_1 = format_DSDSL_1.readFeatures(json_DSDSL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DSDSL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSDSL_1.addFeatures(features_DSDSL_1);
var lyr_DSDSL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DSDSL_1, 
                style: style_DSDSL_1,
                interactive: true,
                title: '<img src="styles/legend/DSDSL_1.png" /> DSD SL'
            });
var format_ColoboportPlandexpansion_2 = new ol.format.GeoJSON();
var features_ColoboportPlandexpansion_2 = format_ColoboportPlandexpansion_2.readFeatures(json_ColoboportPlandexpansion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColoboportPlandexpansion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColoboportPlandexpansion_2.addFeatures(features_ColoboportPlandexpansion_2);
var lyr_ColoboportPlandexpansion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ColoboportPlandexpansion_2, 
                style: style_ColoboportPlandexpansion_2,
                interactive: true,
    title: 'Colobo port Pland expansion<br />\
    <img src="styles/legend/ColoboportPlandexpansion_2_0.png" /> 1<br />\
    <img src="styles/legend/ColoboportPlandexpansion_2_1.png" /> Northern Terminal<br />\
    <img src="styles/legend/ColoboportPlandexpansion_2_2.png" /> Port Activity area<br />\
    <img src="styles/legend/ColoboportPlandexpansion_2_3.png" /> <br />'
        });
var format_Roadnetwork_3 = new ol.format.GeoJSON();
var features_Roadnetwork_3 = format_Roadnetwork_3.readFeatures(json_Roadnetwork_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadnetwork_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadnetwork_3.addFeatures(features_Roadnetwork_3);
var lyr_Roadnetwork_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roadnetwork_3, 
                style: style_Roadnetwork_3,
                interactive: true,
    title: 'Road network<br />\
    <img src="styles/legend/Roadnetwork_3_0.png" /> National Highways (A)<br />\
    <img src="styles/legend/Roadnetwork_3_1.png" /> Main Roads (B)<br />\
    <img src="styles/legend/Roadnetwork_3_2.png" /> Provincial Roads (C)<br />\
    <img src="styles/legend/Roadnetwork_3_3.png" /> <br />'
        });
var format_Coloboportcurrent_4 = new ol.format.GeoJSON();
var features_Coloboportcurrent_4 = format_Coloboportcurrent_4.readFeatures(json_Coloboportcurrent_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coloboportcurrent_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coloboportcurrent_4.addFeatures(features_Coloboportcurrent_4);
var lyr_Coloboportcurrent_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coloboportcurrent_4, 
                style: style_Coloboportcurrent_4,
                interactive: true,
    title: 'Colobo port current<br />\
    <img src="styles/legend/Coloboportcurrent_4_0.png" /> Bandaranayake Qury<br />\
    <img src="styles/legend/Coloboportcurrent_4_1.png" /> CICT<br />\
    <img src="styles/legend/Coloboportcurrent_4_2.png" /> Colombo Port city<br />\
    <img src="styles/legend/Coloboportcurrent_4_3.png" /> East Container Terminal<br />\
    <img src="styles/legend/Coloboportcurrent_4_4.png" /> Jaya Container Terminal<br />\
    <img src="styles/legend/Coloboportcurrent_4_5.png" /> Northern Breakewater<br />\
    <img src="styles/legend/Coloboportcurrent_4_6.png" /> South Asia Gateway Termi<br />\
    <img src="styles/legend/Coloboportcurrent_4_7.png" /> Utility Coainer TErminnt<br />\
    <img src="styles/legend/Coloboportcurrent_4_8.png" /> Western Breake water<br />\
    <img src="styles/legend/Coloboportcurrent_4_9.png" /> <br />'
        });
var format_Terminals_5 = new ol.format.GeoJSON();
var features_Terminals_5 = format_Terminals_5.readFeatures(json_Terminals_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminals_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminals_5.addFeatures(features_Terminals_5);cluster_Terminals_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Terminals_5
});
var lyr_Terminals_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Terminals_5, 
                style: style_Terminals_5,
                interactive: true,
                title: '<img src="styles/legend/Terminals_5.png" /> Terminals'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_DSDSL_1.setVisible(true);lyr_ColoboportPlandexpansion_2.setVisible(true);lyr_Roadnetwork_3.setVisible(true);lyr_Coloboportcurrent_4.setVisible(true);lyr_Terminals_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_DSDSL_1,lyr_ColoboportPlandexpansion_2,lyr_Roadnetwork_3,lyr_Coloboportcurrent_4,lyr_Terminals_5];
lyr_DSDSL_1.set('fieldAliases', {'fid': 'fid', 'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', });
lyr_ColoboportPlandexpansion_2.set('fieldAliases', {'Name': 'Name', });
lyr_Roadnetwork_3.set('fieldAliases', {'CLASS': 'CLASS', });
lyr_Coloboportcurrent_4.set('fieldAliases', {'Name': 'Name', });
lyr_Terminals_5.set('fieldAliases', {'Name': 'Name', 'Name_Dis': 'Name_Dis', 'Berth': 'Berth', 'Depth': 'Depth', 'About': 'About', 'Photo': 'Photo', });
lyr_DSDSL_1.set('fieldImages', {'fid': 'TextEdit', 'PROVINCE_N': 'TextEdit', 'DCODE': 'Range', 'DIST': 'TextEdit', 'CODE': 'TextEdit', 'DIVISEC': 'TextEdit', });
lyr_ColoboportPlandexpansion_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Roadnetwork_3.set('fieldImages', {'CLASS': 'TextEdit', });
lyr_Coloboportcurrent_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_Terminals_5.set('fieldImages', {'Name': 'TextEdit', 'Name_Dis': 'TextEdit', 'Berth': 'TextEdit', 'Depth': 'TextEdit', 'About': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_DSDSL_1.set('fieldLabels', {'fid': 'no label', 'PROVINCE_N': 'header label', 'DCODE': 'header label', 'DIST': 'header label', 'CODE': 'inline label', 'DIVISEC': 'header label', });
lyr_ColoboportPlandexpansion_2.set('fieldLabels', {'Name': 'header label', });
lyr_Roadnetwork_3.set('fieldLabels', {'CLASS': 'header label', });
lyr_Coloboportcurrent_4.set('fieldLabels', {'Name': 'header label', });
lyr_Terminals_5.set('fieldLabels', {'Name': 'header label', 'Name_Dis': 'inline label', 'Berth': 'inline label', 'Depth': 'inline label', 'About': 'header label', 'Photo': 'header label', });
lyr_Terminals_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});