ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([393433.415544, 1752816.434734, 763725.370857, 1944819.670822]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LIMITESCOMMUNESVFS_1 = new ol.format.GeoJSON();
var features_LIMITESCOMMUNESVFS_1 = format_LIMITESCOMMUNESVFS_1.readFeatures(json_LIMITESCOMMUNESVFS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_LIMITESCOMMUNESVFS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCOMMUNESVFS_1.addFeatures(features_LIMITESCOMMUNESVFS_1);
var lyr_LIMITESCOMMUNESVFS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESCOMMUNESVFS_1, 
                style: style_LIMITESCOMMUNESVFS_1,
                popuplayertitle: 'LIMITES COMMUNES VFS',
                interactive: false,
                title: '<img src="styles/legend/LIMITESCOMMUNESVFS_1.png" /> LIMITES COMMUNES VFS'
            });
var format_COMMUNESCOUVERTES_2 = new ol.format.GeoJSON();
var features_COMMUNESCOUVERTES_2 = format_COMMUNESCOUVERTES_2.readFeatures(json_COMMUNESCOUVERTES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_COMMUNESCOUVERTES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNESCOUVERTES_2.addFeatures(features_COMMUNESCOUVERTES_2);
var lyr_COMMUNESCOUVERTES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNESCOUVERTES_2, 
                style: style_COMMUNESCOUVERTES_2,
                popuplayertitle: 'COMMUNES COUVERTES',
                interactive: true,
                title: '<img src="styles/legend/COMMUNESCOUVERTES_2.png" /> COMMUNES COUVERTES'
            });
var format_FAOSD3C_3 = new ol.format.GeoJSON();
var features_FAOSD3C_3 = format_FAOSD3C_3.readFeatures(json_FAOSD3C_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_FAOSD3C_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAOSD3C_3.addFeatures(features_FAOSD3C_3);
var lyr_FAOSD3C_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAOSD3C_3, 
                style: style_FAOSD3C_3,
                popuplayertitle: 'FAOSD3C',
                interactive: true,
                title: '<img src="styles/legend/FAOSD3C_3.png" /> FAOSD3C'
            });
var format_IPAR_4 = new ol.format.GeoJSON();
var features_IPAR_4 = format_IPAR_4.readFeatures(json_IPAR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_IPAR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPAR_4.addFeatures(features_IPAR_4);
var lyr_IPAR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPAR_4, 
                style: style_IPAR_4,
                popuplayertitle: 'IPAR',
                interactive: true,
                title: '<img src="styles/legend/IPAR_4.png" /> IPAR'
            });
var format_OCPGIS_5 = new ol.format.GeoJSON();
var features_OCPGIS_5 = format_OCPGIS_5.readFeatures(json_OCPGIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_OCPGIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCPGIS_5.addFeatures(features_OCPGIS_5);
var lyr_OCPGIS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCPGIS_5, 
                style: style_OCPGIS_5,
                popuplayertitle: 'OCP GIS',
                interactive: true,
                title: '<img src="styles/legend/OCPGIS_5.png" /> OCP GIS'
            });
var format_OCPDEMOPLOT_6 = new ol.format.GeoJSON();
var features_OCPDEMOPLOT_6 = format_OCPDEMOPLOT_6.readFeatures(json_OCPDEMOPLOT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_OCPDEMOPLOT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCPDEMOPLOT_6.addFeatures(features_OCPDEMOPLOT_6);
var lyr_OCPDEMOPLOT_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCPDEMOPLOT_6, 
                style: style_OCPDEMOPLOT_6,
                popuplayertitle: 'OCPDEMOPLOT',
                interactive: true,
                title: '<img src="styles/legend/OCPDEMOPLOT_6.png" /> OCPDEMOPLOT'
            });
var format_PACAO_7 = new ol.format.GeoJSON();
var features_PACAO_7 = format_PACAO_7.readFeatures(json_PACAO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PACAO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PACAO_7.addFeatures(features_PACAO_7);
cluster_PACAO_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PACAO_7
});
var lyr_PACAO_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PACAO_7, 
                style: style_PACAO_7,
                popuplayertitle: 'PACAO',
                interactive: false,
                title: '<img src="styles/legend/PACAO_7.png" /> PACAO'
            });
