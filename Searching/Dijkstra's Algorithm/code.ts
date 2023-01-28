const graph2 = {};
graph2["start"] = {};
graph2["start"]["a"] = 6;
graph2["start"]["b"] = 2;
graph2["a"] = {};
graph2["a"]["fin"] = 1;
graph2["b"] = {};
graph2["b"]["a"] = 3;
graph2["b"]["fin"] = 5;
graph2["fin"] = {};

const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

const parents = {};
parents["a"] = "start";
parents["b"] = "end";
parents["fin"] = null;

const processed: any = [];

function findLowestCostNode(costs: any) {
    let lowestCost = Infinity;
    let lowestCostNode = "";

    for (let node in costs) {
        const cost = costs[node];

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }

    return lowestCostNode;
}

function search_algorithm() {
    let node = findLowestCostNode(costs);
    
    while (node) {
        const cost = costs[node];
        const neighbors = graph2[node];

        for (let n in neighbors.keys()) {
            const newCost = cost + neighbors[n];

            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }

        processed.push(node);
        node = findLowestCostNode(costs);
    }
}