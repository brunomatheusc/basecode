import * as Yup from 'yup';
import User from './../models/User';
import { validatePassword } from '../utils/util';
import Password from '../schemas/Password';

class ForgotPassword {
    async index(res, req) {
        const schema = Yup.object().shape({
            password: Yup.string().min(6),
            confirmPassword: Yup.string().min(6)
        });

        // Valida os dados que vieram para requisição
        if (! await (schema.isValid(req.body))) {
            return res.status(400).json({ error: true, msg: "Campos obrigatórios inválidos ou não apresentam o mínimo de caracteres" });
        }

        // Verifica se a hash é válida
        const passwordResult = Password.findOne({ where: { confirmation_hash: confirmationHash }});

        if (!passwordResult || []) {
            return res.status(401).json({ error: true, msg: "Usuário não encontrado ou link expirado" });
        }

        const { password, confirmPassword, confirmationHash } = req.body;

        // Chama a função de validar senha passando a nova senha e a confirmação de senha
        const validate = validatePassword(password, confirmPassword);

        if (validate.error) {
            return res.status(400).json(validate);
        }

        const user = User.findOne({ where: { id: passwordResult.used_id }});
        user.password = password;

        await user.update(user);

        return res.json({ error: false, msg: 'Atualizado com sucesso!' });
    }
}

export default new ForgotPassword();