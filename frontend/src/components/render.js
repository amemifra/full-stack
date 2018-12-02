export const render = function(htmlAsString) {
  const renderContainer = document.querySelector('#render-container');

  /** Rendering performance enhanced about 90% */
  window.requestAnimationFrame(
    function() {
      /** Please don't, never */
      renderContainer.innerHTML = htmlAsString;
    }
  )
};
