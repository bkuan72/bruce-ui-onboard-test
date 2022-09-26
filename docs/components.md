# Knockout Components

Knockout components come in 3 files; ".ts", ".html" and ".less".

<br>

If you are unfamiliar with .less, you can type pure css inside it and it'll work fine.

The main advantage of using .less is that it can make handling scope less tedious.


Take this CSS for example:
```css
.myClass {
    background-color: red;
}

.myClass > .myOtherClass >.myOtherOtherClass {
    background-color: green;
}
```

Using .less we can change it into:
```less
.myClass {
    background-color: red;

    >.myOtherClass {
        >.myOtherOtherClass {
            background-color: green;
        }
    }
}
```

<br>

To get started with making your own component, copy-paste the "_template" folder you can find inside "scripts".

Here is what you need to do once you've made your copy:

- Change your folder and file names to be your desired component.
  - Eg: Rename "app-template" into "app-my-component".
- Update the imports at the top of "app-template.ts".
  - If you don't update the html/css imports, your page may not load.
  - Notice you are importing .css instead of .less, this is because it targets the built files.
- Update the "name" field in the decorator.
  - This is the HTML tag you will use, eg: `<app-my-component></app-my-component>`.
- Update the component class, and the component params interface names.
- Import your component inside `global-imports.ts`.
  - We unfortunately don't lazy load these.

If something goes wrong, I recommend looking at how other components are working!

<br>

- **"How do I pass data between components?"**

Let's take the scenario where you have two components.

Component A:

```typescript
@Component({ name: "app-component-a", template: html })
public class ComponentA {
    public MyValue: KnockoutObersvable<number> = ko.observable(5);
    public MyOtherValue: string = "hello";
}
```

Component B:

```typescript
interface IComponentBParams {
    value: KnockoutObservable<number>;
    otherValue: string;
}

@Component({ name: "app-component-b", template: html })
public class ComponentB {
    public constructor(params: IComponentBParams) {
        console.log(params);
    }
}
```

To pass values from component-a to component-b you'd do this (from within component-a HTML):

```html
<app-component-b 
    params="
        value: $component.MyValue, 
        otherValue: $component.MyOtherValue">
</app-component-b>
```

- **"Observables are giving me trouble when passing to components!"**

Normally you'd get a value from the observable with the `()` brackets,

eg:
```typescript
const myValue = ko.observable(5);
console.log(myValue); // This will log the observable object.
console.log(myValue()); // This will log 5.
myValue(6); // This will change the observable value to 6.
```

But if you are trying to pass just the value and not the observable to a component, I recommend allowing both kinds of values within the component instead.

Eg:
```typescript
interface IComponentBParams {
    value: KnockoutObservable<number> | number;
}

@Component({ name: "app-component-b", template: html })
public class ComponentB {
    public constructor(params: IComponentBParams) {
        // If it's an observable, we want to detect the change and reload the component.
        // Or do something else, up to your and your component's design!
        if (params.value != null && ko.isObservable(params.value)) {
            this.addDisposable(params.value.subscribe((value) => {
                this.init(value);
            }));
        }
        // We want to guarantee a non-observable value so we use the 'GetValue' util.
        this.init(KoUtils.GetValue(params.value));
    }

    private init(value: number) {
        console.log(value);
    }
}
```