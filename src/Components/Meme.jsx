import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react';

const Meme = ({ meme, setMeme }) => {
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "csguy",
        password: "abcdef12345",
        boxes: []
    });

    const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        if (data.success) setMeme({ ...meme, url: data.data.url });
    }
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((ele, index) => (
            url += `&boxes[${index}][text]=${ele.text}`
        ));

        fetchData(url);
    }

    return (
        <div className="meme">
            <img src={meme.url} alt="" />
            <div>
                {
                    [...Array(meme.box_count)].map((ele, idx) => (

                        <input key={idx} type="text" placeholder={`Meme Caption ${idx + 1}`} onChange={(e) => {
                            const newboxes = form.boxes;
                            newboxes[idx] = { text: e.target.value };
                            setForm({ ...form, boxes: newboxes });
                        }} />
                    ))
                }
            </div>
            <button onClick={generateMeme}>Generate Meme</button>
            <button onClick={() => {
                setMeme(null);
            }} >Choose Template</button>
        </div>
    )
}

export default Meme
