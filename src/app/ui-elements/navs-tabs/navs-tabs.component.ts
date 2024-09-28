import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navs-tabs',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './navs-tabs.component.html',
    styleUrl: './navs-tabs.component.scss'
})
export class NavsTabsComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}