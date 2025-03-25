import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            dolores facere voluptatum vel velit voluptatem iure libero cumque
            maxime! Cum, iusto. Omnis veritatis autem id neque necessitatibus
            ducimus ipsum tempora.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            modi! Suscipit, harum. Quae nisi laborum, nam quos aliquid
            praesentium sapiente molestias ea natus quisquam accusamus, aliquam
            hic suscipit officia veritatis.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            delectus quaerat, deserunt maiores est, dolor adipisci corporis
            incidunt eius, blanditiis numquam vero? Repellat mollitia ullam
            rerum natus? Ab, facere dolor!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Best Quality</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, autem
            eum! Consequuntur, accusantium? Dolorum natus voluptate voluptatem.
            Ab ducimus facilis nostrum soluta quae eligendi! Deserunt corporis
            tempore nam aliquid recusandae.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, autem
            eum! Consequuntur, accusantium? Dolorum natus voluptate voluptatem.
            Ab ducimus facilis nostrum soluta quae eligendi! Deserunt corporis
            tempore nam aliquid recusandae.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, autem
            eum! Consequuntur, accusantium? Dolorum natus voluptate voluptatem.
            Ab ducimus facilis nostrum soluta quae eligendi! Deserunt corporis
            tempore nam aliquid recusandae.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
