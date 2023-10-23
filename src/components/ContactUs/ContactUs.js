import React from 'react'
import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion'
import HText from '../common/HText/HText'
import { useForm } from 'react-hook-form'

function ContactUs({
  setSelectedPage
}) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  const inputStyle = "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div
        onViewportEnter={() => setSelectedPage("contactus")}
      >
        <div>
          <HText>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className='my-5'>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </div>

        <div className='mt-10 jusify-center gap-8 md:flex'>
          <div className='mt-10 basis-3/5 md:mt-0'>
            <form
              target='_blank'
              onSubmit={onSubmit}
              method='POST'
              action='https://formsubmit.co/s0935959625@gmail.com'
            >
              <input
                className={inputStyle}
                type="text"
                placeholder='NAME'
                {...register("name", {
                  required: true,
                  maxLength: 100
                })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === 'required' && "This field is required."}
                  {errors.name.type === 'maxLength' && "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyle}
                type="text"
                placeholder='EMAIL'
                {...register("email", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === 'required' && "This field is required."}
                  {errors.email.type === 'pattern' && "Invalid email address"}
                </p>
              )}

              <textarea
                className={inputStyle}
                rows={4}
                cols={50}
                placeholder='MESSAGE'
                {...register("message", {
                  required: true,
                  maxLength: 2000
                })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === 'required' && "This field is required."}
                  {errors.message.type === 'maxLength' && "Max length is 2000 char."}
                </p>
              )}

              <button
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div className='relative mt-16 basis-2/5 md:mt-0'>
            <div className='md:before:content-evolvetext before:absolute before:-bottom-20 before:-right-10 before:z-[1] w-full'>
              <img className="w-[80%]" src={ContactUsPageGraphic} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
