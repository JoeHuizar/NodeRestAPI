import { Request, Response, NextFunction } from 'express';
export declare class Car {
    _model: any;
    constructor(norm: any);
    createCar(model: any): (req: Request<import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    updateCar(model: any): (req: Request<import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    deleteCar(model: any): (req: Request<import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllCars(model: any): (req: Request<import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getCarById(model: any): (req: Request<import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../Users/J0eBu/Desktop/IS183_Labs/RESTAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
