import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
          <div className="flex items-center">
            <Checkbox
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </label>
          </div>
          <Button variant="destructive" size="sm" onClick={() => deleteTodo(todo.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;