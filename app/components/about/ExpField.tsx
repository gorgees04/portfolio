const ExpField = ({ title, techs }: { title: string; techs: string[] }) => {
  return (
    <div className="m-5">
      <p className="text-center text-xl font-bold my-2 capitalize">{title}</p>
      <ul className="p-5 grid grid-cols-3 grid-flow-row gap-2 text-center">
        {techs.map((exp: string) => (
          <li key={exp} className={"text-gLightBlue"}>
            {exp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpField;
