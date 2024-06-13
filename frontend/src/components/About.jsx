import React from "react";
import { TbTruckReturn } from "react-icons/tb";
import about from "../assets/about.png";

const About = () => {
  return (
    <section className="max-padd-container py-12 xl:py-32">
      {/* {container} */}
      <div className="flex flex-col xl:flex-row">
        {/* {left} */}
        <div className="flex-1">
          <h3 className="h3 capitalize">
            Unveiling Our products Key Features!
          </h3>
          <p className="py-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            dolorem eius, alias officia fugiat quia officiis ducimus, molestiae,
            consequuntur placeat nemo error molestias? Quos velit debitis
            reiciendis error vitae aliquam.
          </p>
          <div className="flex flex-col items-start gap-y-4">
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md">
                <TbTruckReturn className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Easy Returns Process</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  assumenda facere recusandae maiores voluptatibus ratione hic.
                  Officia, sit totam? Quas, deleniti saepe qui voluptas quaerat
                  dolores vitae repudiandae inventore recusandae?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {right} */}
        <div>
          <div>
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
