import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  unitPrice: { type: Number, required: true, min: 0 },
  supplier: { type: String }
}, { timestamps: true, versionKey: false });
export default mongoose.model('Product', schema);
