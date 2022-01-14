import { useState, useEffect } from "react";
import './MongoCharacters.css';
import useMongo from './useMongo';
import Card from './Card';


export default function MongoCharacters() {
    
const info = ['name','image','ancestry','house','dateOfBirth'];
const newPost = {name:'',image:'',ancestry:'',house:'',dateOfBirth:''};

const {people, totalPeeps, load, add, del, edit} = useMongo();
const [isClicked,setIsClicked] = useState(false);
const [post, setPost]= useState(newPost);

useEffect(() => {load()}, [])
useEffect(() => {load()}, [people])
useEffect(() => {
    const newArray = new Array(totalPeeps+1).fill(false)
    setIsClicked(newArray)
    }
    , [totalPeeps])
    

const handleSubmit = (e) => {
    e.preventDefault();
    add(post);
    setPost(newPost);
}
const handleDisplay = (index) => {
    setIsClicked(isClicked.map((value, counter )=>(counter === index ? !value : value)))
}
const handleInput = (e,property) => {
    const newObj = {...post}
    newObj[property]= e.target.value
    setPost(newObj)
}

return (
<div className="char_Container">
    <h2>Staff & Students</h2>
    {people.map((person,index) => (
        <div  key={person._id}>
        <button className="btn" onClick={() => {handleDisplay(index)}}>{person.name}</button>
        {isClicked[index] &&  <Card character={person} index={index} handleDelete={del} edit={edit} info={info} newPut={newPost}/>}
        </div>
    ))}
    <br/>
    <button  onClick={() => {handleDisplay(totalPeeps)}}>Enroll New Student</button> 
    {isClicked[totalPeeps] &&  <form onSubmit={handleSubmit}>
        {info.map((property, index) =>(
            <div key={index}>
            <input
                type="text"
                placeholder={property}
                onChange={(e) => handleInput(e,property) }
                value={post.property}
            />
            <br/>
            </div>
        ))}
        <button>submit</button>
    </form>
    }
</div>
);
}