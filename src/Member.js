import React, { useState } from 'react';

const Member = () => {
    const [id, setId] = useState('');
    const onChangeId = e => setId(e.target.value);
    const onClick = () => {
        alert("id: "+id);
        setId('');
    };
    return (
        <div style={{textAlign: 'center'}}>
            <h1>로그인</h1>
            <form>
                <input 
                    type="text"
                    placeholder="아이디"
                    name="id"
                    onChange={onChangeId}
                /><br />
                <input 
                    type="password"
                    placeholder="비밀번호"
                /><br />
                <button onClick={onClick}>로그인</button><br />
                <button>회원가입</button>
            </form>
        </div>
    );
};

export default Member;