var format_PAFISEM_8 = new ol.format.GeoJSON();
var features_PAFISEM_8 = format_PAFISEM_8.readFeatures(json_PAFISEM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_PAFISEM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAFISEM_8.addFeatures(features_PAFISEM_8);
var lyr_PAFISEM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAFISEM_8, 
                style: style_PAFISEM_8,
                popuplayertitle: 'PAFISEM',
                interactive: true,
                title: '<img src="styles/legend/PAFISEM_8.png" /> PAFISEM'
            });
var format_RICOWAS_9 = new ol.format.GeoJSON();
var features_RICOWAS_9 = format_RICOWAS_9.readFeatures(json_RICOWAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_RICOWAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RICOWAS_9.addFeatures(features_RICOWAS_9);
var lyr_RICOWAS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RICOWAS_9, 
                style: style_RICOWAS_9,
                popuplayertitle: 'RICOWAS',
                interactive: true,
                title: '<img src="styles/legend/RICOWAS_9.png" /> RICOWAS'
            });
var format_DOUNDALSOUF_10 = new ol.format.GeoJSON();
var features_DOUNDALSOUF_10 = format_DOUNDALSOUF_10.readFeatures(json_DOUNDALSOUF_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_DOUNDALSOUF_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOUNDALSOUF_10.addFeatures(features_DOUNDALSOUF_10);
var lyr_DOUNDALSOUF_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOUNDALSOUF_10, 
                style: style_DOUNDALSOUF_10,
                popuplayertitle: 'DOUNDAL SOUF',
                interactive: true,
                title: '<img src="styles/legend/DOUNDALSOUF_10.png" /> DOUNDAL SOUF'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LIMITESCOMMUNESVFS_1.setVisible(true);lyr_COMMUNESCOUVERTES_2.setVisible(true);lyr_FAOSD3C_3.setVisible(true);lyr_IPAR_4.setVisible(true);lyr_OCPGIS_5.setVisible(true);lyr_OCPDEMOPLOT_6.setVisible(true);lyr_PACAO_7.setVisible(true);lyr_PAFISEM_8.setVisible(true);lyr_RICOWAS_9.setVisible(true);lyr_DOUNDALSOUF_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LIMITESCOMMUNESVFS_1,lyr_COMMUNESCOUVERTES_2,lyr_FAOSD3C_3,lyr_IPAR_4,lyr_OCPGIS_5,lyr_OCPDEMOPLOT_6,lyr_PACAO_7,lyr_PAFISEM_8,lyr_RICOWAS_9,lyr_DOUNDALSOUF_10];
lyr_LIMITESCOMMUNESVFS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_COMMUNESCOUVERTES_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_FAOSD3C_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'CAV': 'CAV', 'COMMUNE': 'COMMUNE', });
lyr_IPAR_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_OCPGIS_5.set('fieldAliases', {'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_OCPDEMOPLOT_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_PACAO_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_PAFISEM_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_RICOWAS_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR': 'CAR', 'TELEPHONE': 'TELEPHONE', });
lyr_DOUNDALSOUF_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'MILIEU': 'MILIEU', 'RESIDENCE': 'RESIDENCE', 'FONCTION': 'FONCTION', 'CAR.': 'CAR.', 'TELEPHONE': 'TELEPHONE', });
lyr_LIMITESCOMMUNESVFS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_COMMUNESCOUVERTES_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_FAOSD3C_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'CAV': 'TextEdit', 'COMMUNE': 'TextEdit', });
lyr_IPAR_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_OCPGIS_5.set('fieldImages', {'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_OCPDEMOPLOT_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PACAO_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_PAFISEM_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_RICOWAS_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_DOUNDALSOUF_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'MILIEU': 'TextEdit', 'RESIDENCE': 'TextEdit', 'FONCTION': 'TextEdit', 'CAR.': 'TextEdit', 'TELEPHONE': 'TextEdit', });
lyr_LIMITESCOMMUNESVFS_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_COMMUNESCOUVERTES_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'COMCOUV24': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_FAOSD3C_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'CAV': 'hidden field', 'COMMUNE': 'header label - visible with data', });
lyr_IPAR_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_OCPGIS_5.set('fieldLabels', {'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_OCPDEMOPLOT_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PACAO_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_PAFISEM_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_RICOWAS_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DOUNDALSOUF_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'REGION': 'header label - visible with data', 'DEPARTEMEN': 'header label - visible with data', 'COMMUNE': 'header label - visible with data', 'MILIEU': 'hidden field', 'RESIDENCE': 'hidden field', 'FONCTION': 'hidden field', 'CAR.': 'header label - visible with data', 'TELEPHONE': 'header label - visible with data', });
lyr_DOUNDALSOUF_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});