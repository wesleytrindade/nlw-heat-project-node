import { Request, Response } from "express";
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
    async handle(request: Request, response: Response) {

        try {
            const { message } = request.body;
            const { user_id } = request;
            const service = new CreateMessageService();
            const result = await service.execute(message, user_id);

            return response.status(201).json(result);
        }

        catch (err) {
            return response.status(400).end(`Ocorreu um erro: ${err.message}`);
        }
    }
}

export { CreateMessageController }