import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'div#main',
  imports: [MainComponent, AsideComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})

export class MainlayoutComponent {

}
