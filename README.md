# @ngtools/webpack AOT compiling error

When building my app using the `@ngtools/webpack` AOT compiler, I am met with the following errors:

```
[Webpack: Error] aot-error/packages/admin/$$_gendir/src/ts/app/app.component.ngfactory.ts (10,21): Cannot find module '../../../../../core/src/greeting/greeting.component.ngfactory'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/greeting/greeting.component.ngfactory.ts (10,21): Cannot find module './greeting.component'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (10,21): Cannot find module './core.module'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (11,21): Cannot find module '../../admin/$$_gendir/node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (12,21): Cannot find module '../../admin/$$_gendir/node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (13,21): Cannot find module '../../admin/$$_gendir/node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (14,21): Cannot find module '../../admin/$$_gendir/node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (15,21): Cannot find module '../../admin/$$_gendir/node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (16,21): Cannot find module '../../admin/$$_gendir/node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory'.
[Webpack: Error] aot-error/packages/admin/$$_gendir/core/src/core.module.ngfactory.ts (17,21): Cannot find module '../../admin/$$_gendir/node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory'.
[Webpack: Error] Module not found: Error: Can't resolve '../../../../../core/src/greeting/greeting.component.ngfactory' in 'aot-error/packages/admin/$$_gendir/src/ts/app'
```

But when using the JIT compiler, the app builds absolutely fine.

## Build commands

`npm run admin:start` to build using the JIT compiler

`npm run admin:start-production` to build using the AOT compiler
