import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-4 pb-3 text-center text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="space-y-1">
        <p className="text-base font-semibold text-neutral-200">Here&apos;s my social links to connect and stay in touch.</p>
        <div className="flex flex-wrap justify-center gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} className="w-5 h-5 transition-transform hover:scale-110 filter brightness-0 invert" alt={social.name} />
          </a>
        ))}
      </div>
      <p>©Deepkumar Das. All rights reserved.</p>
    </section>
  );
};

export default Footer;
