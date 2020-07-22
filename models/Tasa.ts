import mongoose, { Document } from 'mongoose';

const TasaSchema = new mongoose.Schema(
  {
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
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

export interface Tasa {
  tasa: string;
  plazo: string;
  segmento: string;
  createdAt: string;
}

export interface ITasa extends Document, Tasa {}

export const Tasa =
  (mongoose.models.Tasa as mongoose.Model<ITasa>) ||
  mongoose.model<ITasa>('Tasa', TasaSchema);
