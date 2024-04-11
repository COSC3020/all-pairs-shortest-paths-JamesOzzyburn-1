/* Sources
https://sentry.io/answers/how-can-i-create-a-two-dimensional-array-in-javascript/ //Interesting way to make a 2D array and fill it
*/

function allPairsShortestPaths(graph) {
    var distance = Array.from(Array(graph.length), () => new Array(graph.length).fill(Infinity)); //This is step one in the directions. I found this interesting way to make a 2D array just thought I would try it.

    for (let u = 0; u < graph.length; u++) {
        distance[u][u] = 0; //Step 2
        for (let v = 0; v < graph[u].length; v++) {
            if (graph != Infinity) { //Step 3 where we check and set
                distance[u][graph[u][v][0]] = graph[u][v][1];
            }
        }
    }
    
    for (let k = 0; k < distance.length; k++) { //Step 4 part 1 setting up loop
        for (let i = 0; i < distance.length; i++) { //Step 4 part 2 further setting up loop
            for (let j = 0; j < distance.length; j++) { //Step 4 part 3 even more setting up loop
                if (distance[i][j] > (distance[i][k] + distance[k][j])) { //Step 4 part 4 check and set
                    distance[i][j] = distance[i][k] + distance[k][j]
                }
            }
        }
    }
    return distance;
}
