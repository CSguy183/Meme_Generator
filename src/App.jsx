import React from 'react';
import { useState , useEffect } from 'react';
import './App.css';
import Template from './Components/Template';
import Meme from './Components/Meme';

const App = () => {

    const [templates, setTemplates] = useState([]);
    const [meme, setMeme] = useState(null);

    const fetchData = async ()=>{
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        setTemplates(data.data.memes);
        // console.log(data.data.memes);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="app">
            <h1>Meme Generator</h1>
            {meme === null ? <Template templates = {templates} setMeme = {setMeme} /> : <Meme meme={meme} setMeme = {setMeme}/> }
            
        </div>
    )
}

export default App
