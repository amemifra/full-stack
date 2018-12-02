const renderContainer = document.querySelector('#render-container');

export const render = function(htmlAsString) {
    /** Rendering performance enhanced about 90% */
    window.requestAnimationFrame(
        function() {
            /** Please don't, never */
            renderContainer.innerHTML = htmlAsString;
        }
    )
};
