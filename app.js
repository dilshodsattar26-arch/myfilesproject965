const coreHandlerInstance = {
    version: "1.0.965",
    registry: [1175, 1900, 14, 1511, 1835, 4, 430, 1173],
    init: function() {
        const nodes = this.registry.filter(x => x > 499);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});