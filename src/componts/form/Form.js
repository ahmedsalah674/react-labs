import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Select from 'react-select'

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [select, setSelect] = useState("");
    const [selectMulti, setselectMulti] = useState([]);
    const [user, setUser] = useState([]);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const optionsMulti= [
        { value: 'black', label: 'black' },
        { value: 'red', label: 'red' },
        { value: 'blue', label: 'blue' },
        { value: 'white', label: 'white' }
    ]
    const onChangeSelect = (value) =>{
        setSelect(value.value);
        console.log(select);
    }

    const onChangeMultiSelect = (value) =>{
        // setSelect(value.value);
        let data = value.map(val=>{
            return val.value
        })
        setselectMulti(data)
        console.log(data);
    }
    const onSubmit = data => {
        setUser( {...data, select , selectMulti} )
        // console.log(user)
    }
        
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label >Email address</label>
                    <input {...register("email", { required: true })} className="form-control" />
                    {errors.email && <span className='text-danger'>Email  is required</span>}
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" {...register("password", { required: true })} className="form-control" />
                    {errors.password && <span className='text-danger'>Password  is required</span>}
                </div>

                {/* single select  */}
                <Select className='form-control my-5' options={options}  {...register("selectOption")}  onChange={onChangeSelect}/>

                <Select options={optionsMulti}  isMulti onChange={onChangeMultiSelect} />

                <input type="submit" className='btn btn-info' />
            </form>
            <div>
                <h3>{user.email}</h3>
                <h3>{user.password}</h3>
                <h3>{user.select}</h3>
                {/* <h3>{user.selectMulti}</h3> */}
                {user.selectMulti&&user.selectMulti.map(((SM,index) => <h3 key={index}>{SM}</h3>))}
            </div>
        </div>
    )
}

export default Form