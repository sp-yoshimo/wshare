import React, { useRef, useState } from "react";

const Post = () => {

    const nameref = useRef();
    const urlref = useRef();
    const contentref = useRef();

    const [text, settext] = useState("");

    const submit = (e) => {

        settext("")//注意を促す文字列を一時空にする
        // e.preventDefault();

        //それぞれのフォームの値を取得
        const name = nameref.current.value;
        const url = urlref.current.value;
        const content = contentref.current.value;

        //もしどれかの入力欄が空なら、注意を促す文字列を表示
        if (name === "" || url === "" || content === "") {
            e.preventDefault();
            nullform();
        } else {
            // データの送信
            fetch(`https://wshare-api.onrender.com/api/post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    url: url,
                    content: content
                })
            })
            .then((data)=>{
                console.log(data);
                settext("投稿が完了しました")
            })
            .catch(err => console.log(err));
        }

    }


    const nullform = () => {
        settext("全ての入力欄に記入してください");
    }

    return <div className="form-container">
        <h1 className="view-title">投稿</h1>
        <div className="view-container">
            <form className="form" onSubmit={submit}>
                <input type="text" placeholder="サイト名を入力" ref={nameref}></input>
                <input type="url" placeholder="urlを入力" ref={urlref}></input>
                <textarea placeholder="コメントを入力" ref={contentref}></textarea>
                <button className="submit-button">投稿</button>
                <p className="attention-text">{text}</p>
            </form>
        </div>

    </div>;
};

export default Post;
