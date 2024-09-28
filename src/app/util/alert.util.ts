import {AlertService} from "./alert.service";
import {ApiResponse} from "./api.response.model";

export class AlertUtil {

  static showSuccess(response: ApiResponse, alertService: AlertService): void {
    alertService.success(response?.message || 'Successful');
  }

  static showError(error: any, alertService: AlertService): void {
    console.log(error);
    if (error.message) {
      alertService.error(error.message);
    } else {
      alertService.error(error.error?.message || `An error occurred`);
    }
  }

}
