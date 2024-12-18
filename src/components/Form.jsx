// import { allServices } from "../constants";
// import { BiCaretRight } from "react-icons/bi";

const Form = () => {
  //   const [dropdownOpen, setDropdownOpen] = useState(false);
  //   const [selectedService, setSelectedService] = useState(allServices[0].title);
  //   const dropdownRef = useRef(null);

  //   useEffect(() => {
  //     // Handler for clicking outside of the dropdown
  //     const handleClickOutside = (event) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         setDropdownOpen(false); // Close the dropdown
  //       }
  //     };

  //     // Add event listener
  //     document.addEventListener("mousedown", handleClickOutside);

  //     // Cleanup event listener on component unmount
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);
  return (
    <div data-aos="fade-left" className="flex flex-col items-start gap-3 group">
      <div className="bg-gradient-to-b from-background to-background rounded-2xl w-full p-7">
        <h2 className="text-2xl font-medium">Get In Touch</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-3 mt-3"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="">
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  border"
                required
                autoComplete="off"
                placeholder="Name"
              />
            </div>
            <div className="">
              <input
                type="email"
                className="w-full outline-none p-3 rounded-lg  border"
                required
                autoComplete="off"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="">
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  border"
                required
                autoComplete="off"
                placeholder="Subject"
              />
            </div>
            <div className="">
              <input
                type="tel"
                className="w-full outline-none p-3 rounded-lg  border"
                autoComplete="off"
                placeholder="Phone Number"
              />
            </div>
          </div>
          {/* <div className="flex flex-col relative" ref={dropdownRef}>
            // <label className="text-white">Service You Are Interested In</label>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-3 bg-background rounded-lg cursor-default flex justify-between items-center"
            >
              {selectedService}
              <BiCaretRight
                className={`${
                  dropdownOpen && "rotate-90"
                } transition-all duration-200 text-2xl text-primary`}
              />
            </div>
            {dropdownOpen && (
              <div
                name=""
                id=""
                className="outline-none rounded-lg overflow-hidden top-[5rem] absolute bg-gray-50 w-full"
              >
                {allServices.map((item) => (
                  <div
                    key={item.id}
                    className="hover:bg-primary/20 p-3 cursor-pointer"
                    value={item.title}
                    onClick={() => {
                      setSelectedService(item.title);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="">{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div> */}
          <div>
            <textarea
              type="text"
              rows="4"
              placeholder="Message"
              className="w-full outline-none p-3 rounded-lg  "
              required
              autoComplete="off"
            />
          </div>
          <button className="mt-4 primary-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
