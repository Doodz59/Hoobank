import { useState ,useEffect} from "react";
import { close, logo, dark_logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import styles from "../../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if(theme === 'dark'){
        document.documentElement.classList.add('dark'); 
    }else{
        document.documentElement.classList.remove('dark');
    }
},[theme]);
const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
};

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
<img src={dark_logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            inline-block relative transition-all
            duration-500
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-500
            dark:before:bg-black 
            before:bg-secondary 
            hover:before:w-full
            hover:before:opacity-100
      ${
              active === nav.title ? "text-white dark:text-black "  : "text-dimWhite dark:text-primary"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <form>
          <label className={`${styles.paragraph} relative flex justify-between items-center p-2 border text-white`}>
Darkmode
<span class="sr-only "> Basculer</span>
<input type="checkbox" className="absolute rounded-full left-0 top-0 w-full h-full peer appearance-none" onClick={handleThemeSwitch}/>
  <span className="bg-gray-500 w-11 h-7 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked: bg-green-500 peer-checked:after:translate-x-4 ease-in-out duration-300 after:duration-300 ml-4">

  </span>

        </label>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;