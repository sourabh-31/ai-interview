function InterviewerBtn({ name, role, selected, onClick }) {
  return (
    <button
      className={`block w-[70%] border-[1px] border-gray-300 px-4 py-3 rounded-lg my-6 bg-white ${
        selected ? "outline outline-2 outline-secondaryColor" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex text-left justify-between items-center">
        <div>
          <p className="font-medium text-lg">{name}</p>
          <p className="text-gray-600 font-light">{role}</p>
        </div>
        <p className="font-medium">EN</p>
      </div>
    </button>
  );
}

export default InterviewerBtn;
