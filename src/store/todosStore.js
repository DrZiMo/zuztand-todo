import { create } from 'zustand'

export const useTodos = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todoId) =>
    set((state) => ({ todos: state.todos.filter((tod) => tod.id !== todoId) })),
  deleteAllTodos: () => set(() => ({ todos: [] })),
}))
