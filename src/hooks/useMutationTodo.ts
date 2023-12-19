import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo, updateTodo, deleteTodo } from '../api/todos';
import { TodoData } from '../type/todosType';

const useMutationTodo = () => {
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    }
  });
  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    }
  });
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]});
    }
  });

  return { addMutate: addMutation.mutate, updateMutate: updateMutation.mutate, deleteMutate: deleteMutation.mutate };
};
export default useMutationTodo;
