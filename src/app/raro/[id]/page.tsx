"use client";
import { Contador } from "@/components/Contador";
import { useParams,  } from "next/navigation";

export default function PageId() {
  const params = useParams();

  
  return (
    <div>
        <h1>TEST PARA VER CARGAR USEPARAMS DESDE UN MOCK</h1>
      <p>Segun id {params.id}</p>
       <Contador count={Number(params.id)}/> 
    </div>
  );
}
