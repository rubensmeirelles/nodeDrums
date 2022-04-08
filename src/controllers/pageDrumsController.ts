import { Request , Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { Drums } from "../models/drums";

export const home = (req: Request, res: Response) => {
    let list = Drums.getAll();

    res.render('pages/home', {
        menu: createMenuObject('all'),
        list
    })
}

export const acoustic = (req: Request, res: Response) => {
    let list = Drums.getFromType('acoustic');

    res.render('pages/acoustic', {
        menu: createMenuObject('acoustic'),
        list
    })
}

export const eletronic = (req: Request, res: Response) => {
    let list = Drums.getFromType('eletronic');

    res.render('pages/eletronic', {
        menu: createMenuObject('eletronic'),
        list
    })
}

export const pearl = (req: Request, res: Response) => {
    let list = Drums.getFromModel('pearl');

    res.render('pages/acoustic', {
        menu: createMenuObject('pearl'),
        list
    })
}

export const sonor = (req: Request, res: Response) => {
    let list = Drums.getFromModel('sonor');

    res.render('pages/acoustic', {
        menu: createMenuObject('sonor'),
        list
    })
}

export const mapex = (req: Request, res: Response) => {
    let list = Drums.getFromModel('mapex');

    res.render('pages/acoustic', {
        menu: createMenuObject('mapex'),
        list
    })
}

export const alesis = (req: Request, res: Response) => {
    let list = Drums.getFromModel('alesis');

    res.render('pages/eletronic', {
        menu: createMenuObject('alesis'),
        list
    })
}

export const rolland = (req: Request, res: Response) => {
    let list = Drums.getFromModel('rolland');

    res.render('pages/eletronic', {
        menu: createMenuObject('rolland'),
        list
    })
}

export const yamaha = (req: Request, res: Response) => {
    let list = Drums.getFromModel('yamaha');

    res.render('pages/eletronic', {
        menu: createMenuObject('yamaha'),
        list
    })
}