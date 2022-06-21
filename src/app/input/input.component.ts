import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { DrawableDirective } from '../_core/directives/drawable.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @ViewChild(DrawableDirective) canvas;
  @Output() newImage = new EventEmitter<ImageData>();

  sendImageData() {
    this.newImage.emit(this.canvas.getImgData());
  }

}
