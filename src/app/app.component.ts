import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv-ehn';
  nombre = 'Eduardo Heras Nuño';
  ciudad = 'Málaga';
  telefono = '675628680';
  email = 'eduardoherasnuno@gmail.com';
  github = 'https://github.com/EduardoHerasGit/proyectos-personales';
  ingles = 'alto';
  fecha = new Date();
  tecnologias = [
  ' HTML',
  ' CSS',
  ' JavaScript',
  ' TypeScript',
  ' Angular',
  ' Java',
  ' Spring Boot',
  ' SQL Server',
  ' Android Studio',
  ' GitHub',
];


}
