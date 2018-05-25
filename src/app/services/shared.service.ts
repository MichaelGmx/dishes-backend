import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class SharedService {
  /**
   * notify
   * @param message message
   * @param type success | info | warning | danger , default: info
   * @param from top | bottom , default: top
   * @param align left | center | right , default: right
   * @param delay millisecond
   */
  notify(message, type: string = 'info', from: string = 'top', align: string = 'right' , delay: string = '5000') {
    $.notify(
      {
        icon: '',
        message: message
      },
      {
        type: type,
        delay: delay,
        placement: {
          from: from,
          align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
      }
    );
  }
}