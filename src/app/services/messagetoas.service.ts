import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageToastViewService {

constructor( private toastr: ToastrService) {}

showMessageSuccess(title, msg) {
    this.toastr.success(msg, title);
}
showMessagError(title, msg) {
    this.toastr.error(msg, title);
}
showMessageInfo(title, msg) {
    this.toastr.info(msg, title);
}
showMessageWarning(title, msg) {
    this.toastr.warning(msg, title);
}


}

