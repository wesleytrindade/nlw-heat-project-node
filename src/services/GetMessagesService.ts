import prismaClient from "../prisma";

class GetMessagesService {
    async execute(messageLimit: string = '3', orderbyDesc: boolean = true) {

        const limit = isNaN(parseInt(messageLimit)) ? 3 : parseInt(messageLimit);

        console.log(limit);
        const messages = await prismaClient.message.findFirst({
            take: limit,
            orderBy: {
                created_at: orderbyDesc ? "desc" : "asc"
            },
            include: {
                user: true
            }
        });

        return messages
    }
}

export { GetMessagesService }