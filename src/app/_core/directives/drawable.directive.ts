import {
  Directive,
  HostListener,
  ElementRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDrawable]'
})
export class DrawableDirective implements OnInit {
  pos = { x: 0, y: 0 };
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.canvas = this.el.nativeElement as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e) {
    this.setCursorPosition(e);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e) {
    this.setCursorPosition(e);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e) {

    if (e.buttons !== 1) {
      return;
    }

    this.ctx.beginPath();

    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#fff';

    this.ctx.moveTo(this.pos.x, this.pos.y);
    this.setCursorPosition(e);
    this.ctx.lineTo(this.pos.x, this.pos.y);

    this.ctx.stroke();
  }

  @HostListener('resize', ['$event'])
  onResize() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  setCursorPosition(e) {
    this.pos.x = e.offsetX;
    this.pos.y = e.offsetY;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  getImgData(): ImageData {
    return this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

}
