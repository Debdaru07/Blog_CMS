const supabase = require('../config/supabase');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return res.sendStatus(403);
  req.user = user;
  next();
};

module.exports = { authenticateToken };