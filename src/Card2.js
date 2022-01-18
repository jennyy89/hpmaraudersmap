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
  index,
  handleDelete,
  edit,
  info,
  newPut,
  handleDisplay,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [put, setPut] = useState(useState(character));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = { ...put };
    newObj._id = "";
    console.log(newObj);
    !Object.values(newObj).every((x) => x === null || x === " ")
      ? edit(character._id, put)
      : console.log("empty");
  };
  const handleInput = (e, property) => {
    console.log(put);
    const newObj = { ...put };
    newObj[property] = e.target.value || character[property];
    setPut(newObj);
  };
  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 340, mx: "auto", my: 4 }} className="card2">
        <CardHeader
          action={
            <IconButton>
              <CloseIcon
                onClick={() => {
                  handleDisplay(index);
                }}
              />
            </IconButton>
          }
        />
        <CardContent>
          <div className="characterContainer">
            <img src={logo} className="logo2" alt="" />
            <h3> {put.name || character.name} </h3>
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
                      // type="text"
                      // placeholder={property}
                      // onChange={(e) => handleInput(e,property) }
                      // value={put.property}
                    />
                  </div>
                ))}
                <button>submit</button>
              </form>
            )}
          </div>
        </CardContent>
        <CardActions
          style={{ justifyContent: "center", mb: 6, mx: "auto" }}
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
              setIsEdit(!isEdit);
            }}
          >
            {/* edit(character._id) */}
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
