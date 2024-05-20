import { Social, social } from "@/utils/contactData";

const ContactInfo = () => {
  return (
    <div className="mx-auto mb-10">
      {social.map((soc: Social, idx: number) => (
        <a
          href={soc.link}
          target="_blank"
          key={idx}
          className="flex justify-start items-center my-5"
        >
          <div className="text-3xl md:text-5xl mr-5 p-2 rounded border-dashed border-4 border-gBlue">
            {soc.icon}
          </div>
          <div>
            <p className=" capitalize text-xl font-bold">{soc.name}</p>
            <p className="text-[#ADB7BE]">{soc.place}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
