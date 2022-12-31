import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() lxCurrentPage: number;
  @Input() lxTotal = 25;

  public totalPages!: number[];
  public maxPage!: number;
  public paginationStatus: 'at-start' | 'in-middle' | 'at-end';

  ngOnInit(): void {
    this.calculate();
  }

  public changePage(page: number): void {
    if (page > this.maxPage || page < 1) return;
    this.lxCurrentPage = page;
    this.calculate();
  }

  private calculate(): void {
    this.totalPages = Array.from({ length: this.lxTotal }, (_, i) => i + 1);
    this.maxPage = this.lxTotal;
    if (this.lxCurrentPage < 5) {
      this.paginationStatus = 'at-start';
    }
    if (this.lxCurrentPage >= 5) {
      this.paginationStatus = 'in-middle';
    }
    if (this.lxCurrentPage >= this.maxPage - 3) {
      this.paginationStatus = 'at-end';
    }
  }
}
