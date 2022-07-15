import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        WELCOME
      </h1>
      <!-- property binding -->
      <Input [id]="myId" type="text" value="JAVA" >           
      <Input [disabled]="isDisabled" id={{myId}} type="text" value="JAVA" >

      <!-- class binding -->
      <h1 [class]="successclass">java developer</h1>
      <h2 [ngClass]="messageclass">asp.net</h2>

      <!-- style binding       -->
      <h2 [style.color]="false ?  'red' : ' green' ">style binding</h2>

      <!-- NgIf directive     #elseblock this is the reference variable of template -->
      <h2 *ngIf="false; else elseblock">
        java develoeper
      </h2>

      <ng-template #elseblock>
        <h3>
          asp.net develoeper
        </h3>
      </ng-template>


      <div *ngIf="false; else elseBlock">
        Content to render when condition is true.
      </div>
      <ng-template #elseBlock>
        Content to render when condition is false.
      </ng-template>

      <!-- <div *ngIf="false; else elseBlock">
        Content to render when condition is true.
      </div> -->
      <ng-template [ngIf] ="false">
        square brackates
      </ng-template>

      <!-- NgSwitch directives -->
      <div [ngSwitch]="color">
        <div *ngSwitchCase="'green'">green color</div>
        <div *ngSwitchCase="'pink'">pink color</div>
        <div *ngSwitchCase="'blue'">blue color</div>
        <div *ngSwitchDefault="'gray'">gray color</div>
      </div>

      <!-- NgFor directive -->
      <div *ngFor="let color of colors; index  as o">
        <h2>{{o}} {{color}}</h2>
      </div>

      <!-- component interaction -->

      `,
  styles: [
    `
    .text_success{
      color:green;
    }
    
    .text-danger{
      color:red;
    }
    
    .text-special{
      color:gray;
    }
    `]
})
export class AppComponent {
  data:any;
  myId="testId";
  isDisabled=false;

  public name="mansi";
  color="red";
  colors=["red","green","blue","pink","red"];
  isspecial="true";
  public haserror="false";
  successclass="text-special";
  messageclass={
    "text-success":!this.haserror,
    "text-danger":!this.haserror,
    "text-special":this.isspecial
  }
}
