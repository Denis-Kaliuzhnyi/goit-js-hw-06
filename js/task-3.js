removeItem(itemToRemove) {
  const index = this.#items.indexOf(itemToRemove);
  if (index !== -1) {
    this.#items.splice(index, 1);