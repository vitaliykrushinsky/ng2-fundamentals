import { Injectable } from '@angular/core'

declare let toastr:any // tell tsc commpile that this object on global scope

@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message, title)
  }
  info(message: string, title?: string) {
    toastr.info(message, title)
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title)
  }
  error(message: string, title?: string) {
    toastr.error(message, title)
  }
}