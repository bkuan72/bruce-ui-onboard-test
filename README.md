#### Components and Utils added

#### Website
[demo](https://bruce-ui-onboard-test.vercel.app/)

##### UISchema
`src\scripts\common\data\schema.ts`

Define form schema to generate form.
attribute can be:
- Attribute key 
- Input field type
- Select options
- Listen to input value change or not

```
// usage
export const uiSchema: UISchema[] = [
    {
        "key": "Status",
        "type": Types.SELECT,
        "options": ['OK', 'NOT OK']
    },
    {
        "key": "Address",
        "type": Types.INPUT,
        "control":true
    },
    {
        "key": "Oberflächenvorbereitung",
        "type": Types.INPUT,
    }
];
```


##### ToolTip
`src\scripts\test\test-tooltip`

Left click entity item show the toolTip.

```
// usage
interface TooltipParams  {
    value:KnockoutObservable<IEntityData>;
    uiSchema:UISchema[];
}

<app-test-tooltip params="value:$component.SelectedData(),uiSchema:$component.uiSchema">
</app-test-tooltip>
```
##### Form 
`src\scripts\test\test-form`
Right click entity item or click 'more' on tooltip show the Form.

```
interface ITestFormParams {
    value:KnockoutObservable<IEntityData>;
    uiSchema:UISchema[];
}
<app-test-menu params="value:$component.SelectedData(),uiSchema:$component.uiSchema">
</app-test-menu>
```
##### Navigation
`src\scripts\test\test-navigation`
Record entities user viewed.


```
interface CesiumBruceEntityWithPost extends CesiumBruceEntity {
    position: Cesium.Cartesian2;
    bruceInfo: BruceInfo;
} 
export interface TraceNode
{
    key?: string;
    value?: CesiumBruceEntityWithPost | null;
    next?: TraceNode | null;
    prev?: TraceNode | null;
}



```
##### Pubsub

Passing values ​​between sibling components

`src\scripts\common\utils\pubsub.ts`
```
const pubsub = new Pubsub();
pubsub.subscription("greet", greetAll).subscribe()
pubsub.publish("greet", "Lawrence Eagles", "John Doe", "Jane Doe");
```

#### QA

##### How to generate a form automatically?

UISchema with Form Component demonstrate how to render form,
with provided data as default value and dataSchema as attribute description, form can be generated

![image](https://lucid.app/publicSegments/view/b016299c-8410-4338-aa09-8b797e9b8a1e/image.png)

#### navigation component recursion ?

Use hashMap + doubleLink to optimize the performance,every time visite a entity, the time complexity will be O(1) rather than O(n)
