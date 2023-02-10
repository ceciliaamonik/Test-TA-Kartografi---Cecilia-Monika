var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_fasilitas_umum_1 = new ol.format.GeoJSON();
var features_fasilitas_umum_1 = format_fasilitas_umum_1.readFeatures(json_fasilitas_umum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_umum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_umum_1.addFeatures(features_fasilitas_umum_1);
var lyr_fasilitas_umum_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fasilitas_umum_1, 
                style: style_fasilitas_umum_1,
                interactive: true,
                title: '<img src="styles/legend/fasilitas_umum_1.png" /> fasilitas_umum'
            });
var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_2.addFeatures(features_jalan_2);
var lyr_jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
                interactive: true,
                title: '<img src="styles/legend/jalan_2.png" /> jalan'
            });
var format_persil_3 = new ol.format.GeoJSON();
var features_persil_3 = format_persil_3.readFeatures(json_persil_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_persil_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_persil_3.addFeatures(features_persil_3);
var lyr_persil_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_persil_3, 
                style: style_persil_3,
                interactive: true,
                title: '<img src="styles/legend/persil_3.png" /> persil'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_fasilitas_umum_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_persil_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_fasilitas_umum_1,lyr_jalan_2,lyr_persil_3];
lyr_fasilitas_umum_1.set('fieldAliases', {'id': 'id', 'fasum': 'fasum', 'Nama': 'Nama', });
lyr_jalan_2.set('fieldAliases', {'id': 'id', 'jalan': 'jalan', 'Nama': 'Nama', });
lyr_persil_3.set('fieldAliases', {'id': 'id', 'persil': 'persil', 'Nama': 'Nama', });
lyr_fasilitas_umum_1.set('fieldImages', {'id': 'TextEdit', 'fasum': 'TextEdit', 'Nama': 'TextEdit', });
lyr_jalan_2.set('fieldImages', {'id': 'TextEdit', 'jalan': 'TextEdit', 'Nama': '', });
lyr_persil_3.set('fieldImages', {'id': 'TextEdit', 'persil': 'TextEdit', 'Nama': '', });
lyr_fasilitas_umum_1.set('fieldLabels', {'id': 'no label', 'fasum': 'no label', 'Nama': 'inline label', });
lyr_jalan_2.set('fieldLabels', {'id': 'no label', 'jalan': 'no label', 'Nama': 'inline label', });
lyr_persil_3.set('fieldLabels', {'id': 'no label', 'persil': 'no label', 'Nama': 'inline label', });
lyr_persil_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});