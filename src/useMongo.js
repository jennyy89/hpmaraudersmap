import { useState} from "react";

function useMongo  () {

// const url= "http://localhost:3007/apiMDB/characters"
const url = "https://hp-map-project.herokuapp.com/apiMDB/characters"

const [people, setPeople]=useState([])
const [totalPeeps, setTotalPeeps ] = useState(0)

function load() {
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            setTotalPeeps(result.length)
            setPeople(result)
        })
}

function add (post) {
    fetch(url, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(post)
    })
        .then((res) => res.json())
        .then((res) => {
        load()
        });
}

function del (id) {
    fetch(url + `/` + id, {method: "DELETE"})
    .then(() => {load()});
}

function edit (id, put) {
    fetch(url + `/` + id, {
        headers: {"Content-Type": "application/json"},
        method: "PUT",
        body: JSON.stringify({name:put.name,image:put.image,ancestry:put.ancestry,house:put.house,dateOfBirth:put.dateOfBirth})
    })
    .then((result) => {
        load()});
}

return {people, totalPeeps, load, add, del, edit}
}

export default useMongo;


