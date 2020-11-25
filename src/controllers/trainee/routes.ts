import { Router } from "express";
import TraineeController from "./Controller";
import validationHandler from "../../libs/validationHandler";
import Validation from "./Validation";
import authMoiddleWare from "../../libs/routes/authMoiddleWare";
import {permissions} from "../../libs/constants";


const traineeRouter=Router();
traineeRouter
 /**
 * @swagger
 *
 * /api/trainee/getall:
 *   get:
 *     description: List of all the trainees
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: skip
 *         description: enter how many trainees you want to skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: enter limit to see trainee
 *         in: query
 *         required: false
 *         type: number
 *       - name: sortBy
 *         description: enter name or email to sort
 *         in: query
 *         required: false
 *         type: string
 *       - name: searchBy
 *         description: search trainee by name or email
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Trainee List Example
 *         schema:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: 'successfully fetched Trainee'
 *                  TotalCount:
 *                      example: 10
 *                  TraineeCount:
 *                      example: 2
 */
.get("/getall",authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.get),TraineeController.get)


/**
 * @swagger
 *
 * /api/trainee/create:
 *   post:
 *     description: create new trainee details
 *     security:
 *       - Bearer: []
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: Details
 *         description: Enter details to create trainee
 *         in: body
 *         required: true
 *         type: object
 *     responses:
 *       200:
 *         description: Trainee create example
 *         schema:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: 'successfully created Trainee'
 */
.post("/create",authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.create),TraineeController.create)


 /**
 * @swagger
 *
 * /api/trainee/update:
 *   put:
 *     description: update existing details
 *     security:
 *       - Bearer: []
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: Details
 *         description: Enter details to update
 *         in: body
 *         required: true
 *         type: object
 *     responses:
 *       200:
 *         description: Trainee create example
 *         schema:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: 'successfully created Trainee'
 */
.put("/update",authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.update),TraineeController.update)


 /**
 * @swagger
 *
 * /api/trainee/delete:
 *   delete:
 *     description: delete existing details
 *     security:
 *       - Bearer: []
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: Id
 *         description: Enter id to delete details
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: details deleted example
 *         schema:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: 'successfully deleted details'
 */
.delete("/delete",authMoiddleWare(permissions.getUser,"read"),validationHandler(Validation.delete),TraineeController.delete);

export default traineeRouter;
