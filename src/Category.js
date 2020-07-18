import React from 'react';
import {useParams} from 'react-router';
import axios from 'axios';

export default function Category(){

    var link;
    
    var name= useParams();

    axios.post('http://52.66.132.209:5000/getSampleVideos', {
            "language": "",
            "category": name.name

        }).then((res) => {
            var video = document.getElementById('video');
            var src = document.getElementById('source');
            link = res.data.data.videos[0].url;
            console.log(link);
            src.setAttribute('src', link);
            video.load();
            
        }).catch((err)=>{
            console.log(err);
        })


    console.log(name.name);

    return (
        <center>
        <span className="heading">
        {name.name}
        </span>
        <br />
        <br />

        <div className="container">
                    <video width="70%" height="60%" autoPlay loop controls id="video">
                    
                    <source src={link} type="video/mp4" id="source" />
                    
                    Your browser does not support the video tag.

                    </video>
                </div>
        <br />
        </center>
    )
}