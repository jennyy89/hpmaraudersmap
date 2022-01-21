import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./Card2.css";
import logo from "./img/logo.png";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Tarjeta({
  character,
  handleDelete,
  edit,
  handleDisplay,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [put, setPut] = useState(useState(character));
  const info = ["name", "image", "ancestry", "house", "dateOfBirth"];


  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = { ...put };
    newObj._id = "";
    !Object.values(newObj).every((x) => x === null || x === " ")
      ? edit(character._id, put)
      : alert("empty");
    setIsEdit(!isEdit)
  };
  const handleInput = (e, property) => {
    const newObj = { ...put };
    newObj[property] = e.target.value || character[property];
    setPut(newObj);
  };
  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 340, mx: "auto", my: 4 }} className="card2">
        <CardHeader
          action={
            <IconButton onClick={() => {handleDisplay();}}>
              <CloseIcon/>
            </IconButton>
          }
        />
        <CardContent sx={{ padding: '1px',marginTop:'-50px' }}>
          <img src={logo} className="logo2" alt="" />
          <div className="characterContainer">
            <h2> {put.name || character.name} </h2>
            <h4>{put.house || character.house} </h4>
            <img src={character.image} width="200" alt="" />
            <h4>DoB: {put.dateOfBirth || character.dateOfBirth} </h4>
            <h4>Ancestry: {put.ancestry || character.ancestry} </h4>
            {isEdit && (
              <form onSubmit={handleSubmit}>
                {info.map((property, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder={character[property]}
                      onChange={(e) => handleInput(e, property)}
                      value={character.property}
                    />
                  </div>
                ))}
                <button>Add Changes</button>
              </form>
            )}
          </div>
        </CardContent>
        <CardActions
          style={{ justifyContent: "center", marginBottom:'5px', mx: "auto" }}
          className="cardActions"
        >
          <Button
            style={{
              color: "#0ba10b ",
              fontWeight: "bold",
              mb: 5,
              backgroundColor: "#0a6e0a",
              cursor:
                'url("http://imageshack.com/a/img922/6285/gC18h6.png"), auto',
            }}
            onClick={() => {
              handleDelete(character._id);
            }}
          >
            Expel
          </Button>
          {!isEdit && <Button
            style={{
              color: "#0ba10b ",
              fontWeight: "bold",
              mb: 5,
              backgroundColor: "#0a6e0a",
              cursor:
                'url("http://imageshack.com/a/img922/6285/gC18h6.png"), auto',
            }}
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            Edit
          </Button>}
        </CardActions>
      </Card>
    </div>
  );
}
