import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Description from './Description';
import Name from './Name';
import product from './product';
import Price from './Price';
const App=() =>{
  const firstName= "Ba10"
 
  return (
    <div>
<p>{firstName ? `Hello, ${firstName}` : "Hello There !"} </p>
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} 
      
      />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Price/>
         <Description/>
        </Card.Text>
      </Card.Body>
     
     
    </Card>
    </div>
  )
}

export default App;
