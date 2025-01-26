'use client'
import { getSingleMovie } from "@/services/MovieService/api/singleMovie";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./components/Banner";
export default function Home() {

  useEffect(() => {
    getSingleMovie(1, 10).then(res => console.log(res)
    )
  }, [])
  return (
   <div>
    <Banner/>
   </div>
  );
}
