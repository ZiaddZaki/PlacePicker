import { useState, useEffect } from "react";
export default function ProgreesBar({timer}){
    const [remainigTime, setRemainigTime] = useState(timer)
    useEffect(()=>{
        const interval =setInterval(() => {
          setRemainigTime(prevTime => prevTime - 10)
        }, 10);
    
        return() => {
          clearInterval(interval)
        }
      },[])

      return <progress value={remainigTime} max={timer}/>
}