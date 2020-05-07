import User from '../models/User';

class MailController {
    async index(userId) {
        const user = User.find({ where: { id: userId }})

    }
}

export default new MailController();