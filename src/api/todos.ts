import axios from 'axios';
import { TodoData } from '../type/todosType';

export const getTodos = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

type TodoOmitType = Omit<TodoData, 'id'>;
export const addTodo = async (newTodo: TodoOmitType) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

type updTodoOmitType = Omit<TodoData, 'title' | 'content'>;
export const updateTodo = async (updTodo: updTodoOmitType) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${updTodo.id}`, { isDone: !updTodo.isDone });
};

export const deleteTodo = async (id?: string) => {
  if (!window.confirm('정말로 삭제하시겠습니까?')) {
    alert('삭제되었습니다. ');
  } else {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
  }
};
