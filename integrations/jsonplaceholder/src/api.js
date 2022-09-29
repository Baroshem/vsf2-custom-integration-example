module.exports.searchTodos = async (context, params) => {
  const { client } = context;
  let url = 'todos';

  if (params.id) {
    url += `/${params.id}`;
  };

  try {
    const response = await client.get(url);
    return Array.isArray(response.data) ? response.data : [response.data]
  } catch (err) {
    console.error("[jsonplaceholder] searchTodos failed.", err)
  }
}
