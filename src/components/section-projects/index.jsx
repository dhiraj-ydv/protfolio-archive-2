import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Resume">

{/* <div class="col-4 col-6-medium col-12-small">
											<img src="images/pic01.jpg" class="image fit" alt=""></img> */}


      {/* {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))} */}
    </Section>
  );
};

export default SectionProjects;
