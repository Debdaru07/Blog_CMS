const supabase = require('../config/supabase');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ token: data.session.access_token, user: { id: data.user.id, email: data.user.email } });
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  if (data.user) {
    await supabase.from('profiles').insert({ id: data.user.id, email });
  }
  res.json({ message: 'User created. Check email for confirmation.' });
};

module.exports = { login, signup };