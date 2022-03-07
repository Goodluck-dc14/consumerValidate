import React from "react";
import styled from "styled-components";
// import { AuthContext } from "../Global/AuthProvider";
// import axios from "axios";
// import pizza from "./pizza.jpg";

const Home = () => {
  // const { userData } = useContext(AuthContext);

  // const [storeState, setStoreState] = useState([]);

  // const fetchData = async () => {
  //   const config = {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };

  //   const res = await axios.get("http://localhost:5599/store", config);
  //   if (res) {
  //     setStoreState(res.data.data);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Name>Welcome back,</Name>

          <Card>
            <Div>
              <Image />
              <Div2>
                <List>name</List>
                <List>#price</List>
              </Div2>
            </Div>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;
const Image = styled.img`
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  background: white;
  object-fit: cover;
  margin: 20px 0;
`;
const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Div = styled.div`
  margin: 10px;
`;
const List = styled.div``;
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: red;
  color: white;
  margin-top: 20px;
  border: 0;
  outline: none;
  transform: scale(1);
  transition: all 350ms;
  font-size: 20px;
  text-transform: uppercase;
  :hover {
    cursor: pointer;

    transform: scale(0.97);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid gray;
  outline: none;
  border-radius: 3px;
  margin: 5px 0;
  padding-left: 10px;
`;

const ImageInput = styled.input`
  display: none;
`;

const Lebal = styled.label`
  margin-bottom: 20px;
  padding: 15px 30px;
  background: red;
  color: white;
  border-radius: 3px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;

const Holder = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  padding: 40px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: 100%;
  background: lightgray;
`;
