import { useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
        <>
            {(!isVisible)?<button className="border bg-green-400" onClick={()=>setIsVisible(true)}>SHOW</button> : (null)}
            {(isVisible)?<button className=" ml-9border bg-green-500" onClick={()=>setIsVisible(false)}>HIDE</button> : (null)}
            {(isVisible)?(<h1>Hello</h1>):(null)}
        </>
  );
};

export default Contact;
