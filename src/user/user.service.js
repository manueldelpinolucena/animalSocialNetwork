import {
  countUserFriendsQuery,
  createUserQuery,
  getUserByIdQuery,
  updateUserQuery,
  deleteUserQuery,
  userFriendListQuery,
} from "./queries";

class UserService {
  constructor() {
    this.pool = null;
  }
  async init(pool) {
    this.pool = pool;
  }
  async createUser(data) {
    const { username, email, password, latitude, longitude, language } = data;
    const newUser = [username, email, password, latitude, longitude, language];
    return await this.pool.query(createUserQuery, newUser);
  }

  async getUser(id) {
    const [[user]] = await this.pool.query(getUserByIdQuery, id);
    return user;
  }
  async updateUser(id, data) {
    const object = {};
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value !== undefined) {
        object[key] = value;
      }
    });
    const [response] = await this.pool.query(updateUserQuery, [object, id]);
    return !!response.affectedRows;
  }
  async deleteUser(id) {
    const [response] = await this.pool.query(deleteUserQuery, [id]);
    return !!response.affectedRows;
  }
  async getUserTotalFriends(id) {
    const [[response]] = await this.pool.query(countUserFriendsQuery, [id]);
    return response[`count(*)`];
  }
  async getUserFriendsList(id) {
    const [response] = await this.pool.query(userFriendListQuery, [id, id]);
    return response.map((element) => element.username);
  }
}

export default new UserService();
