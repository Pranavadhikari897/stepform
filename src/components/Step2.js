import React from 'react';
import { useForm } from 'react-hook-form';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => nextStep();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Address Details</h2>
      <div>
        <label>Address</label>
        <input
          defaultValue={values.address}
          {...register('address', { required: true })}
          onChange={handleChange('address')}
        />
        {errors.address && <span>This field is required</span>}
      </div>

      <div>
        <label>City</label>
        <input
          defaultValue={values.city}
          {...register('city', { required: true })}
          onChange={handleChange('city')}
        />
        {errors.city && <span>This field is required</span>}
      </div>

      <div>
        <label>Postal Code</label>
        <input
          defaultValue={values.postalCode}
          {...register('postalCode', { required: true })}
          onChange={handleChange('postalCode')}
        />
        {errors.postalCode && <span>This field is required</span>}
      </div>

      <button onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
