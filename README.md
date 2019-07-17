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
import { EnumrModule } from 'ngx-enumr/enumr.module';

@NgModule({
  imports: [
    EnumrModule
  ]
})
```

## How to use

```html
<enumr [dataset]="dataset" [model]="model.enumval">
</enumr>
```
