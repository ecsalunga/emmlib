import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, UploadToken, Codes } from '../../models';

@Component({
  selector: 'emmlib-image',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit, OnDestroy {
  @Input()
  Token: UploadToken;
  private _sub: Subscription;

  constructor(private core: EmmLibCoreService) { }

  SelectImage() {
    this.core.SelectImage();
  }

  ngOnInit() {
    this._sub = this.core.Changed.subscribe(update => {
      if(update.Type == Codes.ImageChanged)
        this.Token.Procces(false);
      else if(update.Type == Codes.FileUploaded)
        this.Token.Update(update.Data.downloadURL);
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
