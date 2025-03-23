import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaFacebook} from "react-icons/fa"

const socials = [
    //{ icon: <FaGithub />, path: ""},
    { icon: <FaFacebook />, path: "https://www.facebook.com/agroecologiaGAIA"},
    { icon: <FaYoutube />, path: "https://www.youtube.com/@neagaiacentrosul8168"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/gaia.uergs/"},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
};

export default Social;