import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const title = atom({
  key: "title",
  default: "",
});

export const description = atom({
  key: "description",
  default: "",
});

export const filterTodos = selector({
  key: "filterTodos",
  get: (props) => {
    const todos = props.get(todosAtom);
    const filterTodos = props.get(filterTodos);

    return todos.filter(
      (x) =>
        x.title.includes(filterTodos) || x.description.includes(filterTodos),
    );
  },
});
