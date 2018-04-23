import { MatSnackBar } from '@angular/material';
import { DelayCall } from '../decorators';

export class UtilityHelper {

    constructor(private _snackBar: MatSnackBar) { }

    public ToTop() {
        window.scroll(0, 0);
    }

    public Display(message: string, action: string = "Done", duration: number = 5000) {
        this._snackBar.open(message, action, { duration: duration });
    }
}