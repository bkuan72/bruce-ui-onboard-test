export namespace KoUtils {
    export function GetValue(obj: any | KnockoutObservable<any>): any {
        if (obj && ko.isObservable(obj)) {
            return obj();
        }
        return obj;
    }

    export function GuaranteeObs(obj: any | KnockoutObservable<any>): KnockoutObservable<any> {
        if (obj && ko.isObservable(obj)) {
            return obj;
        }
        return ko.observable(obj);
    }
}