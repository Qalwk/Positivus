import Hero_img from "../../../public/Hero.png"
import Button from "../../Button/Button"
import Logos from "./Logos"

const Hero = () => {
  return (
    <div className="flex flex-col pt-[200px] content overflow-x-hidden gap-[70px]">
        <div className="flex gap-5 flex-row items-center justify-between ">
            <div className="flex flex-col gap-[35px] w-[530px]">
                <h1 className="font-medium text-[60px]">Navigating the digital landscape for success</h1>
                <p className="w-[500px]">Our digital marketing agency helps businesses grow 
                    and succeed online through a range of services including 
                    SEO, PPC, social media marketing, and content creation.</p>
                <Button text="Book a consultation"/>
            </div>
            <img src={Hero_img} alt="" />
        </div>
        <Logos />
    </div>
  )
}

export default Hero
