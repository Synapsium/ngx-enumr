import { Enumr } from 'ngx-enumr-dev';
import { Status } from 'demo/models/status';

export const dataset: Array<Enumr> = [
    {
        enum: Status.Validated,
        iconClassName: "far fa-check-circle fa-2x text-success"
    },
    {
        enum: Status.Rejected,
        iconClassName: "far fa-times-circle text-danger"
    },
    {
        enum: Status.Canceled,
        iconClassName: "fas fa-ban"
    },
    {
        enum: Status.Waiting,
        iconClassName: "far fa-stop-circle"
    }
];