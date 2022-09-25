# Knockout Tips and Tricks

This is a cheat-sheet for developers for KnockoutJS.


- "What is a KnockoutObservable?"

An observable is a wrapped value which allows you to detect change in both HTML and Typescript.

Eg:
```typescript
const myValue = ko.observable("cat");
myValue.subscribe((value) => {
    console.log(value); // This will trigger when the value is changed to "dog".
});
myValue("dog");
```

```html
<!-- The "text" of the div will change when "myValue" changes value. -->
<div data-bind="text: myValue"></div>
```

<br>

- "What is $blade or $component in HTML?"

These are variables that define scope.
If you are working inside a blade, then you can access the blade's data through $blade, likewise for components.

If you have data within your blade called "myValue" then you would access it with `$blade.myValue` in HTML.

If you are working within a for loop in HTML, then the loop elements are accessed with `$data`.

Eg:
```typescript
const myArr = ko.observable([{ name: "a" }, { name: "b" }]);
```

```html
<!-- ko foreach: $component.myArr -->
    <div data-bind="text: $data.name"></div>
<!-- /ko -->
```

If you want the index of the current looped item then use `$index`. It is an observable itself so use `$index()` to get its value.

Eg:
```html
<!-- ko foreach: $component.myArr -->
    <div data-bind="text: $data.name, attr: { 'id': $data.name + '_' + $index() }"></div>
<!-- /ko -->
```

<br>

- "How do I assign or get the observable value?"

```typescript
const myValue = ko.observable("cat");
const value = myValue(); // Passing nothing gets the value.
myValue("dog"); // Passing something sets the value.
```

<br>

- "How do I update my HTML element's classes through knockout?"

```typescript
const myValue = ko.observable("cat");
```

```html
<!-- "css" is used to apply classes conditionally. -->
<div data-bind="
    css: { 
        'my-class': myValue() == 'cat', 
        'my-other-class': myValue() == 'dog' 
    }">
</div>
```

<br>

- "How do I update my HTML element's attributes through knockout?"

```typescript
const myValue = ko.observable("cat");
```

```html
<!-- "attr" is used to apply attributes conditionally or directly. -->
<div data-bind="
    attr: { 
        'my-attr': myValue() == 'cat', 
        'my-other-attr': myValue() == 'dog' 
    }">
</div>
```

<br>

- "How do I update my HTML element's style through knockout?"

```typescript
const myValue = ko.observable("red");
```

```html
<!-- "style" is used to apply style conditionally or directly. -->
<div data-bind="
    style: { 
        'color': myValue()
    }">
</div>
```

<br>

- "Can I use non-observable values in HTML?"

Yes. I encourage you to avoid observables when you don't expect the value to change.

Eg:
```typescript
const myValue = "cat";
```

```html
<div data-bind="text: myValue"></div>
```

<br>

- "How can I detect click-events on things?"

Assuming this is within a component (refer to $blade and $component from earlier for how to do the other).

Eg:
```typescript
public Items = [{ id: "a", id: "b" }];
public ClickItem(item) {
    console.log(item.id);
}
```

```html
<!-- foreach: $component.Items -->
    <div data-bind="click: $component.ClickItem.bind($component, $data)"></div>
<!-- /ko -->
```

It goes "where the function is"`.`"what the function is"`.bind(`"what instance to bind it to"`,` "what data to pass"`);`

If you miss $component within the .bind part. You are binding it to a new instance of your component, it'll mean your values will be undefined!

<br>

- "Why do you sometimes access the value with brackets and without in HTML?"


Any comparison performed in HTML you have to be explicit on what you are comparing.

You can either compare the observable itself, or its value.


For example:
```html
<div data-bind="attr: { 'my-attr': $component.myObs == null }"></div>
```

Is very different to:
```html
<div data-bind="attr: { 'my-attr': $component.myObs() == null }"></div>
```

In the first one we are checking if the observable itself is null, in the second we are assuming the observable exists and instead checking if the value it holds is null.