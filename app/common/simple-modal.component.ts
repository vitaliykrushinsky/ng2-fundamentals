
import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    moduleId: module.id,
    selector: 'simple-modal',
    template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{title}}</h4>
            </div>
            <div (click)="closeModal(modalcontainer)" class="modal-body">
                <ng-content></ng-content>
            </div>
        </div>
        </div>
    </div>
    `,
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `]
})
export class SimpleModalComponent {
    private el: HTMLElement;
    constructor(
        @Inject(JQ_TOKEN) private $: any,
    ) {}
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    // access a DOM element
    @ViewChild('modalcontainer') containerEl: ElementRef;

    closeModal(element) {
        // another way access element
        console.log(element);
        // if we want to close modal dialog box when click on body of that
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }    
    }
}

// another way access element by passing as patameter
// <div (click)="closeModal(modalcontainer)" class="modal-body">
//     <ng-content></ng-content>
// </div>