class Solution {
  bool canVisitAllRooms(List<List<int>> rooms) {
    Set<int> visitedRooms = <int>{};
    List<int> roomsToExplore = <int>[];

    roomsToExplore.add(0);
    visitedRooms.add(0);

    if (rooms.isEmpty) return true;

    while (roomsToExplore.isNotEmpty) {
      int currentRoom = roomsToExplore.removeLast();

      for (var key in rooms[currentRoom]) {
        if (!visitedRooms.contains(key)) {
          visitedRooms.add(key);
          roomsToExplore.add(key);
        }
      }
    }

    return visitedRooms.length == rooms.length;
  }
}
