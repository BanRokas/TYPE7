import './App.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide : 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide : 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide : 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide : 1
  }
};

const App = () => {

  const pridetiFilma = e => {
    e.preventDefault();
    const m = e.target.elements;

    let video_trailers = [];
    m.videos_trailers.forEach(trailer => video_trailers.push(trailer.value));

    const filmas = {
      title : m.title.value,
      videos : {
        trailers : video_trailers,
        cutscenes : m.videos_cutscenes.value
      },
      photos : {
        poster : m.photos_poster.value,
        cutscenes : m.photos_cutscenes.value
      }
    }

    console.log(filmas);
  }

  return (
    <>
    <iframe
      width="1904"
      height="800"
      src="https://www.youtube.com/embed/RNia_QWGlwE?autoplay=weRideAtDawn"
      title="Collection Log Completionist (#61)"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >

    </iframe>
      <form onSubmit={pridetiFilma}>
        <input 
          type="text" name="title" placeholder="pavadinimas"
        />
        <div>
          <p>Videos</p>
          <div style={{display: 'flex'}}>
            <div>
              <input 
                type="text" name="videos_trailers" placeholder="trailer"
              /><input 
                type="text" name="videos_trailers" placeholder="trailer"
              />
            </div>
            <div>
              <input 
                type="text" name="videos_cutscenes" placeholder="cutscene"
              /><input 
                type="text" name="videos_cutscenes" placeholder="cutscene"
              />
            </div>
          </div>
        </div>
        <div>
          <p>Photos</p>
          <div style={{display: 'flex'}}>
            <div>
              <input 
                type="text" name="photos_poster" placeholder="poster"
              /><input 
                type="text" name="photos_poster" placeholder="poster"
              />
            </div>
            <div>
              <input 
                type="text" name="photos_cutscenes" placeholder="cutscene"
              /><input 
                type="text" name="photos_cutscenes" placeholder="cutscene"
              />
            </div>
          </div>
        </div>
        <input 
          type="submit"
        />
      </form>

      <Carousel
          responsive={responsive}
          draggable={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
        <div>Item 11</div>
        <div>Item 12</div>
        <div>Item 13</div>
      </Carousel>
    </>
  );
}

export default App;
