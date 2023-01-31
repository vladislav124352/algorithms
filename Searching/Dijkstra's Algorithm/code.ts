// -----------------------------------------------------------
//
// Dijkstra's Algorithm
//
// TIME COMPLEXITY: O((|V| + |E|) log V)
// MEMORY COMPLEXITY: O(|V| + |E|)
//
// Dijkstra's Algorithm is a graph search algorithm 
// that finds the shortest path between a source node
// and all other nodes in a weighted graph. 
// It uses a priority queue to determine the next 
// node to visit and updates the distance to every 
// other node based on the current node's distance. 
// The algorithm continues until the destination node 
// is reached or all nodes have been processed. 
// It has a time complexity of O(E + V log V) 
// where E is the number of edges and V is the 
// number of vertices in the graph.
//
// -----------------------------------------------------------

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