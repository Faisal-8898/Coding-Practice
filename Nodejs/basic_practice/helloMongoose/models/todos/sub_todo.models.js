import mongoos from "mongoos";

const sub_todoSchema = new mongoos.Schema(
  {
    titile: {
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
  },
  { timestamps: true }
);
export const Sub_todo = mongoos.model("Sub_todo", sub_todoSchema);
