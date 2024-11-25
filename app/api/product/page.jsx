
import image1 from '../../../Assets/Assets/image1.png'
import image2 from '../../../Assets/Assets/image2.png'
import image3 from '../../../Assets/Assets/image3.png'
import image4 from '../../../Assets/Assets/image4.png'


export default function handler(req, res) {
    // const { id } = useParams();
  
    const products = [
        { id: "1", image: image1, title: "Indian Saree", price: "BDT 2,300", rating: 4 },
        { id: "2", image: image2, title: "Half Sleeve Shirt", price: "BDT 2,300", rating: 5 },
        { id: "3", image: image3, title: "Woman Wearing Sari", price: "BDT 2,300", rating: 3 },
        { id: "4", image: image4, title: "Checkered Shirt", price: "BDT 2,300", rating: 4 },
        { id: "5", image: image1, title: "Indian Saree", price: "BDT 2,300", rating: 4 },
        { id: "6", image: image2, title: "Half Sleeve Shirt", price: "BDT 2,300", rating: 4 },
        { id: "7", image: image3, title: "Woman Wearing Sari", price: "BDT 2,300", rating: 5 },
        { id: "8", image: image4, title: "Checkered Shirt", price: "BDT 2,300", rating: 4 },
      ];
  
    const product = products.find((product) => product.id === id);
    const relatedProducts = products.filter((product) => product.id !== id);
  
    res.status(200).json({ product, relatedProducts });
  }
  