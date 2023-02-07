import React from 'react';
import TodoApp from '../Todo';
import { render, fireEvent } from '@testing-library/react';

describe('TodoApp component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText('Enter new task');
    const todoHeading = getByText('TODO');
    const doneHeading = getByText('DONE');

    expect(input).toBeInTheDocument();
    expect(todoHeading).toBeInTheDocument();
    expect(doneHeading).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText('Enter new task');  

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(form);

    const newTodo = getByText('Test Todo');

    expect(newTodo).toBeInTheDocument();
  });

  it('marks a todo as completed', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText('Enter new task');
  
    const todoHeading = getByText('TODO');
    const doneHeading = getByText('DONE');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(form);

    const newTodo = getByText('Test Todo');
    const checkbox = newTodo.previousSibling;

    fireEvent.click(checkbox);

    expect(newTodo).not.toBeInTheDocument();
    expect(doneHeading).toBeInTheDocument();
    expect(todoHeading).toBeInTheDocument();
  });
});