import React from 'react';
import { useForm } from 'react-hook-form';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => nextStep();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Payment Details</h2>
      <div>
        <label>Card Number</label>
        <input
          defaultValue={values.cardNumber}
          {...register('cardNumber', { required: true })}
          onChange={handleChange('cardNumber')}
        />
        {errors.cardNumber && <span>This field is required</span>}
      </div>

      <div>
        <label>Expiry Date</label>
        <input
          defaultValue={values.cardExpiry}
          {...register('cardExpiry', { required: true })}
          onChange={handleChange('cardExpiry')}
        />
        {errors.cardExpiry && <span>This field is required</span>}
      </div>

      <div>
        <label>CVC</label>
        <input
          defaultValue={values.cardCVC}
          {...register('cardCVC', { required: true })}
          onChange={handleChange('cardCVC')}
        />
        {errors.cardCVC && <span>This field is required</span>}
      </div>

      <button onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step3;
