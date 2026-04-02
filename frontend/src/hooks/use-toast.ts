"use client";

import * as React from "react";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  variant: "success" | "error" | "warning" | "info"
};

type State = {
  toasts: Toast[];
};

let memoryState: State = { toasts: [] };
const listeners: ((state: State) => void)[] = [];

let counter = 0;

function generateId() {
  counter = (counter + 1) % Number.MAX_SAFE_INTEGER;
  return counter.toString();
}

function dispatch(action: { type: "ADD"; toast: Toast } | { type: "REMOVE"; id: string }) {
  switch (action.type) {
    case "ADD":
      memoryState = {
        toasts: [action.toast, ...memoryState.toasts].slice(0, 5),
      };
      break;
    case "REMOVE":
      memoryState = {
        toasts: memoryState.toasts.filter((t) => t.id !== action.id),
      };
      break;
  }

  listeners.forEach((l) => l(memoryState));
}

export function toast(input: Omit<Toast, "id">) {
  const id = generateId();

  dispatch({
    type: "ADD",
    toast: { ...input, id },
  });

  setTimeout(() => {
    dispatch({ type: "REMOVE", id });
  }, 3000);
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const i = listeners.indexOf(setState);
      if (i > -1) listeners.splice(i, 1);
    };
  }, []);

  return state;
}