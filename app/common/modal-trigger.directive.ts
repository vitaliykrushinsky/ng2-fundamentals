import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]' // [] indicates that this is attribute
})
export class ModalTriggerComponent implements OnInit {
    private el: HTMLElement;
    // grab value on modal-trigger attribute and asign to modalId
    @Input('modal-trigger') modalId: string;
    constructor(
        @Inject(JQ_TOKEN) private $: any,
        ref: ElementRef
    ) {
        this.el = ref.nativeElement;
     }
    ngOnInit() {
        this.el.addEventListener('click', (eventObject) => {
            this.$(`#${this.modalId}`).modal({});
        })
    }
}