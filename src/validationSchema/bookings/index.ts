import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  location: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  service_id: yup.string().nullable(),
  expert_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
