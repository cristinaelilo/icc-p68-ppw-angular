import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  readonly firstName = signal('Juan');
  readonly lastName = signal('Pérez');
  readonly age = signal(30);
  readonly skills = signal(['Angular', 'TypeScript', 'HTML']);

  readonly fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  changeData() {
    this.firstName.set('Ana');
    this.lastName.set('González');
    this.age.set(22);
  }

  readonly ageCategory = computed(() => {
    const value = this.age();

    if (value < 18) return 'minor';
    if (value < 30) return 'young';
    if (value < 60) return 'adult';
    return 'senior';
  });
}