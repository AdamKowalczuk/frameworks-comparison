import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authService';
import { UserService } from '../../../services/userService';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent {
  updateProfileForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    bio: new FormControl(''),
  });
  auth$: Observable<any>;
  user: any = null;
  file: File | null = null;
  fileURL: string | null = null;
  loading = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private store: Store<{ auth: any }>
  ) {
    // this.user = this.authService.getCurrentUser();
    this.auth$ = this.store.pipe(select('auth'));
    this.auth$.subscribe((auth) => {
      this.user = auth.user;
    });
    this.updateProfileForm.value.userName = this.user.userName;
    this.updateProfileForm.value.bio = this.user.bio;
    this.fileURL = this.user.imageUrl;
  }

  handleUpdateUser(): void {
    // const userData = {
    //   userName: this.userName,
    //   bio: this.bio,
    //   file: this.file,
    // };
    // this.loading = true;
    // this.userService.updateUser(this.user.userId, userData).subscribe(
    //   () => {
    //     this.loading = false;
    //     this.router.navigate(['/profile', this.user.userId]);
    //   },
    //   () => {
    //     this.loading = false;
    //   }
    // );
  }

  handleFileChange(event: any): void {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      this.file = selectedFile;
      this.fileURL = URL.createObjectURL(selectedFile);
    }
  }

  handleCancel(): void {
    this.router.navigate(['/profile', this.user.userId]);
  }

  handleButtonClick(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }
}
