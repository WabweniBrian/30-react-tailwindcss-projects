import { createSlice } from "@reduxjs/toolkit";

const todosFromLocalStorage =
  JSON.parse(localStorage.getItem("redux-todos-frontendmentor")) || [];

const initialState = {
  todos: todosFromLocalStorage,
  filteredTodos: [],
  alert: {
    isAlertOpen: false,
    alertContent: "",
    alertClass: "",
    icon: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addUpdateTodo: (state, action) => {
      if (!action.payload.todos.todoText) {
        state.filteredTodos = state.todos;
        state.alert = {
          ...state.alert,
          isAlertOpen: true,
          alertContent: "Please enter a todo",
          alertClass: "danger",
          icon: "feather-x-circle",
        };
      } else if (action.payload.todos.todoText && action.payload.isEditing) {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.editID) {
            return { ...todo, todoText: action.payload.todos.todoText };
          }
          return todo;
        });
        state.alert = {
          ...state.alert,
          isAlertOpen: true,
          alertContent: "Todo Updated successfully",
          alertClass: "success",
          icon: "feather-check-circle",
        };
      } else {
        state.todos = [...state.todos, action.payload.todos];
        state.alert = {
          ...state.alert,
          isAlertOpen: true,
          alertContent: "Todo added successfully",
          alertClass: "success",
          icon: "feather-check-circle",
        };
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.alert = {
        ...state.alert,
        isAlertOpen: true,
        alertContent: "Todo removed successfully",
        alertClass: "danger",
        icon: "feather-x-circle",
      };
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },

    markTodoASComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    },
    filterToggleTodos: (state, action) => {
      switch (action.payload) {
        case "completed":
          state.filteredTodos = state.todos.filter(
            (todoItem) => todoItem.isCompleted
          );
          break;
        case "active":
          state.filteredTodos = state.todos.filter(
            (todoItem) => !todoItem.isCompleted
          );
          break;
        default:
          state.filteredTodos = state.todos;
      }
    },
    showAlert: (state) => {
      state.alert = { ...state.alert, isAlertOpen: true };
    },
    removeAlert: (state) => {
      state.alert = { ...state.alert, isAlertOpen: false };
    },
  },
});

export default todoSlice.reducer;

export const {
  addUpdateTodo,
  removeTodo,
  clearCompletedTodos,
  markTodoASComplete,
  filterToggleTodos,
  showAlert,
  removeAlert,
} = todoSlice.actions;
