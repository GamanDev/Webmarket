export async function dataFetching(props, query) {
  const res = await props.client.query({
    query: query,
  });
  return res;
}
