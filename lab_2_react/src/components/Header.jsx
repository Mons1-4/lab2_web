import React from 'react';

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="bg-red-600 text-white p-6 text-center rounded-lg shadow-sm relative">
            <button
                onClick={toggleTheme}
                className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded shadow cursor-pointer text-sm font-bold"
            >
                {theme === 'light' ? '🌙 Темна' : '☀️ Світла'}
            </button>

            <h1 className="text-3xl font-bold mb-2 pt-2 md:pt-0">Олійник Юрій Михайлович</h1>
            <p className="text-lg mb-1">Дата народження: 13 листопада 2006 року</p>
            <p className="text-lg mb-4">Студент кафедри Захисту інформації | Фахівець із кібербезпеки</p>
            <nav>
                <ul className="flex justify-center flex-wrap gap-4">
                    <li><a href="#about" className="hover:underline">Про мене</a></li>
                    <li><a href="#education" className="hover:underline">Освіта</a></li>
                    <li><a href="#projects" className="hover:underline">Проєкти та дослідження</a></li>
                    <li><a href="#skills" className="hover:underline">Технічні навички</a></li>
                    <li><a href="#reviews" className="hover:underline">Відгуки</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
