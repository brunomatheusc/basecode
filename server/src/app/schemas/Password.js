import mongoose from 'mongoose';

const PasswordSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    confirmation_hash: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export default mongoose.model('Password', PasswordSchema);