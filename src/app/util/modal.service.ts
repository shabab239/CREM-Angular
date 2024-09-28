import { Injectable, TemplateRef } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  open(template: TemplateRef<any>, options?: any): NgbModalRef {
    this.modalRef = this.modalService.open(template, options);
    return this.modalRef;
  }

  close(): void {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  dismiss(reason?: any): void {
    if (this.modalRef) {
      this.modalRef.dismiss(reason);
    }
  }
}
