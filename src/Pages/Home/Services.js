import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';
import Button from '../Shared/Button';

const Services = () => {
  const services = [
    {
      _id: 1,
      cardTitle: 'Fluoride Treatment',
      cardContent:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: fluoride,
    },
    {
      _id: 2,
      cardTitle: 'Cavity Filling',
      cardContent:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: cavity,
    },
    {
      _id: 3,
      cardTitle: 'Teeth Whitening',
      cardContent:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: whitening,
    },
  ];

  return (
    <div className='my-28'>
      <div className='text-center'>
        <h3 className='text-primary text-xl font-bold uppercase'>
          Our Services
        </h3>
        <h2 className='text-4xl'>Service We Provide</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-6'>
        {services.map((service) => (
          <Service
            cardTitle={service.cardTitle}
            cardContent={service.cardContent}
            img={service.img}
          />
        ))}
      </div>
      <div class='card card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={treatment} alt='Movie' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>Exceptional Dental Care, on Your Terms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div class='card-actions justify-start'>
            <Button btnText='Get Started' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
