import gsap from "gsap";
import { useEffect } from "react";

export const  useLinkDownfall=(arr)=>{
        useEffect(()=>{
            const el=arr.map(item=>item.current)

            gsap.fromTo(el,{
                y:-500
            },{
                y:0,
                duration:1,
                ease:"power4.out",
                stagger:0.2

            })
        },[arr])
}

export const useLineForward=(arr)=>{
    useEffect(()=>{
        const el=arr.map(item=>item.current)
        gsap.fromTo(el,{
            width:0,
        },{
            width:"100%",
            duration:2,
            delay:1,
            ease:"power4.out",
            stagger:0.2
        
        }
            
            )
    })
}