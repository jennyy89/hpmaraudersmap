import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './Card.css' 
import logo from './img/logo.png'

export default function Tarjeta({character, index, handleDelete, edit, info, newPut}) {

const [isEdit,setIsEdit] = useState(false);
const [put, setPut]= useState(newPut);

const handleSubmit = (e) => {
    e.preventDefault();
    edit(character._id, put);
    setPut(newPut);
}
const handleInput = (e,property) => {
    const newObj = {...put}
    newObj[property]= e.target.value
    setPut(newObj)
}

return (
    <Card sx={{ maxWidth: 340,mx:'auto',my:4 }} className="card">
        <CardContent  >
            <div className="characterContainer" >
                <img src={logo} className='logo'/>
                <h2> {character.name} </h2>
                <h3>{character.house} </h3>  
                <img src={character.image} width='200'/>
                <h4>DoB: {character.dateOfBirth} </h4>  
                <h4>Ancestry: {character.ancestry} </h4>  
                {/* <button onClick={() => {handleDelete(character._id,index)}} >
                    Expel Student
                </button> */}
                {isEdit &&  <form onSubmit={handleSubmit}>
                    {info.map((property, index) =>(
                        <div key={index}>
                        <input
                            type="text"
                            placeholder={property}
                            onChange={(e) => handleInput(e,property) }
                            value={put.property}
                        />
                        <br/>
                        </div>
                    ))}
                    <button>submit</button>
                </form>
                }
            
            </div>
        </CardContent>
        <CardActions style={{justifyContent: 'center',mb:6,mx:'auto' }} className='cardActions' >
        <Button  
            style={{
                color: '#0ba10b ',
                fontWeight: 'bold',
                mb:5,
                backgroundColor:'#0a6e0a',
                cursor: 'url("http://imageshack.com/a/img922/6285/gC18h6.png"), auto'
            }} 
            onClick={() => {handleDelete(character._id)}}
        >
            Expel
        </Button>
        <Button 
            style={{
            color: '#0ba10b ',
            fontWeight: 'bold',
            mb:5,
            backgroundColor:'#0a6e0a',
            cursor: 'url("http://imageshack.com/a/img922/6285/gC18h6.png"), auto'
            }}
            onClick={() => {setIsEdit(!isEdit)}}
        >
            {/* edit(character._id) */}
            Edit
        </Button>
        </CardActions>
</Card>
);
}