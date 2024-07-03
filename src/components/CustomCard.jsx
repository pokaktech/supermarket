import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

const CustomCard = ({ product, handleShow }) => {
if (! product ||  product.length === 0) {
  return null; // Return null if categories are undefined or empty
}
const chunks = [];
const chunkSize =3 ;
for (let i = 0; i < product.length; i += chunkSize) {
  chunks.push(product.slice(i, i + chunkSize));
}
  return (
    <CRow className="justify-content-center" style={{alignItems:"center"}}>
    <CCard
      className="border-light"
      style={{
        width: '200px', // Adjust circle size
        height: '180px', // Adjust circle size
       
        backgroundColor: '#e9ecef', // Set background color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%', // Adjust margin between circles
        padding: '0',
        marginRight: '10', // Remove right margin
      }}
      onClick={() => handleShow(product)}
    >
      <CCardImage
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{
          width: "100%",
          height: "100px", // Set fixed height for the image
          objectFit: "cover",
          overflow: "hidden",
        }}
      />
      <CCardBody>
        <CCardTitle style={{ fontSize: "12px" }}>{product.name}</CCardTitle>
        <CCardText style={{ fontSize: "10px" }}>Price: Rs.{product.price}</CCardText>
      </CCardBody>
    </CCard>
    </CRow>
  );
};
export default CustomCard;
