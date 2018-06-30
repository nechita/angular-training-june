import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Bookmark } from '../../models/bookmark.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'bookmark-form',
  templateUrl: './bookmark-form.component.html'
})
export class BookmarkFormComponent implements OnInit {

  editForm: FormGroup;
  toggleDelete: boolean;

  @Input()
  detail: Observable<Bookmark>;

  @Output()
  update: EventEmitter<Bookmark> = new EventEmitter<Bookmark>();

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.editForm = this.fb.group({
      id: '',
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: [''],
      favorite: ['']
    }, { updateOn: 'blur' });
  }

  ngOnInit() {
    this.detail.subscribe(data => this.editForm.setValue({...data}));
  }

  handleSubmit() {
    if (!this.editForm.valid) {
      return;
    }
    this.update.emit(this.editForm.value);
  }

  handleDelete() {
    this.delete.emit(this.route.snapshot.params.id);
  }

}
