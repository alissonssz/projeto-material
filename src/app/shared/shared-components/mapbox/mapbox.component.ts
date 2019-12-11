import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import L from 'leaflet';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapboxComponent implements OnInit, AfterViewInit {
  
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  @Input() lat: number;
  @Input() lng: number;
  marker: mapboxgl.Marker = new mapboxgl.Marker();

  constructor() { }
  
  ngOnInit(): void {
    // this.buildMap();
  }
  ngAfterViewInit(): void {
    this.buildMap();
    this.adicionarMarca();
  }
  


  private buildMap() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    
  }

  private adicionarMarca() {
    this.marker = new mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
  }
}
