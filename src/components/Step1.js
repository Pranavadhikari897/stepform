import React from 'react';
import { useForm } from 'react-hook-form';

const Step1 = ({ nextStep, handleChange, values }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => nextStep();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Personal Details</h2>
      <div>
        <label>First Name</label>
        <input
          defaultValue={values.firstName}
          {...register('firstName', { required: true })}
          onChange={handleChange('firstName')}
        />
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div>
        <label>Last Name</label>
        <input
          defaultValue={values.lastName}
          {...register('lastName', { required: true })}
          onChange={handleChange('lastName')}
        />
        {errors.lastName && <span>This field is required</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          defaultValue={values.email}
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          onChange={handleChange('email')}
        />
        {errors.email && <span>Invalid email</span>}
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
