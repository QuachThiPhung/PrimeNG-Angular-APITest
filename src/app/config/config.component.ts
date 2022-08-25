import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

import { Config } from "./config";
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService],
  styleUrls: ['./config.component.css'],
})

export class ConfigComponent implements OnInit {
  error: any;
  configs: Config[] = [];
  config: Config | undefined;
  configName = '';

  constructor(private configService: ConfigService) { }

  // showConfig() {
  //     this.configService.getConfig()
  //     .subscribe((data: Config) => this.config = {
  //         fullName: data.fullName,
  //         address: data.address,
  //         nationality: data.nationality,
  //         identityNumber: data.identityNumber,
  //         phoneNumber: data.phoneNumber,
  //         email: data.email,
  //         gender: data.gender,
  //         dateOfBirth: data.dateOfBirth,
  //     });
  // }

  // showConfig() {
  //   this.configService.getConfig()
  //     .subscribe({
  //       next: (data: Config) => this.config = { ...data }, // success path
  //       error: error => this.error = error, // error path
  //     });
  // }

  ngOnInit(): void {
    // this.configService.getConfig().subscribe((data: Config) => this.config = { ...data });
    // clone the data object, using its known Config shape
    // showConfig() {
      this.configService.getConfig()
        .subscribe((data: Config) => this.config = {
          fullName: data.fullName,
          address: data.address,
          nationality: data.nationality,
          identityNumber: data.identityNumber,
          phoneNumber: data.phoneNumber,
          email: data.email,
          gender: data.gender,
          dateOfBirth: data.dateOfBirth,
        });
    // };

  }
}