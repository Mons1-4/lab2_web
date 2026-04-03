import React, { useState, useEffect } from 'react';

const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.2)', display: 'flex',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white', padding: '20px', borderRadius: '8px',
        width: '90%', maxWidth: '400px', position: 'relative'
      }}>
        <button
          onClick={() => setIsOpen(false)}
          style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}
          title="Закрити"
        >
          ✖і
        </button>

        <h2 style={{ marginTop: 0, marginBottom: '10px', fontSize: '1.5rem' }}>Зворотній зв'язок</h2>

        <form action="https://formspree.io/f/xkopvpao" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" name="name" placeholder="Ім’я" required style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="email" name="email" placeholder="Email" required style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="tel" name="phone" placeholder="Номер телефону" required style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <textarea name="message" placeholder="Поле для тексту..." rows="4" required style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}></textarea>

          <button type="submit" style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
