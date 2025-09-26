import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://portfolio-tfly.onrender.com/api/contact",
        form
      );

      // Show alert popup
      alert(res.data.message);

      // Show success message below form
      setSuccess(res.data.message);

      // Clear form fields
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err.response || err);

      const errorMsg =
        err.response && err.response.data && err.response.data.message
          ? `Failed: ${err.response.data.message}`
          : "Failed to send message. Please try again later.";

      // Show alert popup for errors
      alert(errorMsg);

      // Show error below form
      setSuccess(errorMsg);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-secondary">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white"
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white"
          type="email"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition"
        >
          Send
        </button>
        {success && <p className="text-green-400 mt-2">{success}</p>}
      </form>
    </section>
  );
}
