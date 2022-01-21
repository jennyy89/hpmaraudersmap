import { useState, useEffect } from "react";
import "./MongoCharacters.css";
import useMongo from "./useMongo";
import Card2 from "./Card2";

export default function MongoCharacters({ addHandler }) {
const info = ["name", "image", "ancestry", "house", "dateOfBirth"];
const newPost = {
  name: "",
  image: "",
  ancestry: "",
  house: "",
  dateOfBirth: "",
};

  const { people, totalPeeps, load, add, del, edit } = useMongo();
  const [isClicked, setIsClicked] = useState(false);
  const [post, setPost] = useState(newPost);

  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    load();
  }, [people]);
  useEffect(() => {
    const newArray = new Array(totalPeeps + 1).fill(false);
    setIsClicked(newArray);
  }, [totalPeeps]);

  const handleSubmit = (e) => {
    e.preventDefault();
    add(post);
    setPost(newPost);
    addHandler();
  };
  const handleDisplay = (index) => {
    console.log("inside",isClicked)

    setIsClicked(
      isClicked.map((value, counter) => (counter === index ? !value : value))
    );
  };
  const handleInput = (e, property) => {
    const newObj = { ...post };
    newObj[property] = e.target.value;
    setPost(newObj);
  };
  const handleClose = (index) => {
    const newArray = new Array(totalPeeps+1).fill(false);
    setIsClicked(newArray);
    };
  const handleDelete = (id) => { 
    del(id); 
    addHandler();
  }
  return (
    <div className="char_Container">
      <h2>Staff & Students</h2>
      {people.map((person, index) => (
        <div key={person._id}>
          <button
            className="btn"
            onClick={() => {
              handleDisplay(index);
            }}
          >
            {person.name}
          </button>
          {isClicked[index] && (
            <Card2
              character={person}
              index={index}
              handleDelete={handleDelete}
              edit={edit}
              info={info}
              newPut={newPost}
              key={index}
              addHandler={addHandler}
              handleDisplay={handleClose}
            />
          )}
        </div>
      ))}
      <br />
      <br />
      <br />
      <button
        className="btn"
        onClick={() => {
          handleDisplay(totalPeeps);
        }}
      >
        Enroll Student
      </button>
      {isClicked[totalPeeps] && (
        <form onSubmit={handleSubmit}>
          {info.map((property, index) => (
              <input
                type="text"
                placeholder={property}
                onChange={(e) => handleInput(e, property)}
                value={post.property}
                key={index}
              />
          ))}
          <button>submit</button>
        </form>
      )}
    </div>
  );
}
