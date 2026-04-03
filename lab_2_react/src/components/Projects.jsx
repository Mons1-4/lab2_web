import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Навчальні проєкти та досвід</h2>
            <ul className="space-y-4">
                <li className="bg-gray-50 p-4 border rounded">
                    <strong className="block text-lg mb-1">Курсова робота з архітектури комп'ютерних систем (АКС):</strong>
                    <p className="text-gray-700">Розробка та симуляція системи з використанням набору інструкцій: <code className="bg-gray-200 text-red-600 px-1 rounded">lw, sw, addi, subi, or, j</code>.</p>
                </li>
                <li className="bg-gray-50 p-4 border rounded">
                    <strong className="block text-lg mb-1">Аудит безпеки:</strong>
                    <p className="text-gray-700">Проведення аналізу безпеки для компанії <em className="italic">C.P. Company</em> (у межах навчальної практики).</p>
                </li>
                <li className="bg-gray-50 p-4 border rounded">
                    <strong className="block text-lg mb-1">Web-програмування:</strong>
                    <p className="text-gray-700">Розробка компонентних інтерфейсів на React з використанням Vite та Git.</p>
                </li>
            </ul>
        </section>
    );
};

export default Projects;
