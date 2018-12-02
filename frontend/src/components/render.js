export const render = function(htmlAsString) {
  const renderContainer = document.querySelector('#render-container');

  /** Rendering performance enhanced about 90% */
  requestAnimationFrame(
    () => {
      /** Please don't, never */
      renderContainer.innerHTML = htmlAsString;
    }
  )
};
