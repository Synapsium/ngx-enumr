<p align="center">
  <a href="https://synapsium.com">
    <h1 align="center">ngx-enumr</h1>
  </a>
</p>

<p align="center">
Ngx-enumr is a enum visualizer converting your enum into icon or image or svg tag.
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
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6FA8BF" d="M19.89,9.55A1,1,0,0,0,19,9H14V3a1,1,0,0,0-.69-1,1,1,0,0,0-1.12.36l-8,11a1,1,0,0,0-.08,1A1,1,0,0,0,5,15h5v6a1,1,0,0,0,.69.95A1.12,1.12,0,0,0,11,22a1,1,0,0,0,.81-.41l8-11A1,1,0,0,0,19.89,9.55ZM12,17.92V14a1,1,0,0,0-1-1H7l5-6.92V10a1,1,0,0,0,1,1h4Z"/></svg>'
    }
];
```

```html
<enumr [dataset]="dataset" [model]="model.enumval">
</enumr>
```

## Edit style

```scss
enumr {
    width: 25px;
}
```
