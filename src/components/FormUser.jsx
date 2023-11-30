import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUser.css'

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, isDisable, setIsDisable }) => {
   
    

    const { handleSubmit, register, reset } = useForm()
    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
        if (infoUpdate) {
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
        } else {
            createUser('/users', data)
        }
        setIsDisable(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }
    const handleCloseWindow = () => {
        setIsDisable(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setInfoUpdate()
    }
    return (
        <div className= {`form-container ${isDisable && 'form-disable'}`}>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <h2  className="form-tittle">Form User</h2>
                <div onClick={handleCloseWindow} className="form-close">x</div>
                <label className="form-label">
                    <span className="form-span">
                        email
                    </span>
                    <input className="form-input" {...register('email')} type="email" />
                </label>
                <label className="form-label">
                    <span className="form-span">
                        password
                    </span>
                    <input className="form-input" {...register('password')} type="password" />
                </label>
                <label className="form-label">
                    <span className="form-span">
                        first name
                    </span>
                    <input className="form-input"  {...register('first_name')} type="text" />
                </label>
                <label className="form-label">
                    <span className="form-span">
                        last name
                    </span>

                    <input className="form-input" {...register('last_name')} type="text" />
                </label>
                <label className="form-label">
                    <span className="form-span">
                        birthday
                    </span>

                    <input className="form-input" {...register('birthday')} type="date" />
                </label>
                <button className="form-btn">Submit</button>
            </form>
        </div>
    )
}

export default FormUser