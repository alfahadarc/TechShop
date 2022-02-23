import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EditserviceService } from 'src/app/services/admin/editservice.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-editmanufacturer',
  templateUrl: './editmanufacturer.component.html',
  styleUrls: ['./editmanufacturer.component.css'],
})
export class EditmanufacturerComponent implements OnInit {
  manufacturerForm: any;
  fileName = '';
  imageToShow: any;
  ManufacturerId: any;
  constructor(
    private editservice: EditserviceService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.manufacturerForm = this.fb.group({
      manufacturerName: ['', Validators.required],
      motto: [],
      description: [],
      manufacturerID: [],
    });
    if (this.editservice.getManufacturer()) {
      this.populateForm(this.editservice.getManufacturer());
      this.ManufacturerId = this.editservice.getManufacturer().MANUFACTURER_ID;
    }
    this.getImage(this.ManufacturerId);
  }

  populateForm(value: any) {
    this.manufacturerForm.controls.manufacturerID.setValue(
      value.MANUFACTURER_ID
    );
    this.manufacturerForm.controls.manufacturerName.setValue(
      value.MANUFACTURER_NAME
    );
    this.manufacturerForm.controls.motto.setValue(value.MOTTO);
    this.manufacturerForm.controls.description.setValue(value.DESCRIPTION);
  }
  update() {
    //console.log(this.manufacturerForm.value);
    this.editservice.updateManufacturer(this.manufacturerForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Successfull');
      },
      error: (err) => {
        //console.log(err.error.message);
        this.notify.showError(err.error.message, 'Can not updated');
      },
    });
  }
  getImage(id: any) {
    this.editservice.getManufacturerPhoto(id).subscribe({
      next: (success) => {
        this.createImageFromBlob(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    var imageType = /image.png/;
    console.log(file.type);
    if (file && file.type.match(imageType)) {
      this.fileName = file.name;
      this.onUpload(file);
    } else {
      this.notify.showWarning('Only png format is supported', 'Invaild File');
    }
  }
  onUpload(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageToShow = reader.result as string;
    };
    reader.readAsDataURL(file);

    const fd = new FormData();
    fd.append('manufacturerImage', file);
    this.editservice.sendManufacturerImage(fd, this.ManufacturerId).subscribe({
      next: (res) => {
        console.log(res);
        this.notify.showSuccess(res.message, 'Successfull');
      },
      error: (err) => {
        console.log(err);
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }
}
