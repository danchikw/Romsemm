import {useState} from 'react'
import './App.css'
import axios from "axios";

function Appp() {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        axios('http://localhost:8080/test')
            .then(({data}) => {
                setUsers(data)
            })
    }
    const changeUser = () => {
        axios.patch('http://localhost:8080/test/2', {username: 'Daniel'})
            .then(({data}) => setUsers(data))
    }
    const deleteUsers = () => {
        axios.delete('http://localhost:8080/test/11')
            .then(({data}) => {
                console.log(data)
            })
    }
    const addUser = () => {
        axios.post('http://localhost:8080/test', {name: "Maksat", age: 22})
            .then(({data}) => {
                console.log(data)
            })
    }
    return (
        <>
            <h2>Здесь мой сайт</h2>


            {/*<button onClick={getUsers}>Получить</button>
            <button onClick={changeUser}>Изменить</button>
            <button onClick={deleteUsers}>Удалить</button>
            <button onClick={addUser}>Добавить</button>*/}

        </>
    )
}


