import React, {useState} from 'react';

const SignUp = () => {
    const [form, setForm] = useState({
        id: '',
        username: '',
        birth: '',
        phone: ''
    });

    const {id, username, birth, phone} = form;

    const onChange = e => {
        const nextFrom = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextFrom);
    };

    //성별은 따로 해줌
    const [gender, setGender] = useState('');

    const genderClick = e => setGender(e.target.value)

    const onClick = () => {
        alert("id: "+id+"\n이름: "+username+"\n생년월일: "+birth+"\n성별: "+gender+"\n전화번호: "+phone);
        setForm({
            id: '',
            username: '',
            birth: '',
            phone: ''
        });
        setGender('');
    };

    return (
        <div style={{textAlign: 'center'}}>
            <h1>회원가입</h1>
            <form>
                <input 
                    type="text"
                    placeholder="아이디" 
                    name="id"
                    onChange={onChange}   
                /><br />
                <input 
                    type="password"
                    placeholder="비밀번호"    
                /><br />
                <input 
                    type="password"
                    placeholder="비밀번호 재확인"    
                /><br />
                <input 
                    type="text"
                    placeholder="이름" 
                    name="username"
                    onChange={onChange}    
                /><br />
                <input 
                    type="date"
                    name="birth"
                    onChange={onChange}    
                /><br />
                <select name="gender" onClick={genderClick}>
                    <option value="여">여</option>
                    <option value="남">남</option>
                </select><br />
                <input 
                    type="text"
                    placeholder="휴대전화"  
                    name="phone"
                    onChange={onChange}  
                /><br />
                <button onClick={onClick}>가입하기</button>
            </form>
        </div>
    );
};

export default SignUp;