import { Component, OnInit } from '@angular/core';
import { UploaderService } from 'src/app/services/uploader.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFiles: FileList;

  constructor(private uploadService: UploaderService) { }
  
  ngOnInit() {
  }
  
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
  }
  
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
}
