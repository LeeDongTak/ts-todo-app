import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../api/todos';
import { TodoData } from '../type/todosType';

const useGetTodos = () => {
  const { data, isError, isLoading } = useQuery<TodoData[]>({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  return { data, isError, isLoading };
};

export default useGetTodos;
