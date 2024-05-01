import Image from "next/image";

const ExpField = ({
  title,
  techs,
}: {
  title: string;
  techs: { name: string; img: any }[];
}) => {
  return (
    <div className="mb-3 bg-gBlue bg-opacity-[0.07] rounded p-1">
      <p className="text-center text-xl font-bold capitalize">{title}</p>
      <div className="py-2 grid grid-cols-3 lg:grid-cols-5 grid-flow-row gap-2 text-center">
        {techs.map((tech: { name: string; img: string }) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-between h-[80px] m-4"
          >
            <div className="h-[80%]">
              <Image
                src={tech.img}
                alt={tech.name}
                width={200}
                className="w-[50px] md:w-[60px]"
              />
            </div>
            <div
              className={
                "text-gLightBlue flex justify-center items-center h-[20%] capitalize text-sm md:text-base"
              }
            >
              <p>{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpField;
