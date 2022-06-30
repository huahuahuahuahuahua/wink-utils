interface IisCycleObject {
    obj: object;
    parent?: Array<object>;
}
export declare function isCycleObject({ obj, parent }: IisCycleObject): boolean;
export default isCycleObject;
