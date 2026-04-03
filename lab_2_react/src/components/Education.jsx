import React from 'react';

const Education = () => {
    return (
        <section id="education" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Освіта</h2>
            <ul className="list-disc ml-6 space-y-2">
                <li>
                    <h3 className="text-xl font-semibold text-gray-800">Національний університет «Львівська політехніка»</h3>
                    <p className="text-gray-700">Інститут комп'ютерних технологій, автоматики та метрології (ІКТА).</p>
                    <p className="text-gray-600 text-sm bg-gray-100 inline-block px-2 py-1 mt-1 rounded">Кафедра «Захисту інформації», спеціальність: Кібербезпека (2023 – дотепер).</p>
                </li>
            </ul>
        </section>
    );
};

export default Education;
