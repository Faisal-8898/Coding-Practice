import mongoos from "mongoos";

const todoSchema = new mongoos.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoos.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoos.Schema.Types.ObjectId,
        ref: "Sub_todo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoos.model("Todo", todoSchema);
