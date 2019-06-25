let counter = 0;

export function uniqueId(prefix) {
  counter += 1;

  const id = counter;

  return prefix + id;
}
