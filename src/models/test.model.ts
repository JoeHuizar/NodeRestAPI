import { Request, Response, NextFunction } from 'express';

export class Test {
    _model: any;
    constructor(private norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            test_name: { type: String, maxlength: 24 },
            score: { type: Number }
        }, 'test model', 
        [
            {
                route: '/get-all-tests',
                method: 'GET',
                callback: this.getAllTests,
                requireToken: true,
              },
              {
                route: '/get-test-by-id/:id',
                method: 'GET',
                callback: this.getTestById,
                requireToken: true,
              },
              {
                route: '/create-test',
                method: 'POST',
                callback: this.createTest,
                requireToken: true,
              },
              {
                route: '/update-test/id/:id',
                method: 'PUT',
                callback: this.updateTest,
                requireToken: true,
              },
              {
                route: '/delete-test/id/:id',
                method: 'DELETE',
                callback: this.deleteTest,
                requireToken: true,
              }
        ]];
    }

    createTest(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          let examCtrl = model.controller;
          let resp = await examCtrl.insert(req, null, null);
          res.json({ message: 'Success', resp });
        }
      }
    
      updateTest(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          let examCtrl = model.controller;
          let resp = await examCtrl.update(req, null, null);
          res.json({ message: 'Success', resp });
        }
      }
    
      deleteTest(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          let examCtrl = model.controller;
          let resp = await examCtrl.remove(req, null, null);
          res.json({ message: 'Success', resp });
        }
      }
    
      getAllTests(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          req.body = {
              get: ["*"]
          }
          let examCtrl = model.controller;
          let resp = await examCtrl.get(req, null, null);
          res.json({ message: 'Success', resp });
        }
      }
    
      getTestById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          req.body = {
              get: ["*"],
              where: {
                id: req.params.id
              }
          }
          let examCtrl = model.controller;
          let resp = await examCtrl.get(req, null, null);
          res.json({ message: 'Success', resp });
        }
      }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

    testFunc = (model: any) => {
        return (req: Request, res: Response, next: NextFunction) => {
            let payload = {
                body: {
                    get: ["*"]
                }
            }
            let testModel = model.model.controller;
            console.log('testModel', model.model.controller);
            //let resp = testModel.controller.get(req, null, null);
            // console.log('from test model resp: ', resp);
            res.json({ message: 'works...' });
        }
    }

}