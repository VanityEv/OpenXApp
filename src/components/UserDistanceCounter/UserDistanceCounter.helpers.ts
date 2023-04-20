import { User } from "../../APIData.types";

export function calculateDistance(
  x1: number,
  x2: number,
  y1: number,
  y2: number
) {
  let c =
    calculateSegmentLength(x1, x2) ** 2 + calculateSegmentLength(y1, y2) ** 2;
  return Math.sqrt(c);
}
function calculateSegmentLength(x1: number, x2: number) {
  if (x1 < 0 && x2 < 0) {
    if (x1 >= x2) {
      return Math.abs(x1) - Math.abs(x2);
    } else {
      return Math.abs(x2) - Math.abs(x1);
    }
  }
  if (x1 >= 0 && x2 >= 0) {
    if (x1 >= x2) {
      return x1 - x2;
    } else {
      return x2 - x1;
    }
  }
  if (x1 < 0 && x2 > 0) {
    return Math.abs(x1) + x2;
  }
  if (x1 > 0 && x2 < 0) {
    return x1 + Math.abs(x2);
  }
  return 0;
}

export function getGreatestDistanceUsers(data: User[]) {
  let greatestDistanceUserIds = [0, 0];
  let greatestDistance = 0;
  let user1Lat = 0,
    user1Long = 0,
    user2Lat = 0,
    user2Long = 0;
  let currentDistance = 0;
  data.forEach((user1: User) => {
    user1Lat = parseFloat(user1.address.geolocation.lat);
    user1Long = parseFloat(user1.address.geolocation.long);
    data.forEach((user2: User) => {
      if (user2.id !== user1.id) {
        user2Lat = parseFloat(user2.address.geolocation.lat);
        user2Long = parseFloat(user2.address.geolocation.long);
        currentDistance = calculateDistance(
          user1Lat,
          user2Lat,
          user1Long,
          user2Long
        );
        if (currentDistance > greatestDistance) {
          greatestDistance = currentDistance;
          greatestDistanceUserIds = [user1.id, user2.id];
        }
      }
    });
  });
  return greatestDistanceUserIds;
}
