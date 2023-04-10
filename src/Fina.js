import React from "react";
import meditation from "./images/meditation.png";

function Fina(props) {
  let content = {
    Castellano: {
      title: "Conoce a Fina",
      bio: "CASTELLANO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at viverra dui. Vestibulum nec egestas ipsum, ac ultricies magna. Aenean nec ornare lectus. Vestibulum vulputate nulla at pulvinar ullamcorper. Morbi tellus risus, finibus id ante eu, finibus consectetur nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id interdum dolor. Suspendisse vestibulum aliquet imperdiet. Praesent et dolor quam. Cras vel scelerisque dui. Integer consectetur feugiat enim, id imperdiet magna sollicitudin non.",
    },
    English: {
      title: "Meet Fina",
      bio: "ENGLISH Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at viverra dui. Vestibulum nec egestas ipsum, ac ultricies magna. Aenean nec ornare lectus. Vestibulum vulputate nulla at pulvinar ullamcorper. Morbi tellus risus, finibus id ante eu, finibus consectetur nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id interdum dolor. Suspendisse vestibulum aliquet imperdiet. Praesent et dolor quam. Cras vel scelerisque dui. Integer consectetur feugiat enim, id imperdiet magna sollicitudin non.",
    },
  };
  props.language === "English"
    ? (content = content.English)
    : (content = content.Castellano);
  return (
    <div id="fina">
      <div className="row m-5">
        <div className="col-lg">
          <h1>{content.title}</h1>
          <p>{content.bio}</p>
        </div>
        <div className="col-lg text-center my-auto">
          <img
            src={meditation}
            className="img-fluid clases-image"
            alt="illustration of woman meditating"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Fina;
