import { Element } from "react-scroll";
import { FaCity } from 'react-icons/fa';
import PageTitle from "../common/PageTitle";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ChevronDown from "../common/chevronDown/ChevronDown";
import { timelines } from './data';

import 'react-vertical-timeline-component/style.min.css';
import "./experience.scss";

const Experience = () => {
  return (
    <Element className="experience h-100" name="experience">
      <PageTitle title="Work Experience" subtitle="Timelines" />
      <div className="wrapper">
        <VerticalTimeline className="vertical-timeline">
          {timelines.map(timeline => (
            <VerticalTimelineElement
              key={timeline.id}

              date={timeline.date}
              dateClassName="date"
              icon={<FaCity color="white" />}
              iconStyle={{ background: "#444" }}
            >
              <h3>{timeline.title}</h3>
              <h5>{timeline.location}</h5>
              <p>{timeline.description}</p>
              <div className="link-container">
                {timeline.links.map(link => <a key={link.id} href={link.src} target="_blank" rel="noreferrer">{link.name}</a>)}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <ChevronDown navigateTo="gallery" color="#444" size={30} blinking />
    </Element>
  );
};

export default Experience;
