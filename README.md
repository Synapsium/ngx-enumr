<p align="center">
  <a href="https://synapsium.com">
    <h1 align="center">ngx-enumr</h1>
  </a>
</p>

<p align="center">
Ngx-enumr is a enum visualizer converting your enum into icon or image.
</p>

## Setup

### Installation

Install `ngx-enumr` library from `npm`

```bash
npm install @synapsium/ngx-enumr --save
```
### Module usage

Add `EnumrModule` to module

```javascript
import { EnumrModule } from '@synapsium/ngx-enumr';

@NgModule({
  imports: [
    EnumrModule
  ]
})
```

## How to use

Initialize your dataset. Here is a sample to bind enum to icon :

```javascript
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
```

```html
<enumr [dataset]="dataset" [model]="model.enumval">
</enumr>
```
