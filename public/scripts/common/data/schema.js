define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uiSchema = void 0;
    exports.uiSchema = [
        {
            "key": "Status",
            "type": "input" /* INPUT */,
        },
        {
            "key": "Address",
            "type": "input" /* INPUT */,
            "control": true
        },
        {
            "key": "Oberflächenvorbereitung",
            "type": "input" /* INPUT */,
        },
        {
            "key": "Bindemittel der Grundierung",
            "type": "input" /* INPUT */
        },
        {
            "key": "Bauteilgruppe",
            "type": "input" /* INPUT */
        },
        {
            "key": "Verbrauc",
            "type": "input" /* INPUT */
        },
        {
            "key": "Beschichtete Flaeche",
            "type": "input" /* INPUT */
        },
        {
            "key": "Art der zu schuetzenden Oberflaeche",
            "type": "input" /* INPUT */
        },
        {
            "key": "district_id",
            "type": "input" /* INPUT */
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
            "type": "uischema" /* UISCHEMA */,
            "schema": [
                {
                    "key": "maxLatitude",
                    "type": "input" /* INPUT */,
                    "control": true
                },
                {
                    "key": "maxLongitude",
                    "type": "input" /* INPUT */,
                    "control": true
                },
                {
                    "key": "minLatitude",
                    "type": "input" /* INPUT */,
                    "control": true
                },
                {
                    "key": "minLongitude",
                    "type": "input" /* INPUT */,
                    "control": true
                }
            ]
        },
        {
            "key": "location",
            "type": "uischema" /* UISCHEMA */,
            "schema": [
                {
                    "key": "latitude",
                    "type": "input" /* INPUT */
                },
                {
                    "key": "longitude",
                    "type": "input" /* INPUT */
                },
                {
                    "key": "altitude",
                    "type": "input" /* INPUT */
                }
            ]
        },
    ];
});

//# sourceMappingURL=schema.js.map
