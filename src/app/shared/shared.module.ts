import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideEnvironmentNgxMask, NgxMaskDirective } from 'ngx-mask';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';
@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockerDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockerDirective
  ],
  providers: [provideEnvironmentNgxMask()],
})
export class SharedModule { }
