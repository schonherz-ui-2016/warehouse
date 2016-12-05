# Warehouse

## Description
In the warehouse module you can manage your own warehouses, theirs products. Also you can see others' warehouses.

## Work flow
1. Select an issue what you want to solve
1. Assign it to yourself
1. Solve it
1. Commit it with `[issue_id] description` commit message (Example: [12] change title of website)
1. Push it
1. Say it to your instructor

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
