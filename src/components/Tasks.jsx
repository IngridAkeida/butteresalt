import React, {useState} from "react";


export default function Tasks () {

    const [tasks, setTasks] = useState ([
        {
            id: 1,
            text: 'Avocado',
            reminder: true,
        },
        {
            id: 2,
            text: 'Pineapple',
            reminder: true,
        },
        {
            id: 3,
            text: 'Apple',
            reminder: true,
        },
        {
            id: 4,
            text: 'Banana',
            reminder: true,
        },
    ])


    return(
        <>
            {tasks.map((task) =>(
                <h3 key={task.id}>{task.text}</h3>
            ))}

        </>

    ),
}
