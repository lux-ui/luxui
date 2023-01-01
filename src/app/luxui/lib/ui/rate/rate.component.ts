import {
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent {
  @Input() lxCount: number = 5;
  @Input() stars: number = 0;

  @Output() emitValue = new EventEmitter<number>();

  public starArray: number[] = [];
  public value: number;
  private status = false;

  constructor(private _renderer: Renderer2) {
    this.updateStarArray();
  }

  changeRate(stars: HTMLElement, rate: number): void {
    this.value = rate;
    this.emitValue.emit(this.value + 1);
    const starsArr = Array.from(stars.children);
    for (const star of starsArr.slice(0, rate + 1)) {
      this._renderer.setStyle(star.children[0], 'fill', '#ffcc00');
    }

    this.status = false;
  }

  public fillStars(stars: HTMLElement, i: number): void {
    this.status = true;
    const starsArr = Array.from(stars.children);
    for (const star of starsArr.slice(0, i + 1)) {
      this._renderer.setStyle(star.children[0], 'fill', '#ffcc00');
    }
    for (const star of starsArr.slice(i + 1)) {
      this._renderer.setStyle(star.children[0], 'fill', '#ccc');
    }
  }

  public emptyStar(stars: HTMLElement, i: number): void {
    const starsArr = Array.from(stars.children);
    for (const star of starsArr) {
      this._renderer.setStyle(star.children[0], 'fill', '#ccc');
    }
    if (this.value && !this.status) {
      this.fillStars(stars, this.value);
    }
  }

  public changeStatus(stars: HTMLElement): void {
    this.status = false;
    this.fillStars(stars, this.value);
  }

  private updateStarArray(): void {
    this.starArray = Array(this.lxCount)
      .fill(0)
      .map((_, i) => i);
  }
}
