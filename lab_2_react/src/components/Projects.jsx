import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Навчальні проєкти та досвід</h2>
            <ul>
                <li>
                    <strong>Курсова робота з архітектури комп'ютерних систем (АКС):</strong> 
                    Розробка та симуляція системи з використанням набору інструкцій: <code>lw, sw, addi, subi, or, j</code>.
                </li>
                <li>
                    <strong>Аудит безпеки:</strong> 
                    Проведення аналізу безпеки для компанії <em>C.P. Company</em> (у межах навчальної практики).
                </li>
                <li>
                    <strong>Web-програмування:</strong> 
                    Розробка компонентних інтерфейсів на React з використанням Vite та Git.
                </li>
            </ul>
        </section>
    );
};

export default Projects;
