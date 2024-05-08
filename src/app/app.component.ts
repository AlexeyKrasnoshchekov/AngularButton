import { Component,ElementRef, ViewChild, } from '@angular/core';
import { library, findIconDefinition, icon, Icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [NgIf],
  // standalone: true
})
export class AppComponent {
  public title:string = 'LonelyButton';
  public iconLoaded: boolean = false;
  public icon:any;
  coffeeIcon = faCoffee;
  loaderIcon = faSpinner;

  public randomIcon(): void {
    const iconNames = Object.values(fas).map(elem => elem.iconName);
    const startIndex = 0;
    const randomIconIndex = Math.floor(Math.random() * (iconNames.length - startIndex + 1)) + startIndex;
    const randomIconName = iconNames[randomIconIndex];


    const timerId = setTimeout(() => {
      this.icon = findIconDefinition({ prefix: 'fas', iconName: randomIconName });
      this.iconLoaded = true;
    }, 3000);
	}
}
