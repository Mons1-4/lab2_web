import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Технічні навички</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Кібербезпека та мережі:</h3>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        <li>Робота з інструментами Nmap та Nessus.</li>
                        <li>Аналіз вразливостей систем та аудит безпеки.</li>
                        <li>Робота з асемблером MIPS (набір інструкцій АКС).</li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Програмування:</h3>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        <li>Python, JavaScript, React.</li>
                        <li>Робота з Git/GitHub.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
