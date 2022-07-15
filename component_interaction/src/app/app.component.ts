import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    entername = "Mansi";
    parentData=""

    TransferData()
    {
        this.parentData = this.entername;
    }
}
