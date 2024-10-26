import React, { useEffect, useState } from 'react';
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì ? Tại sao nên học ReactJS ?',
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?',
    },
    {
        id: 3,
        name: 'Arrow Function',
    },
];

export default function Context() {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleEvent = (e) => {
            console.log(e.detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleEvent);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleEvent);
        };
    }, []);
    return (
        <div>
            <ul className="p-6">
                {lessons.map((lesson) => (
                    <li
                        className="cursor-pointer"
                        style={{
                            color: lessonId === lesson.id ? 'red' : '',
                        }}
                        key={lesson.id}
                        onClick={() => {
                            setLessonId(lesson.id);
                        }}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
