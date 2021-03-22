import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadInitialTags_SCI } from '../../models/Tag';
import {RenderTags} from '../tags_components/TagComponent';
import { Row,Col } from 'react-bootstrap';
import { DefaultCardFragment } from '../../fragments/card_fragments';

export const ScienceComponent = () => {

    const [responseObjects, setResponseObjects] = useState([]);
    const [tags, settags] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [uri,setUri] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleTagChange = (element,tagData) =>{
        const tag = tags.filter((tag)=>tag.tagKey===tagData.tagKey);
        tag[0].isSelected = !tag[0].isSelected;
        const otherTags = tags.filter((tag)=>tag.tagKey!==tagData.tagKey);
        if(tags[0].isSelected){
            setUri(tags[0].uri);
        }else{
            setIsLoading(true);
            setUri('');
            setResponseObjects([]);
        }
        settags([tag[0],...otherTags]);
    }

    function isArray(what) {
        return Object.prototype.toString.call(what) === '[object Array]';
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    })

    useEffect(() => {

        if(!isLoading)return;

        if(tags.length===0){
            const initialTags = loadInitialTags_SCI();
            const selectedTag = initialTags.filter((tag) => tag.isSelected);
            setUri(selectedTag[0].uri);
            settags(initialTags);
        }

        axios.get(uri+pageCount)
            .then( res =>{
                if(isArray(res.data)){
                    setTimeout(()=>{
                        setResponseObjects(responseObjects => ([...responseObjects,...res.data]));
                    },200)
                    setIsLoading(false);
                }
            }).catch( err=>{
                console.log(" Error Occured While Fetch "+err);
            })

    },[tags,isLoading,uri,pageCount]);

    const handleScroll = () => {
        //console.log(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight-0.99);
        if ((window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight-0.99 )|| isLoading) return;
        setIsLoading(true);
        setPageCount(pageCount => pageCount+1);
    }

    return(
        <>
            <Row className="justify-content-center">
                <Col id="objectsContainer" xs={9}>
                    <DefaultCardFragment responseObjects={responseObjects} />
                    {isLoading && <div className="d-flex justify-content-md-center">Loading...</div>}
                </Col>
                <Col xs={3}>
                    <RenderTags tags={tags} handleTagChange={handleTagChange} /> 
                </Col>
            </Row>
        </>
    )
}