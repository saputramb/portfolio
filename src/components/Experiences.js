import { Container } from "react-bootstrap";
import { Timeline, Event } from 'react-trivial-timeline';

export const Experiences = () => {

    const experiencesData = [
        {
            company: 'Ametis Institute',
            title: 'Fullstack and Mobile Developer',
            job: [
                'Creating new features, functionality, and capabilities on the oil and gas company’s website for monitoring operation and production using ReactJS',
                'Creating new features, functionality, and capabilities on the oil and gas company’s mobile applications for operation and production aspect using Flutter',
                'Recommending solutions for a streamlined and user-friendly interface design',
                'Creating API which will be used and integrated between backend, frontend and mobile apps',
                'Developing and maintaining Data Warehouse and Data Mart',
                'Creating scheduler and calculation from Data Warehouse to Data Mart',
                'Scraping data oil price and lifting cost',
            ],
            date: 'Mar 2023 - Present',
            employment: 'Full-time'
        },
        {
            company: 'PT. Wirasena Anagata Yanka',
            title: 'Fullstack and Mobile Developer',
            job: [
                'Creating new features, functionality, and capabilities on the oil and gas company’s website for monitoring operation and production using ReactJS',
                'Creating new features, functionality, and capabilities on the oil and gas company’s mobile applications for operation and production aspect using Flutter',
                'Recommending solutions for a streamlined and user- friendly interface design',
                'Creating API which will be used and integrated between backend, frontend and mobile apps',
                'Developing and maintaining Data Warehouse and Data Mart',
                'Creating scheduler and calculation from Data Warehouse to Data Mart'
            ],
            date: 'Jan 2023 - Mar 2023',
            employment: 'Full-time'
        },
        {
            company: 'PT. Pusparaya Karsa Perdana',
            title: 'Back End and Mobile Developer',
            job: [
                'Creating API which will be used and integrated between backend and mobile apps',
                'Help create new features, maintain codes, and fix issues/errors',
                'Maintain the code quality through code reviews',
                'Help perform testing on applications that are being developed'
            ],
            date: 'Sep 2022 - Oct 2022',
            employment: 'Part-time'
        },
        {
            company: 'PT. Wirasena Anagata Yanka',
            title: 'Back End Developer',
            job: [
                'Creating API which will be used and integrated between backend and frontend',
                'Developing and maintaining Data Warehouse and Data Mart',
                'Creating scheduler and calculation from Data Warehouse to Data Mart'
            ],
            date: 'May 2022 - Aug 2022',
            employment: 'Part-time'
        },
        {
            company: 'M-Knows Consulting',
            title: 'Apps Developer Mentor Assistant of Kampus Merdeka Certified Internship',
            job:
                [
                    'Deliver innovative solutions to drive next-generation user experiences, designs and technologies',
                    'Collaborate with team apps to build mobile application using flutter framework',
                    'Collaborate with team backend to connect applications',
                    'Help create new features, maintain codes, and fix issues/errors',
                    'Maintain the code quality through code reviews',
                    'Help perform testing on applications that are being developed',
                    'Analizing system requirement',
                    'Develop a conceptual model and specification of functional requirements'
                ],
            date: 'Mar 2022 - Dec 2022',
            employment: 'Full-time'
        },
        {
            company: 'M-Knows Consulting',
            title: 'Apps Developer (Kampus Merdeka Certified Internship Batch 1)',
            job: [
                'Deliver innovative solutions to drive next-generation user experiences, designs and technologies',
                'Collaborate with team apps to build mobile application using flutter framework',
                'Collaborate with team backend to connect applications',
                'Help create new features, maintain codes, and fix issues/errors'
            ],
            date: 'Aug 2021 - Feb 2022',
            employment: 'Internship'
        }
    ]

    // const ExperiencesItem = ({ data }) => (
    //     <div className="experience-item">
    //         <div className="experience-item-content">
    //             <span className="tag">
    //                 {data.company}
    //             </span>
    //             <time>{data.date}</time>
    //             <span>
    //                 - {data.employment}
    //             </span>
    //             <p className="title">{data.title}</p>
    //             <ul>
    //                 {data.job.map((number) =>
    //                     <li>
    //                         <p>{number}</p>
    //                     </li>
    //                 )}
    //             </ul>
    //             <span className="circle" />
    //         </div>
    //     </div>
    // );

    const Experiences = () =>
        experiencesData.length > 0 && (
            <div className="experience-container">
            {/* <div> */}
                {/* {experiencesData.map((data, idx) => (
                    <ExperiencesItem data={data} key={idx} />
                ))} */}
                {experiencesData.map((data) => (
                    <Timeline lineColor="black">
                        <Event interval={data.company} title={data.title} subtitle={data.date} subtitleTag={'h5'} lineColor={'#64ffda'} intervalColor={'black'} intervalBackground={'#64ffda'}>
                            <ul>
                                {data.job.map((job) =>
                                    <li>
                                        <p className="job">{job}</p>
                                    </li>
                                )}
                            </ul>
                        </Event>
                    </Timeline>
                ))}
            </div>
        );

    return (
        <section className="experience" id="experience">
            <Container>
                <h2>Where I’ve Worked</h2>
                <Experiences />
            </Container>
        </section>
    )
}
