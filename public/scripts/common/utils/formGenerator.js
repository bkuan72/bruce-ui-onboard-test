// Combine UISchema and JSONSchema to generate a form
// Usage:
// 1. Create a JSONSchema and UISchema
// 2. Create a FormGenerator instance
// 3. Call generateForm() to generate a form
// 4. Call getFormData() to get the form data
// 5. Call setFormData() to set the form data
// 6. Call validate() to validate the form data
// 7. Call reset() to reset the form data
// 8. Call dispose() to dispose the form generator
//
// Example:
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormGenerator = void 0;
    // const schema = {
    //     type: "object",
    //     properties: {
    //         name: {
    //             type: "string",
    //             title: "Name",
    //             default: "A new task"
    //         },
    //         done: {
    //             type: "boolean",
    //             title: "Done?",
    //             default: false
    //         },
    //         priority: {
    //             type: "integer",
    //             title: "Priority",
    //             default: 0
    //         }
    //     }
    // };
    // const uiSchema = {
    //     name: {
    //         "ui:widget": "textarea"
    //     },
    //     done: {
    //         "ui:widget": "checkbox"
    //     },
    //     priority: {
    //         "ui:widget": "updown"
    //     }
    // };
    // const formGenerator = new FormGenerator(schema, uiSchema);
    // const form = formGenerator.generateForm();
    // const formData = formGenerator.getFormData();
    // const isValid = formGenerator.validate();
    // formGenerator.setFormData({ name: "New task", done: true, priority: 1 });
    // formGenerator.reset();
    // formGenerator.dispose();
    //
    var FormGenerator = /** @class */ (function () {
        // private _formValidator: FormValidator;
        // private _formGenerator: Form;
        function FormGenerator(formSchema, formUISchema) {
            this._formSchema = formSchema;
            this._formUISchema = formUISchema;
            // translate formSchema to key-value pairs
            var formSchemaMap = new Map();
            // traverse the nested formSchema array
            var traverseFormSchema = function (formSchema) {
                for (var i = 0; i < formSchema.length; i++) {
                    var item = formSchema[i];
                    if (item.Key) {
                        formSchemaMap.set(item.Key, item);
                    }
                    if (item.Structure) {
                        traverseFormSchema(item.Structure);
                    }
                }
            };
            traverseFormSchema(formSchema);
            console.log(formSchemaMap);
            // combine the formSchemaMap and uiSchema
            var uiSchemaWithType = {};
            for (var key in formUISchema) {
                var item = formUISchema[key];
                var formSchemaItem = formSchemaMap.get(key);
                if (formSchemaItem) {
                    item["type"] = formSchemaItem;
                    item.value = {
                        options: [],
                        value: formSchemaItem.DefaultValue
                    };
                    uiSchemaWithType[key] = item;
                }
            }
            this._formData = [];
            for (var key in uiSchemaWithType) {
                var item = uiSchemaWithType[key];
                this._formData.push(item);
            }
        }
        FormGenerator.prototype.generateForm = function () {
            return this._formData;
        };
        return FormGenerator;
    }());
    exports.FormGenerator = FormGenerator;
});

//# sourceMappingURL=formGenerator.js.map
