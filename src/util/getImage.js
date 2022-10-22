import Image1 from './image1.jpg';
import Image2 from './image2.jpg';
import Image3 from './image3.jpg';
import Image4 from './image4.jpg';
import first from"./first.mp4"


const getImage = idx => {
  switch (idx) {
    case 1:
      return first;
    case 2:
      return first;
    case 3:
      return first;
    case 4:
      return first;
    default:
      return first;
  }
};

export default getImage;
