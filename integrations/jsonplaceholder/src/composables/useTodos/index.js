import { computed, ssrRef, useContext } from '@nuxtjs/composition-api';

export const useTodos = (id) => {
  const context = useContext();
  const todos = ssrRef([], `useTodos-todos-${id}`);
  const loading = ssrRef(false, `useTodos-loading-${id}`);
  const error = ssrRef({ search: null }, `useTodos-error-${id}`);

  /**
   * Searches for todos with given params
   */
  const search = async (params) => {
    console.debug(`useTodos/${id}/search`, params);

    try {
      loading.value = true;
      todos.value = await context.$vsf.$jsonplaceholder.api.searchTodos(params);
      error.value.search = null;
    } catch (error) {
      error.value.search = error;
      console.error(`useTodos/${id}/search`, error);
    } finally {
      loading.value = false;
    }
  };

  return {
    search,
    todos: computed(() => todos.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  }
};
