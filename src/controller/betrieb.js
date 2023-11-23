import { betriebsService } from '../services/index.js';

export const getAllBetriebs = async (req, res) => {
    try {
        
        const getAllBetriebs = await betriebsService.betriebsService(req, res)
        if (getAllBetriebs)
        return res.status(200).send(getAllBetriebs);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({ message: error.status ? error.message : 'Internal server error', success: false });
    }
}

