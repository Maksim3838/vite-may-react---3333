import{useQuery}from"@tanstack/react-query"
import { functionalUpdate } from "./services/futServices"
import { useState } from "react";


export default function App() {
  const [cliks, clikses] = useState<number>(0)
  const { data, isError, isLoading } = useQuery({
    queryKey: ["cherecter", cliks],
    queryFn: () => functionalUpdate(cliks),
    enabled: cliks > 0, 
staleTime: 60* 1000
  }
  );
  console.log({ data, isError, isLoading });
   
  return (
    <>
      <button onClick={() => clikses((prevClikses) => prevClikses - 1)}>-</button>
      <span>{cliks}</span>
      <button onClick={()=> clikses((prevClikses) => prevClikses+1) }>+</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Ooopss</p>}
      <h1>{data?.name }</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
    </>
  )
}