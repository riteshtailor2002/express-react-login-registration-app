
exports.home = async (req, res, db) => {
    console.log(db);
    res.json({ message: "Welcome to Node, Express, MySql application." });
};
exports.welcome = async (req, res, db) => {
    res.json({ message: "Welcome to welcome." });
};