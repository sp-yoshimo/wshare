import React, { useRef, useState } from "react";
import { useParams,useLocation } from "react-router-dom";

const Edit = () => {

    const { id } = useParams();
    const location=useLocation();
    // const {name,url,content}=location.state;
    console.log(location);

    //フォームの値の取得
    const nameref = useRef();
    const urlref = useRef();
    const contentref = useRef();

    const [text, settext] = useState("");


    // //初期値の設定
    // nameref.current.value=name;
    // urlref.current.value=url;
    // contentref.current.value=content;

    //送信されたとき
    const Submit = (e) => {

        // e.preventDefault();
        settext("")//注意を促す文字列を一時空にする
        // e.preventDefault();

        //それぞれのフォームの値を取得
        const name_value = nameref.current.value;
        const url_value = urlref.current.value;
        const content_value = contentref.current.value;

        //もしどれかの入力欄が空なら、注意を促す文字列を表示
        if (name_value === "" || url_value === "" || content_value === "") {
            nullform()
        } else {
            // データの送信
            fetch(`https://wshare-api.onrender.com/api/edit/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    // "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: name_value,
                    url: url_value,
                    content: content_value
                })
            }).catch(err => console.log(err));
        }
    }


    const nullform = () => {
        settext("全ての入力欄に記入してください");
    }

    return <div className="form-container">
        <h1 className="view-title">編集</h1>
        <div className="view-container">
            <form className="form" onSubmit={Submit}>
                <input type="text" placeholder="サイト名を入力" ref={nameref}></input>
                <input type="url" placeholder="urlを入力" ref={urlref}></input>
                <textarea placeholder="コメントを入力" ref={contentref}></textarea>
                <button className="submit-button">保存</button>
                <p className="attention-text">{text}</p>
            </form>
        </div>

    </div>;
};

export default Edit;
