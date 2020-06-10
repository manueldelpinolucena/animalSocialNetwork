import express from "express";
import userDomain from "./user.domain";

const router = express.Router();

async function createUser(req, res, next) {
  try {
    const data = req.body;
    const newUser = await userDomain.createUser(data);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}
async function getUser(req, res, next) {
  try {
    const user = await userDomain.getUser(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}
async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    const newUser = await userDomain.updateUser(id, data);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}
async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    const newUser = await userDomain.deleteUser(id);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}
async function getUserFriendsList(req, res, next) {
  try {
    const { id } = req.params;
    const friendsList = await userDomain.getUserFriendsList(id);
    res.json(friendsList);
  } catch (error) {
    next(error);
  }
}
async function getUserTotalFriends(req, res, next) {
  try {
    const { id } = req.params;
    const friendsList = await userDomain.getUserTotalFriends(id);
    res.json(friendsList);
  } catch (error) {
    next(error);
  }
}

router.post("/", createUser);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/friends/list", getUserFriendsList);
router.get("/:id/friends/count", getUserTotalFriends);

export default router;
