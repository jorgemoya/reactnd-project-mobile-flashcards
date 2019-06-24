let counter = 4;

export function uniqueId(prefix) {
  counter += 1;

  const id = counter;

  return prefix + id;
}
