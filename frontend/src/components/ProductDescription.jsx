import React from "react";

const ProductDescription = () => {
  return (
    <div className="max-padd-container mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eos quas
          sapiente, dolore aliquid corrupti dignissimos ex fugit aperiam neque
          iste illum magni molestias rem quasi ea eum laboriosam dolores! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Aut eos quas
          sapiente, dolore aliquid corrupti dignissimos ex fugit aperiam neque
          iste illum magni molestias rem quasi ea eum laboriosam dolores!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error quam
          alias vel laboriosam laborum sint facere ut fugiat non. Tenetur rem
          facere error recusandae quibusdam? Maxime architecto perspiciatis
          fuga?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
