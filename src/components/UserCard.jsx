import React from 'react'
import './styles/UserCard.css'
const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable }) => {
    const handleDelete = () =>{
        deleteUser('/users', user.id)
    }
    const handleEdit = () => {
        setInfoUpdate(user)
        setIsDisable (false)
        
    }
    return (
        <article className='article'>
            <h3 className='article-tittle'>
                {user.first_name} {user.last_name}
            </h3>
            <ul className='article-list'>
                <li><span className='article-span'>Email<span></span> {user.email}</span></li>
                <li><span>Birthday<span className='article-span'></span> {user.birthday}</span></li>
            </ul>
            <button className= 'article-btn' onClick={handleDelete}><i className='bx bxs-trash'></i></button>
            <button className= 'article-btn' onClick={handleEdit}><i className='bx bx-edit' ></i></button>
        </article>
    )
}

export default UserCard