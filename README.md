[![npm version](https://badge.fury.io/js/metronic-badge-name-initials.svg)](https://badge.fury.io/js/metronic-badge-name-initials)

# metronic-badge-name-initials

A node.js module that return the name's initials

## Installation 
```sh
npm install metronic-badge-name-initials --save
```
## Usage

#### SharedComponent

```typescript
import { BadgeNameInitialsModule } from "metronic-badge-name-initials";

  imports: [
     BadgeNameInitialsModule
  ],
  exports: [
    BadgeNameInitialsModule
  ]
 ```
 
#### ExampleComponent
```typescript
import { BadgeNameInitialsComponent } from 'metronic-badge-name-initials';

e.g:
 
 In ng2-smart-table settings
 
  columns: {
      example: {
        title: 'example',
        type: 'custom',
        renderComponent: BadgeNameInitialsComponent
      },
 

```

## Output 

In the table the name's initials would look like..

![alt text](https://user-images.githubusercontent.com/35075988/34606806-ebed0ad0-f1f7-11e7-8613-86220f1d6414.png)

When you hover the cursor on the name's initials in the table it would look like..

![alt text](https://user-images.githubusercontent.com/35075988/34606863-21e828e0-f1f8-11e7-8ddd-1abae0b19e38.png)
