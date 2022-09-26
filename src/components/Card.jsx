import styled from "styled-components";

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  padding: 2rem;
  border-radius: 5px;
`;

const Img = styled.img`
  content: url("https://images.freeimages.com/images/large-previews/8ae/portrait-26-1432720.jpg");
  width: 100px;
  height: 100px;
`;

const Name = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const City = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

const Card = () => {
  return (
    <BoxStyled>
      <Img />
      <Name>Rachel Smith</Name>
      <City>Boston, Massachusetts</City>
    </BoxStyled>
  );
};

export default Card;
