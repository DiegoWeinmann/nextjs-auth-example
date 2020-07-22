import mongoose, { Document } from 'mongoose';

const TasaSchema = new mongoose.Schema({
  tasa: {
    type: String,
    required: [true, 'tasa is required.'],
  },
  plazo: {
    type: Number,
    required: [true, 'plazo is required.'],
  },
  segmento: {
    type: String,
    required: [true, 'segmento is required.'],
  },
});

export interface ITasa extends Document {
  tasa: string;
  plazo: string;
  segmento: string;
}

export const Tasa =
  (mongoose.models.Tasa as mongoose.Model<ITasa>) ||
  mongoose.model<ITasa>('tasa', TasaSchema);
