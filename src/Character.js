// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "reactstrap";

// export default function Character() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://hp-api.herokuapp.com/api/characters")
//       .then((response) => {
//         console.log(response);
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <Container className="bg-light border">
//         <Row xs="4">
//           <Col className="bg-light border">
//             <h1>{data.map((person) => person.name)}</h1>
//           </Col>
//           <Col className="bg-light border">
//             <img
//               alt={data.map((person) => person.name)}
//               src={data.map((person) => person.image)}
//             ></img>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
