import mongoose from "mongoose"
const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    price: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    desc: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    photo{
        type
    }
  },
  {
    timestamps: true,
  }
)

const goal = mongoose.model('Goal', goalSchema);

export default goal;