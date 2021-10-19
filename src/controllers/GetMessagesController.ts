import { Request, Response } from "express";
import { GetMessagesService } from "../services/GetMessagesService";


interface GetMessageRequest {
    message_limit?: string,
    orderByDesc?: boolean
}
class GetMessagesController {
    async handle(request: Request, response: Response) {

        const { message_limit, orderByDesc } = request.params as GetMessageRequest;
        const service = new GetMessagesService();
        const result = await service.execute(message_limit, orderByDesc);

        return response.json(result);
    }
}

export { GetMessagesController }