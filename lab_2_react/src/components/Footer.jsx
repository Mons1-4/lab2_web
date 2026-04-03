import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' });

    useEffect(() => {
        const currentInfo = {
            userAgent: navigator.userAgent,
            platform: navigator.platform
        };

        localStorage.setItem('systemInfo', JSON.stringify(currentInfo));

        const savedInfo = JSON.parse(localStorage.getItem('systemInfo'));

        if (savedInfo) {
            setSysInfo(savedInfo);
        }
    }, []);

    return (
        <footer className="bg-gray-800 text-white p-6 rounded-lg text-center mt-6">
            <h2 className="text-xl font-bold mb-4">Контактна інформація</h2>
            <ul className="flex justify-center gap-6 mb-4">
                <li>Email: <a href="mailto:oliynikjura@gmail.com" className="text-blue-300 hover:underline">oliynikjura@gmail.com</a></li>
                <li>GitHub: <a href="https://github.com/uraolijnik" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">uraolijnik</a></li>
            </ul>

            {sysInfo.platform && (
                <div className="mb-4 text-sm text-gray-400">
                    <p><strong>Platform:</strong> {sysInfo.platform}</p>
                    <p className="mt-1 text-xs opacity-70"><strong>User Agent:</strong> {sysInfo.userAgent}</p>
                </div>
            )}

            <p className="text-gray-400 text-sm">&copy; 2026 Юрій Олійник. Всі права захищені.</p>
        </footer>
    );
};

export default Footer;
