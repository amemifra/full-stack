const store = {
    showFlower: false
};

export const getStore = function() {
    return Object.freeze(store);
}