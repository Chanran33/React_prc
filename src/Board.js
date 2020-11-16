import React, { useState } from 'react';

const Board = () => {
    const [lists, setLists] = useState([
        {
            id: 0,
            title: "테스트 제목",
            contents: "테스트 글"
        }
    ]);

    const [inputTitle, setInputTitle] = useState('');
    const [inputContents, setInputContents] = useState('');
    const [nextId, setNextId] = useState(1); //새로운 항목을 추가할 때 사용할 id

    const onChangeTitle = e => setInputTitle(e.target.value);
    const onChangeContents = e => setInputContents(e.target.value);


    const onClick = () => {
        const nextList = lists.concat({
            id: nextId,
            title: inputTitle,
            contents: inputContents
        });
        setNextId(nextId + 1);
        setLists(nextList);
        setInputTitle('');
        setInputContents('');
    };


    const newLists = lists.filter(list => list.id !== 0);

    const showList = newLists.map(list =>
        <p key={list.id}>
            글 제목 : {list.title}<br />
            내용 : {list.contents}<br />
        </p>
    );

    return (
        <div style={{textAlign: 'center'}}>
            <h1>게시판</h1>
            <input 
                type="text"
                placeholder="글 제목"
                value={inputTitle}
                onChange={onChangeTitle}
            /><br />
            <textarea cols="25" placeholder="내용"
                value={inputContents} 
                onChange={onChangeContents}>
                내용
            </textarea><br />
            <input 
                type="file"
            /><br />
            <button onClick={onClick} >작성하기</button>
            {showList}
        </div>
    );
};

export default Board;