import mongoose, { Schema } from 'mongoose';

const PageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: Object,
    },
  },
  {
    timestamps: true, // Use 'timestamps' instead of 'timestamp'
  },
);

const Page = mongoose.model('Page', PageSchema); // Create a model using the schema
export default Page;
