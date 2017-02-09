import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'upvote',
    styleUrls: ['upvote.component.css'],
    template:`
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        <div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `
})
export class UpvoteComponent {
    @Input() count: number; 
    // input setters
    @Input() set voted(value) { 
        this.iconColor = value ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;
    constructor() { }

    

    onClick() {
        this.vote.emit({});
    }

}