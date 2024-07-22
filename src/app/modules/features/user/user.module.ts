import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserRoutingModule } from './user-routing.module';
import { UserTableComponent } from './components/user-table/user-table.component';

import { UserDetailsModalComponent } from './components/user-details-modal/user-details-modal.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [UserIndexComponent, UserTableComponent, UserDetailsModalComponent],
  imports: [CommonModule, UserRoutingModule, MatTableModule, MatSortModule],
})
export class UserModule {}
