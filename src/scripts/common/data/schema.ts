const enum Types {
    TEXTAREA = 'textarea',
    INPUT = 'input',
    SELECT = 'select',
    UISCHEMA = 'uischema',
}
export  interface UISchema {
    [key: string]: any ;
    type: Types;
    key: string;
    options?: Array<string>;
}
export const uiSchema: UISchema[] = [
    {
        "key": "Status",
        "type": Types.INPUT,
        // "options": ['OK', 'NOT OK']
    },
    {
        "key": "Address",
        "type": Types.INPUT,
        "control":true
    },
    {
        "key": "Oberflächenvorbereitung",
        "type": Types.INPUT,
        
    },
    {
        "key": "Bindemittel der Grundierung",
        "type": Types.INPUT
    },
    {
        "key": "Bauteilgruppe",
        "type": Types.INPUT
    },
    {
        "key": "Verbrauc",
        "type": Types.INPUT
    },
    {
        "key": "Beschichtete Flaeche",
        "type": Types.INPUT
    },
    {
        "key": "Art der zu schuetzenden Oberflaeche",
        "type": Types.INPUT
    },
    {
        "key": "district_id",
        "type": Types.INPUT
    },
    // {
    //     "key": "geometry",
    //     "type": Types.UISCHEMA,
    //     "schema": [
    //         {
    //             "key": "Polygon",
    //             "type": Types.UISCHEMA,
    //             "schema": [
    //                 {
    //                     "key": "Facing",
    //                     "type": Types.INPUT
    //                 },
    //                 {
    //                     "key": "Height",
    //                     "type": Types.INPUT
    //                 },
    //                 {
    //                     "key": "LinearRing",
    //                     "type": Types.INPUT
    //                 },
    //             ]
    //         },
    //     ]
    // },
    {
        "key": "boundaries",
        "type": Types.UISCHEMA,
        "schema": [
            {
                "key": "maxLatitude",
                "type": Types.INPUT,
                "control":true
            },
            {
                "key": "maxLongitude",
                "type": Types.INPUT,
                "control":true
            },
            {
                "key": "minLatitude",
                "type": Types.INPUT,
                "control":true
            },
            {
                "key": "minLongitude",
                "type": Types.INPUT,
                "control":true
            }
        ]
    },
    {
        "key": "location",
        "type": Types.UISCHEMA,
        "schema": [
            {
                "key": "latitude",
                "type": Types.INPUT
            },
            {
                "key": "longitude",
                "type": Types.INPUT
            },
            {
                "key": "altitude",
                "type": Types.INPUT
            }
        ]
    },
];