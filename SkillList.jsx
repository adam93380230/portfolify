import React from "react";

const skills = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "JavaScript",
  "Framer Motion",
  "HTML/CSS",
];

export default function SkillList() {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Skills</h3>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg text-gray-700">{skill}</li>
        ))}
      </ul>
    </div>
  );
}
