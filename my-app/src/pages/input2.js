import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        tel:"",
    });
    
    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        
        setInputs({
            ...inputs,
            [id] : value,
        });
    }; 

    return (
        <div>
            <div>
                <lable>이름</lable>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <lable>이메일</lable>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div> 
            <div>
                <lable>전화번호</lable>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <br/>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>
        </div>
    );
};

export default Input2;