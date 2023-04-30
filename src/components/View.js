import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const View = () => {

    const [mapdata, setmapdata] = useState([]);

    //データの取得
    useEffect(() => {
        fetch(`https://wshare-api.onrender.com/api`)
            .then((response) => response.json())
            .then((data) => {
                const adddata = data.reverse();
                // console.log(adddata);
                setmapdata(adddata);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    const deleteData = (id) => {
        //データの削除

        fetch(`https://wshare-api.onrender.com/api/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                // "Accept": "application/json",
            },
        }).catch(err => console.log(err));

        window.location.reload();
    };



    return <div className="view-container">
        <h1 className="view-title">おすすめWebサイト一覧</h1>
        <div className="items">

            {mapdata.map((map, index) => {
                // console.log(index);
                return (
                    <div className="item" key={index}>
                        <div className="item-header">
                            <h3>{map.name}</h3>
                            <div className="buttons">
                                <Link
                                    to={
                                        {
                                            pathname: `/edit/${map._id}`,
                                        }
                                    } className="edit">編集</Link>
                                <a rel="noreferrer" href="#?" className="delete" onClick={(id) => deleteData(map._id)}>
                                    削除
                                </a>
                                <a rel="noreferrer" target="_blank" href={map.url} className="url">
                                    URL
                                </a>
                            </div>
                        </div>
                        <div className="item-content">
                            <p>{map.content}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    </div>;
};

export default View;
