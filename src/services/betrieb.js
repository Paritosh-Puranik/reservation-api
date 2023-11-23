import { Reservations } from "../models/index.js"
export const betriebsService = async (req, res) => {
    const getAllBetriebs = await Reservations.findAll();
    // console.log('All users:', getAllBetriebs.map(user => user.toJSON()));
    res.status(200).send(getAllBetriebs)
}
