var wms_layers = [];

var format_2021_0 = new ol.format.GeoJSON();
var features_2021_0 = format_2021_0.readFeatures(json_2021_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_0.addFeatures(features_2021_0);
var lyr_2021_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021_0, 
                style: style_2021_0,
                popuplayertitle: "2021",
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_0_0.png" /> 64 - 74,2<br />\
    <img src="styles/legend/2021_0_1.png" /> 74,2 - 83<br />\
    <img src="styles/legend/2021_0_2.png" /> 83 - 88,2<br />\
    <img src="styles/legend/2021_0_3.png" /> 88,2 - 92,6<br />\
    <img src="styles/legend/2021_0_4.png" /> 92,6 - 99<br />'
        });
var format_2022_1 = new ol.format.GeoJSON();
var features_2022_1 = format_2022_1.readFeatures(json_2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_1.addFeatures(features_2022_1);
var lyr_2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022_1, 
                style: style_2022_1,
                popuplayertitle: "2022",
                interactive: true,
    title: '2022<br />\
    <img src="styles/legend/2022_1_0.png" /> 65 - 76,4<br />\
    <img src="styles/legend/2022_1_1.png" /> 76,4 - 85,8<br />\
    <img src="styles/legend/2022_1_2.png" /> 85,8 - 90<br />\
    <img src="styles/legend/2022_1_3.png" /> 90 - 93<br />\
    <img src="styles/legend/2022_1_4.png" /> 93 - 98<br />'
        });
var format_2023_2 = new ol.format.GeoJSON();
var features_2023_2 = format_2023_2.readFeatures(json_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_2.addFeatures(features_2023_2);
var lyr_2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023_2, 
                style: style_2023_2,
                popuplayertitle: "2023",
                interactive: true,
    title: '2023<br />\
    <img src="styles/legend/2023_2_0.png" /> 66 - 76,4<br />\
    <img src="styles/legend/2023_2_1.png" /> 76,4 - 85,8<br />\
    <img src="styles/legend/2023_2_2.png" /> 85,8 - 90,4<br />\
    <img src="styles/legend/2023_2_3.png" /> 90,4 - 93,6<br />\
    <img src="styles/legend/2023_2_4.png" /> 93,6 - 99<br />'
        });

lyr_2021_0.setVisible(true);lyr_2022_1.setVisible(true);lyr_2023_2.setVisible(true);
var layersList = [lyr_2021_0,lyr_2022_1,lyr_2023_2];
lyr_2021_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'object': 'object', });
lyr_2022_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'object': 'object', });
lyr_2023_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'object': 'object', });
lyr_2021_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'object': 'Range', });
lyr_2022_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'object': 'Range', });
lyr_2023_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'object': 'Range', });
lyr_2021_0.set('fieldLabels', {'PROVINSI': 'no label', 'object': 'no label', });
lyr_2022_1.set('fieldLabels', {'PROVINSI': 'no label', 'object': 'no label', });
lyr_2023_2.set('fieldLabels', {'PROVINSI': 'no label', 'object': 'no label', });
lyr_2023_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});