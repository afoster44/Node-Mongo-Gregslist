import express, { query } from "express";
import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";

export class HousesController extends BaseController {
    constructor() {
        super("api/houses");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete);
    }
    async edit(req, res, next) {
        try {
            res.send(await housesService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await housesService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            return res.send(await housesService.findById(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            return res.send(await housesService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            return res.status(201).send(await housesService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}