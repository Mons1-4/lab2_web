import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Олійник Юрій Михайлович</h1>
            <p>Дата народження: 13 листопада 2006 року</p>
            <p>Студент кафедри Захисту інформації | Фахівець із кібербезпеки</p>
            <nav>
                <ul>
                    <li><a href="#about">Про мене</a></li>
                    <li><a href="#education">Освіта</a></li>
                    <li><a href="#projects">Проєкти та дослідження</a></li>
                    <li><a href="#skills">Технічні навички</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
