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
var format_Padangadm_1 = new ol.format.GeoJSON();
var features_Padangadm_1 = format_Padangadm_1.readFeatures(json_Padangadm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_1.addFeatures(features_Padangadm_1);
var lyr_Padangadm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Padangadm_1, 
                style: style_Padangadm_1,
                popuplayertitle: "Padang adm",
                interactive: true,
                title: '<img src="styles/legend/Padangadm_1.png" /> Padang adm'
            });
var format_titiktempatgabung_2 = new ol.format.GeoJSON();
var features_titiktempatgabung_2 = format_titiktempatgabung_2.readFeatures(json_titiktempatgabung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titiktempatgabung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titiktempatgabung_2.addFeatures(features_titiktempatgabung_2);
var lyr_titiktempatgabung_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titiktempatgabung_2, 
                style: style_titiktempatgabung_2,
                popuplayertitle: "titik tempat gabung",
                interactive: true,
                title: '<img src="styles/legend/titiktempatgabung_2.png" /> titik tempat gabung'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Padangadm_1.setVisible(true);lyr_titiktempatgabung_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Padangadm_1,lyr_titiktempatgabung_2];
lyr_Padangadm_1.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', });
lyr_titiktempatgabung_2.set('fieldAliases', {'NO': 'NO', 'nama': 'nama', 'latitute': 'latitute', 'field_4': 'field_4', 'Longitute': 'Longitute', });
lyr_Padangadm_1.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', });
lyr_titiktempatgabung_2.set('fieldImages', {'NO': 'Range', 'nama': 'TextEdit', 'latitute': 'TextEdit', 'field_4': 'TextEdit', 'Longitute': 'TextEdit', });
lyr_Padangadm_1.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'inline label - always visible', });
lyr_titiktempatgabung_2.set('fieldLabels', {'NO': 'no label', 'nama': 'inline label - always visible', 'latitute': 'inline label - always visible', 'field_4': 'no label', 'Longitute': 'inline label - always visible', });
lyr_titiktempatgabung_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});