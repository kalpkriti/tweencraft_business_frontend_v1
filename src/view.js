import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Image, Modal } from "react-bootstrap";
import { useState } from "react";

export default function View(){

    var link = useParams();
    console.log(link.cate);
    console.log(link.id);

    var [videos, setVideos] = useState([]);

    useEffect(async () => {
        const response = await axios.post(
          "http://52.66.132.209:5000/getSampleVideos",
          { category: link.cate }
        );
        console.log(response.data.data.videos, "asasa");
        setVideos(response.data.data.videos);
      }, []);

    

    return(

        <video width="100%" height="100%" controls autoPlay>

            <source src={link} type="video/mp4" />
                
                Your browser does not support the video tag.

            </video>

    );
}