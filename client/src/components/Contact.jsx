import { useState } from 'react';
const API = import.meta.env.VITE_API_URL || '';
const EMPTY = { name: '', email: '', message: '' };

export default function Contact() {
  const [f, setF] = useState(EMPTY);
  const [st, setSt] = useState({ type: 'idle', msg: 'Your message goes straight to my inbox.' });
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || !f.message.trim())
      return setSt({ type: 'err', msg: 'Enter your name, a valid email address and a message, then try again.' });
    setSt({ type: 'busy', msg: 'Sending your message...' });
    try {
      const res = await fetch(API + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Could not send your message.');
      setF(EMPTY);
      setSt({ type: 'ok', msg: 'Thank you. Your message was sent.' });
    } catch (err) {
      setSt({ type: 'err', msg: err.message + ' You can also email zubairdev0@gmail.com directly.' });
    }
  }

  return (
    <section className="sec" id="contact"><h2>Contact</h2><div>
      <p className="big">Let's build something great together</p>
      <div className="cl">
        <a href="mailto:zubairdev0@gmail.com">zubairdev0@gmail.com</a>
        <a href="https://linkedin.com/in/zubairdev01" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/zubairdev01" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <form onSubmit={submit} noValidate>
        <label>Name<input name="name" value={f.name} onChange={change} autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" value={f.email} onChange={change} autoComplete="email" required /></label>
        <label>Message<textarea name="message" rows="5" value={f.message} onChange={change} required /></label>
        <button className="btn p" type="submit" disabled={st.type === 'busy'}>Send message</button>
        <p className="note" role="status">{st.msg}</p>
      </form>
    </div></section>
  );
}
