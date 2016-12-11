# Warehouse

## Description
In the warehouse module you can manage your own warehouses, theirs products. Also you can see others' warehouses.

## Work flow
1. Select an issue what you want to solve
1. Assign it to yourself
1. Solve it
1. Commit it with `#issue_id description` commit message (Example: #12 change title of website)
1. Push it
1. Say it to your instructor

## Project structure
```
app
├── pages
|   ├── page1
|   |   ├── page1.controller.js
|   |   └── page1.html
|   ...
├── script
|   ├── directives
|   |   ├── directive1
|   |   |   ├── directive1.directive.js
|   |   |   └── directive1.html
|   |   ...
|   ├── services
|   |   ├── api.service.js
|   |   ...
|   ├── warehouse.module.js
|   └── warehouse.route.js
├── scss
|   ├── scss1.scss
|   ...
└── index.html
```

## Routing
`/` - login page
`/registration` - registration page
`/warehouse` - warehouse/main page

## Styleguide / Naming conventions
In this project we will follow johnpapa's styleguide:
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

### HTML ids, classes
- use camelCase for ids (Example: headerSearchButton)
- use kebab-case for classes (Example: sortable-table-col)

### Directives
Create new directory for directives. Example file hierarchy for `fooBar` directive:
```
foo-bar
├── foo-bar.directive.js
└── foo-bar.html
```

### Services
Add your services to `services` directory with `example.service.js` name.
