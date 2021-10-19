import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
    async handle(request: Request, response: Response) {

        try {
            const { user_id } = request.params;
            const service = new ProfileUserService()
            const result = await service.execute(user_id);

            return response.json(result);
        }

        catch(err){
            return response.status(500).json({error: "Erro ao executar a consulta", errorCode:err.message});
        }

      
    }
}

export { ProfileUserController }