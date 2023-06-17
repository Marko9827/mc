'use client'
 
import { useRouter } from "next/navigation";
import Logo from "@/app/components/navbar/logo"; 
 
  

const div_loading = () => {
    const router = useRouter();

    return (
        <div className="laoding">
      <Logo />
        </div>
    )
}

export default div_loading;