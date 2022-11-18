import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import 'leaflet.heat/dist/leaflet-heat.js';
import { addressPoints } from '../../assets/points';

@Component({
  selector: 'app-ex-map',
  templateUrl: './ex-map.component.html',
  styleUrls: ['./ex-map.component.css']
})
export class ExMapComponent implements OnInit {

  private map: any;

  private mapInit(){
    this.map = L.map('map').setView([-7.233349083590594, -35.8979591117293], 14);

    var openstreetmap = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 20,
      minZoom: 12
    })
    
    // Tile type: openstreetmap Hot
    var openstreetmapHot = L.tileLayer(
      'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 20,
      minZoom: 12
    })
    
    var openstreetmapOsm = L.tileLayer(
      'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 20,
      minZoom: 12
    })

    var allOptions = {
      "Open streetmap": openstreetmap,
      "Open streetmap: Hot": openstreetmapHot,
      "Open streetmap: Osm": openstreetmapOsm
    };

    L.control.layers(allOptions).addTo(this.map);
    // Initialize with openstreetmap
    openstreetmapHot.addTo(this.map);

    var heat = (L as any).heatLayer(addressPoints.map((p) => [p[0], p[1], 0.85]), {radius: 10, 
      gradient: {0.2: 'blue', 0.3: 'lime', 0.4: 'yellow', 0.5:"red"},
      minOpacity: 0.8,
      maxZoom: 10}).addTo(this.map);

  }

  ngAfterViewInit(): void {
    this.mapInit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
