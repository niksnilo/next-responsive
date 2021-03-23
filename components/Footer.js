const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white">
      <div className="flex flex-col md:flex-row text-center md:text-left justify-around p-6">
        <div className="mb-5 md:md-0">
          <p className="font-bold">Support</p>
          <ul className="leading-relaxed text-sm">
            <li>
              <a className="underline" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="underline" href="#">
                Documentation
              </a>
            </li>
            <li>
              <a className="underline" href="#">
                Guide
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-5 md:md-0">
          <p className="font-bold">Pages</p>
          <ul className="leading-relaxed text-sm">
            <li>
              <a className="underline" href="#">
                About
              </a>
            </li>
            <li>
              <a className="underline" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="underline" href="#">
                Work
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-5 md:md-0">
          <p className="font-bold">Subscribe to the newsletter</p>
          <div className="flex flex-col md:flex-row justify-start my-2">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="py-1 px-2 rounded mb-2 md:mb-0 md:mr-2"
            />
            <button className="rounded bg-gray-800 px-4 py-2">Suscribe</button>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-center p-1">
        <span className="text-white text-sm opacity-90">
          Made with &hearts; by Niks Nilo &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
