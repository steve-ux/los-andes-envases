import Producto1 from "../image/_NPH4856.jpg";
import Producto2 from "../image/_NPH4421.jpg";
import Producto3 from "../image/_NPH4654.jpg";
import Producto4 from "../image/_NPH4783.jpg";
import Producto5 from "../image/5.jpg";
import Producto6 from "../image/4.jpg";
import Producto7 from "../image/3.jpg";
import Producto8 from "../image/_NPH4713.jpg";




function Productos() {
  return (
    <div class="child-page-listing">

      <div class="grid-container">
        <article id="3685" class="location-listing">
          <a class="location-title" href="#">
            San Francisco{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
              width="600"
              height="469"
                src={Producto1}
                alt="san francisco"
              />{" "}
            </a>
          </div>
        </article>

        <article id="3688" class="location-listing">
          <a class="location-title" href="#">
            London{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src={Producto2}
                alt="london"
              />{" "}
            </a>
          </div>
        </article>

        <article id="3691" class="location-listing">
          <a class="location-title" href="#">
            New York{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src={Producto3}
                alt="new york"
              />{" "}
            </a>
          </div>
        </article>

        <article id="3694" class="location-listing">
          <a class="location-title" href="#">
            Cape Town{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src={Producto4}
                alt="cape town"
              />{" "}
            </a>
          </div>
        </article>

        <article id="3697" class="location-listing">
          <a class="location-title" href="#">
            Beijing{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src={Producto5}
                alt="beijing"
              />{" "}
            </a>
          </div>
        </article>

        <article id="3700" class="location-listing">
          <a class="location-title" href="#">
            Paris{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src={Producto6}
                alt="paris"
              />
            </a>
          </div>
        </article>
        <article id="3700" class="location-listing">
          <a class="location-title" href="#">
            Egipto{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src={Producto7}
                alt="paris"
              />
            </a>
          </div>
        </article>
        <article id="3700" class="location-listing">
          <a class="location-title" href="#">
            Mendoza{" "}
          </a>

          <div class="location-image">
            <a href="#">
              <img
                width="300"
                height="169"
                src={Producto8}
                alt="paris"
              />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Productos;
