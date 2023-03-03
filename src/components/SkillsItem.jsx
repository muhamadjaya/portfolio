import React from "react";

const SkillsItem = ({ title, icon, description }) => {
  return (
    <div className="flex items-center justify-between flex-row bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5 px-8">
      <div className="text-gray-800 dark:text-gray-300 w-11 h-11">{icon}</div>
      <div>
        <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SkillsItem;
