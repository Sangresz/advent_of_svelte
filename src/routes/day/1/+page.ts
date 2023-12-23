export const load = async ({ fetch }) => {
  const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');
  const childs = await res.json();

  return {
    childs: childs,
  };
}