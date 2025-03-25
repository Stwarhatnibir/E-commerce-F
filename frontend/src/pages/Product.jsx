import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-8 sm:gap-8 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="w-full sm:w-[70%] flex flex-col-reverse sm:flex-row gap-3">
          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal w-full sm:w-[20%] gap-2">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)} // Change main image on click
                className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity object-cover rounded-lg"
                alt={`Product Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[60%]">
            <img
              src={image}
              alt="Main Product"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/*------------ product info---------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return policy with in 7 days.</p>
          </div>
        </div>
      </div>
      {/*description and review section */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border px-5 py-3 text-sm">description</b>
          <p className="border px-5 py-3 text-sm">review {122}</p>
        </div>
        <div className="flex flex-col border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam
            dolorum adipisci dolore vel, ab officiis voluptate eius, soluta hic
            eaque corporis optio debitis blanditiis eum! Id, inventore ratione.
            Beatae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            tempora, nulla harum ducimus alias modi nostrum quasi pariatur nemo
            dignissimos accusantium rem. Ea quia sunt, temporibus ducimus velit
            officia deserunt!
          </p>
        </div>
      </div>
      {/*display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
