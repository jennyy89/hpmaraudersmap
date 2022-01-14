import "./App.css";


import MongoCharacters from "./MongoCharacters";

function Alt_App() {
  
 // ========= Elephant Api  =======
    // const apiData = "http://localhost:3007/api/characters";
  // const [characters, setCharacters] = useState([]);
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const results = await axios.get(apiData);
  //     setCharacters(results.data);
  //     console.log(results.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="App">
      <MongoCharacters/>
    </div>
  );
}

export default Alt_App;
