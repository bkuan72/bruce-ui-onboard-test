// generate menudata according to 
// the dataSchema,UI schema and data provided

// dataSchema: data schema
// uiSchema: ui schema
// data: data
// return: menu data
import { IEntityTypeAttribute,BruceInfo} from "bruce-maps-widget";
export interface MenuDataSchema {
    type: string;
    defaultValue:any;
    dataSchema:IEntityTypeAttribute;
}
interface UISchema {
    [key: string]: any ;
    type: string;
    key: string;
    options?: Array<string>;
}
interface DataSchema extends IEntityTypeAttribute { 
    parent?: DataSchema;
}
export function generateMenuData(dataSchema: IEntityTypeAttribute, uiSchema: UISchema[], data: BruceInfo): MenuDataSchema[] {
    console.log('recieved dataSchema', dataSchema);
    console.log('recieved uiSchema', uiSchema);
    console.log('recieved data', data);
    // traverse the nested dataSchema object  to key-value pairs
    const dataSchemaMap = new Map<string, DataSchema>();
    const traverseDataSchema = (dataSchema: DataSchema,parent:DataSchema) => {

            if (dataSchema && dataSchema.Key) {
                dataSchemaMap.set(dataSchema.Key, {...dataSchema,parent});
            }
            if (dataSchema &&  dataSchema.Structure) {
                dataSchema.Structure.forEach((child) => {
                    traverseDataSchema(child,dataSchema);
                });
            }
    }
    traverseDataSchema(dataSchema,null);
    // traverse the nested record object to key-value pairs
    const dataMap = new Map<string, any>();
    const traverseData = (data: any) => {
        if (data) {
            Object.keys(data).forEach((key) => {
                if (typeof data[key] === 'object') {
                    traverseData(data[key]);
                } else {
                    dataMap.set(key, data[key]);
                }
            });
        }
    }

    traverseData(data);

    console.log(dataSchemaMap,dataMap,uiSchema)

    // combine the dataSchema/ uiSchema / data to generate menuData
    const  menuData = []
    uiSchema.forEach((ui) => {
        const key = ui.key;
        const type = ui.type;
        const dataSchema = dataSchemaMap.get(key);
        const data = dataMap.get(key);
        let item = {}
        if (dataSchema ) {
            item = {
                ...ui,
                dataSchema: dataSchema,
                defaultValue: data
            }
            menuData.push(item)
        }
        
    });
    console.log('outPutMenuData',menuData);
    return menuData;
}

export function findParentKeys(MenuDataSchema) {
    let parentKeys = [];
    let parent = MenuDataSchema?.dataSchema?.parent;
    
    while (parent) {
        parentKeys.push(parent.Key);
        parent = parent?.dataSchema?.parent;
    }
    parentKeys.push(MenuDataSchema.key)
    return parentKeys;
}