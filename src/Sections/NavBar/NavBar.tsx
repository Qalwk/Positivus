
import Button from '../../Button/Button'
import Logo from "../../../public/Logo.svg"

interface NavLink {
  label: string;
}

const NavBar: React.FC = () => {

  const navLinks: NavLink[] = [
    { label: 'About us' },
    { label: 'Services' },
    { label: 'Use Cases' },
    { label: 'Pricing' },
    { label: 'Blog' },
  ];
  
    return (
      <div className="fixed py-4 right-1/2 translate-x-1/2 z-10 content flex items-center justify-between bg-white">
        <div className='flex flex-row items-center gap-[13px]'>
          <img src={Logo} alt="logo" />
          <p className='font-medium text-[32px] m-0'>Positivus</p>
        </div>
        <div className='flex flex-row gap-[40px] items-center'>
          <ul className='flex flex-row gap-[40px]'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link.label}</a>
              </li>
            ))}
          </ul>
          <Button text="Request a quote" color={true} />
        </div>
      </div>
  );
};

export default NavBar
