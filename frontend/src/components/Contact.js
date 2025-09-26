import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5500/api/contact", form)
      .then(res => setSuccess("Message sent successfully!"))
      .catch(err => setSuccess("Failed to send message."));
  };

  return (
    <section id="contact" className="py-16 px-6 bg-secondary">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="p-3 rounded-lg bg-gray-800 text-white"/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded-lg bg-gray-800 text-white"/>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="p-3 rounded-lg bg-gray-800 text-white"/>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition">Send</button>
        {success && <p className="text-green-400 mt-2">{success}</p>}
      </form>
    </section>
  );
}
