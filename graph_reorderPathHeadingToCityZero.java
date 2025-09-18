class Solution {
    public int minReorder(int n, int[][] connections) {
        Map<Integer, List<List<Integer>>> adjList = new HashMap<>();
        boolean[] visited = new boolean[n];
        for (int[] connection : connections) {
            adjList.putIfAbsent(connection[0], new ArrayList<>());
            adjList.putIfAbsent(connection[1], new ArrayList<>());

            adjList.get(connection[0]).add(Arrays.asList(connection[1], 1));
            adjList.get(connection[1]).add(Arrays.asList(connection[0], 0));
        }

        int changes = 0;
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        visited[0] = true;
        while (!queue.isEmpty()) {
            int city = queue.poll();
            if (!adjList.containsKey(city)) {
                continue;
            }
            for (List<Integer> neighbour: adjList.get(city)) {
                int i = neighbour.get(0), change = neighbour.get(1);
                if (!visited[i]) {
                    queue.offer(i);
                    visited[i] = true;
                    changes +=change;
                }
            }
        }
        return changes;
    }
}