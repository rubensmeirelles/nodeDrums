import { Request, Response } from "express";
import { Drums } from "../models/drums";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.search as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = Drums.getFromName(query);

    res.render('pages/home' , {
        name: createMenuObject(''),
        list,
        query
    })
}