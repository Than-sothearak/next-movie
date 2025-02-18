export const Button = ({label, Icon}) => {
  return (
    <button className="cursor-pointer bg-red-600 shadow-lg hover:shadow-red-600/50 hover:bg-white hover:text-red-600 hover:scale-110 ease-in-out duration-300  border-red-800 text-white flex justify-center gap-4 items-center text-xl leading-none px-7 py-4 border rounded-full ">
      {label}
      {Icon && <Icon size={28} />}
    </button>
  );
};
