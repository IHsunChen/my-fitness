import React from 'react'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { MotionConfig } from 'framer-motion'
import { motion } from 'framer-motion'
import HText from '../common/HText/HText'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ActionButton from '../common/ActionButton/ActionButton'
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png'

const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
]

const childrenVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function Benefit({ icon, title, description, setSelectedPage }) {
  return (
    <motion.div
      className='mt-5 border-2 rounded-md border-gray-100 px-5 py-16 text-center'
      variants={childrenVariant}
      initial="hidden"
      whileInView="visible"
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
          {icon}
        </div>
      </div>
      <h4 className='font-bold'>{title}</h4>
      <p className='my-3'>{description}</p>
      <AnchorLink
        className='text-sm font-bold text-primary-500 underline'
        onClick={() => setSelectedPage("contactus")}
        href={`#contactus`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  )
}

function Benefits({
  setSelectedPage
}) {
  return (
    <section
      id="benefits"
      className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage("benefits")}
      >
        {/* Header */}
        <motion.div
          className='md:my-5 md:w-3/5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className='md:flex items-center justify-between gap-8 mt-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => {
            return (<Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />)
          })}
        </motion.div>

        {/* Graphic and Description */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* Graphic */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="" />
          {/* Descritpion */}
          <div>
            {/* Title */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            {/* DESC */}
            <div>
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
            {/* Button */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton
                  setSelectedPage={setSelectedPage}
                >
                  Join NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
