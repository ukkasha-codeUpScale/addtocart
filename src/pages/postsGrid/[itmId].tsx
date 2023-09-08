import React, { useState } from "react";
import { useRouter } from "next/router";
import ItemsDesc from "@/components/ItemsDesc";
import { ApiDataEntity } from "@/models/data/apidata.entity";

export default function ItmId(props: ApiDataEntity) {
  const [Titems, setTitems] = useState<number>(1);
  const [Tprice, setTprice] = useState<number>()

  return (
    <div className="mt-10 min-h-max ">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2  ">
          <h2 className="mb-4 m-0   text-xl font-extrabold leading-none tracking-tight text-black md:text-xl lg:text-xl dark:text-black">
            {props?.data.title}
          </h2>
         
          <div className="flex justify-center items-center mb-4 bg-gray-700 border-1 border-gray-900 rounded-lg">
            <img
              className="object-contain h-96 m-5 rounded-3xl shadow-md justify-center self-center"
              src={props?.data.image}
              alt={props?.data.title}
            />
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex  flex-col items-center justify-around col-span-1  mt-10">
          <ItemsDesc data={props?.data} setTitems={setTitems} Titems={Titems} Tprice={Tprice} setTprice={setTprice}/>
        </div>
      </div>
{/* related images of this product will be shown here */}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.query.itmId}`
  );
  const data = await res.json();
  console.log(data, "server===========");
  return {
    props: {
      data,
    },
  };
}
