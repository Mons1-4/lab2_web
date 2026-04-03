import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative mx-4 shadow-xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Зворотній зв'язок</h2>

        <form action="https://formspree.io/f/xkopvpao" method="POST" className="flex flex-col gap-3">
          <input type="text" name="name" placeholder="Ім'я" required className="border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" />
          <input type="tel" name="phone" placeholder="Номер телефону" required className="border p-2 rounded" />
          <textarea name="message" placeholder="Текст повідомлення..." rows="4" required className="border p-2 rounded"></textarea>

          <button type="submit" className="bg-indigo-600 text-white p-2 rounded font-bold hover:bg-indigo-700 mt-2">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
