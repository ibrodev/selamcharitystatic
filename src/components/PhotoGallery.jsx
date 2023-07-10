import img1 from '../assets/imgs/image1.jpg';
import img2 from '../assets/imgs/image2.jpg';
import img3 from '../assets/imgs/image3.jpg';
import img4 from '../assets/imgs/image4.jpg';
import img5 from '../assets/imgs/image5.jpg';
import img6 from '../assets/imgs/image6.jpg';


const PhotoGallery = () => {

  const images = [img1,img2, img3, img4, img5, img6]

  return (

    <section id="photo-gallery" className="container mx-auto px-4 py-14 z-10 h-full flex flex-col gap-8">
        <h2 className="text-center text-3xl font-semibold mb-8 ">Photo Gallery</h2>
        <div className='grid grid-cols-3 grid-rows-2 gap-4'>
          {images.map((img, i) => <div className='flex flex-col items-center gap-4 w-full h-auto aspect-video rounded-md shadow overflow-hidden' key={i}>
            <img src={img} className=' w-full h-full object-cover'/>
          </div>)}
        </div>
    </section>

  )
}

export default PhotoGallery