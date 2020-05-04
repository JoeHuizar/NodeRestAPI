import {Request, Response, NextFunction } from 'express';

export class Tank {
  _model: any;
  constructor(norm:any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      tank_name: { type: String, maxlength: 24 }
    }, 'tank model', 
    [
      {
        route: '/get-all-tanks',
        method: 'GET',
        callback: this.getAllTanks,
        requireToken: true,
      },
      {
        route: '/get-tank-by-id/:id',
        method: 'GET',
        callback: this.getTankById,
        requireToken: true,
      },
      {
        route: '/create-tank',
        method: 'POST',
        callback: this.createTank,
        requireToken: true,
      },
      {
        route: '/update-tank/id/:id',
        method: 'PUT',
        callback: this.updateTank,
        requireToken: true,
      },
      {
        route: '/delete-tank/id/:id',
        method: 'DELETE',
        callback: this.deleteTank,
        requireToken: true,
      }
    ]
  ];
  }

  createTank(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let examCtrl = model.controller;
      let resp = await examCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  updateTank(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let examCtrl = model.controller;
      let resp = await examCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  deleteTank(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let examCtrl = model.controller;
      let resp = await examCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getAllTanks(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"]
      }
      let examCtrl = model.controller;
      let resp = await examCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getTankById(model: any) {
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

}