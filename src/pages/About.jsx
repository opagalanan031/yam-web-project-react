import React from 'react';
import Sidebar from '../components/Sidebar';

function About() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='h-max w-full'>
        <div className='container my-20 mx-auto'>
          <div className='container'>
            <header className='text-4xl font-bold text-center mb-5'>
              Welcome to the Young Adults Ministry!
            </header>
            <img
              src='https://parkforestbaptist.org/wp-content/uploads/2019/10/YAM-Graphic-e1571669386998.jpg'
              alt='yam'
              className='rounded-lg mx-auto sm:w-4/5 lg:w-3/4 xl:w-3/5'
            />
          </div>
          <div className='container mx-auto mt-10 w-3/4 xl:w-3/5'>
            <div className='mb-10'>
              <header className='text-xl font-bold text-center mb-2'>
                Come and be a part of our family!
              </header>
              <p className='text-center'>
                Looking forward to increasing your faith and spirituality? Take
                the time to escape the worries of adulthood, even just for a
                while. Meet and spend time with your fellow peers, go out and
                enjoy, while keeping the faith at the same time!
              </p>
            </div>
            <div className='mb-10'>
              <header className='text-xl font-bold mb-2'>
                Purpose & Overview
              </header>
              <hr />
              <div className='lg:flex lg:flex-row text-justify mt-2 lg:space-x-7'>
                <div className='lg:basis-1/2'>
                  <p>
                    The St. Aloysius Young Adult Ministry is a community
                    composed of people who are at their early stages of
                    adulthood, committed to keep the faith and significance of
                    remaining as a part of the parish community of St. Aloysius.
                    This ministry aims to preserve the presence of young adults
                    who are attending St. Aloysius Parish Church, further
                    building up a bigger family of peers while also
                    strengthening the faith of each individual and providing
                    sincere support in any personal needs and concerns.
                  </p>
                  <p>
                    Though adulthood is known to be a period of transition in
                    each person’s lives due to the upcoming responsibilities to
                    our own families, education, and careers, it is also
                    important for those who are in the Catholic faith to
                    remember the roots of our faith and the reason why we are
                    all here today: our Lord Jesus Christ.
                  </p>
                </div>
                <div className='lg:basis-1/2'>
                  <p>
                    With this ministry, individuals who share common struggles
                    and responsibilities can get the chance to gather to share
                    each other’s experiences and provide any support for each
                    member of the ministry family. This is a way of knowing and
                    discovering that you are not alone; a way of finding comfort
                    in each other’s company and away from the struggles of life,
                    and reminding you that you are a vital part of this
                    Universal Church.
                  </p>
                  <p>
                    Thus, through a series of fun and engaging social activities
                    and gatherings with fellow young adults held twice a month,
                    along with participating in our parish community events, we
                    could keep our presence felt, as well as present our service
                    to the Lord, get together as one family, spread the joy to
                    each other, provide mutual care and support, and captivate
                    other fellow young adults to be a part of our family.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <header className='text-xl font-bold mb-2'>Membership Eligibility</header>
              <hr />
              <p className='mt-2 text-justify'>
                Youth and young adults between the ages of 20-30 years old are called to join our ministry. If you are a
                young adult, who has time to spare, or even if you are held up by the difficult and hectic
                responsibilities of adulthood but are eager to come back to your spiritual home, heed the call! All are
                welcome to be a part of our spiritual family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;