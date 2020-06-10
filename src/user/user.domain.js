import userService from "./user.service";
import { logger } from "../tools/logger";
import { errorResponse, successResponse } from "../tools/responseHandler";
import { isSouthOrNorth } from "../tools/isSouthOrNorth";
import { processSouthern } from "../tools/processSouthern";
async function createUser(data) {
  logger("Creating user...");
  /** Data validation */
  const { username, email, latitude, longitude, language } = data;
  if (!username || !email || !latitude || !longitude || !language) {
    return errorResponse(
      "You should provide username, email, latitud, longitude and language"
    );
  }
  /** Checking hemisphere */
  const hemisphere = await isSouthOrNorth(latitude, longitude);
  /** Creating user depending on his hemisphere */
  switch (hemisphere) {
    case "N":
      try {
        await userService.createUser(data);
        return successResponse("New user created!");
      } catch (error) {
        if (error.errno === 1062) {
          return errorResponse("This email is already in use!");
        }
        throw error;
      }
    case "S":
      try {
        await processSouthern(data);
        return successResponse("New user created!");
      } catch (error) {
        // TODO: error handler depending on southern implementation.
        throw error;
      }
    default:
      return errorResponse("Bad coordinates");
  }
}
async function getUser(id) {
  logger("Getting user...");
  const user = await userService.getUser(id);
  if (!user) {
    return errorResponse("This user does not exist!");
  }
  return user;
}
async function updateUser(id, data) {
  logger("Updating user...");
  const { email, latitude, longitude, language } = data;
  const updatedFields = { email, latitude, longitude, language };
  try {
    const success = await userService.updateUser(id, updatedFields);
    return success
      ? successResponse("User have been updated!")
      : errorResponse("No user have been updated!");
  } catch (error) {
    return errorResponse(error.message);
  }
}
async function deleteUser(id) {
  logger("Deleting user...");
  try {
    const success = await userService.deleteUser(id);
    return success
      ? successResponse("User have been deleted!")
      : errorResponse("No user have been deleted!");
  } catch (error) {
    return errorResponse(error.message);
  }
}
async function getUserFriendsList(id) {
  const response = await userService.getUserFriendsList(id);
  return response;
}
async function getUserTotalFriends(id) {
  const response = await userService.getUserTotalFriends(id);
  return response;
}
export default {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserFriendsList,
  getUserTotalFriends,
};
