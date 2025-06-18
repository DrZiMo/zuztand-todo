import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useTodos = create(
  devtools(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (todoId) =>
        set((state) => ({
          todos: state.todos.filter((tod) => tod.id !== todoId),
        })),
      editTodo: (updatedTodo) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          ),
        })),
      deleteAllTodos: () => set(() => ({ todos: [] })),
    }),
    { name: 'TodoStore' }
  )
)

export const useSelectedTodo = create(
  devtools((set, get) => ({
    selectedTodo: {},
    changeSelectedTodo: (id) =>
      set({
        selectedTodo: get().todo.find((todo) => todo.id === id),
      }),
  })),
  { name: 'SelectedTodo' }
)
