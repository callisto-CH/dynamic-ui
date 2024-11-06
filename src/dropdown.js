const createDropdown = (button, dropdown, trigger) => {
  button.addEventListener(trigger, () => {
    dropdown.classList.toggle("visible");
  });
};

export { createDropdown };
