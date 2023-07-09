import Card from 'react-bootstrap/Card';

const Cardkegiatan = (props)=>{
  const imgStyle = {
    objectFit: 'cover',
    height: '200px', // Sesuaikan dengan tinggi yang diinginkan
  };
  return (
    <>
      <Card>
        <Card.Img style={imgStyle} variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardkegiatan;