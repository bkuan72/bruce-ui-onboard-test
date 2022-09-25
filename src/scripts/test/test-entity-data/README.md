# Test Entity Data

## **Background**

In Bruce (code-name for our API), user data can be stored as an "entity" record. 

This entity record is a combination of user entered data and internal data.

We have a UI model called "BruceInfo" which helps with parsing this data.

Alongside the (JSON) data, an entity can have attached information such as pictures, documents, links, comments and so on.

Entities are grouped through "entity types", these types have a schema which describes the expectation of what the data should be within that type.
Think of it like a stencil that is put onto the arbitrary entity data.

<br>

The entity type not only describes how the data should be layed out, but also what each attribute should be.

An attribute can be:

- Marked to be a certain type, for example a "string" or "integer".

- Marked to be "important".
  - This means "show me this data when presenting a dialog, hide the rest unless something is clicked to reveal it".

- Marked to be "indexed".
  - This means this attribute can be used as part of a search criteria.

<br>

## **Objective**

The objective is displaying this very flexible data in some digestible way.

<br>

Minimal expectations:
- Create a knockout component that will contain the dialog's content.

I expect to see something similar to this in the end:
```html
<div id="APP_TEST_ENTITY_DATA_VIEWER">
    <app-your-component params="data: $component.SelectedData()"></app-your-component>
</div>
```
You can compare it to the current state in [app-test-entity-data](./app-test-entity-data.html)

- Entity attribute data must follow the entity type's schema.
- Cannot utilize any libraries other than the already included ones.
  - You **are allowed** to use external tools that assist in UI design and creation.

<br>

## **FAQ / Notes**

<br>

Your component does not need to do everything. You can have a narrow focus and execute it well.

For example entity data is typically editable by users, but that isn't a requirement if your focus is making a very simple to understand read-only component.

You don't need to display any media if you don't want to.

**You can delete** the starting UI entirely if you want to.

Even though responsive multi-platform UI is a modern standard, our existing UI is tailored only to 1080p desktop views. Since this is a test for onboarding onto the existing system, not for a new project, you can assume I will only care about how it looks at a 1080p resolution.

I recommend making multiple components if your single one starts to grow into a creature.

<br>

- "How exactly do I use the entity type to stencil the raw data?"

The "EntityType" model has a "DataSchema" property. This is a tree of attributes that we stencil with.

```typescript
/* EXAMPLE SCHEMA TREE
    [
        {
            "Key": age,
            "Name": "Car's Age",
            "Type": "Double",
            "IsImportant": true
        },
        {
            "Key": "service",
            "name: "Last Service",
            "Type": "Structure",
            "Structure": [
                {
                    "Key": status,
                    "Name": "Status",
                    "Type": "String",
                    "IsImportant": true
                },
                {
                    "Key": lastServiceCost,
                    "Name": "Service Cost",
                    "Type": "Double",
                    "IsImportant": false
                }
            ]
        }
    ]
*/
const type: EntityType = blah;
const tree = type?.DataSchema?.Structure ?? [];

// Entity will almost always have data that the schema does not account for!
const entity: any = { 
    age: 3, 
    service: { 
        status: "OK", 
        lastServiceCost: 3200.11, 
        someOtherData: 3 
    }, 
    otherData: 5 
};

// Example that does not traverse full tree.
for (let i = 0; i < tree.length; i++) {
    const branch = tree[i];
    if (branch.IsImportant) {
        const value = entity[branch.Key];
    }
}
```