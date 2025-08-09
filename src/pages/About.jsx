import React from "react";

const aboutSections = [
  {
    title: "Welcoming.",
    description:
      "The art world can seem intimidating and inaccessible on both sides — creator and consumer. We aim to change that by bringing multiple art forms into one space and presenting them in an informal way.",
  },
  {
    title: "Diverse.",
    description:
      "All are encouraged to participate, regardless of race, age, gender identity, sexuality, religion, disability or economic status. Let’s leave our privilege at the door.",
  },
  {
    title: "Accessible.",
    description:
      "Non-exploitative. We do not charge artists a single cent to share or sell their work.",
  },
  {
    title: "Inclusive.",
    description:
      "Unform is a space for everyone. Dublin can be alienating, especially in the arts. We want to unform that and rebuild it for everyone.",
  },
  {
    title: "No experience required.",
    description:
      "We want to help artists sell their first piece of art, help people buy their first piece of art, and create spaces for people to share their work with new audiences.",
  },
];

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center"></div>
      </div>

      {aboutSections.map((item, index) => (
        <section
          key={index}
          className={`section-2${
            index === aboutSections.length - 1 ? "-bottom" : ""
          }`}
        >
          <div className="row">
            <div className="col text-center">
              <div className="paragraph mx-auto mt-2">
                <span style={{ color: "black" }}>{item.title}</span>
                {item.description}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default About;
