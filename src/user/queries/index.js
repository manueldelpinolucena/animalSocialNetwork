export const createUserQuery = `
    INSERT INTO user(username, email, password, latitude, longitude, language)
    VALUES(?, ?, ?, ?, ?, ?);
`;
export const getUserByIdQuery = `
    SELECT username, email, latitude, longitude, language
    FROM user
    WHERE user_id = ?;
`;
export const updateUserQuery = `
    UPDATE user
    SET ? 
    WHERE user_id = ?;
`;
export const deleteUserQuery = `
    DELETE 
    FROM user
    WHERE user_id = ?;
`;
export const countUserFriendsQuery = `
    SELECT count(*) FROM user 
    JOIN relation ON user_id = user_id1 OR user_id = user_id2
    WHERE user_id = ?;
`;
export const userFriendListQuery = `
    SELECT user.username
    FROM relation
    INNER JOIN user
    ON relation.user_id1 = user_id
    WHERE user_id2 = ?
    UNION
    SELECT user.username   
    FROM relation
    INNER JOIN user
    ON relation.user_id2 = user_id
    WHERE user_id1 = ?;
`;
