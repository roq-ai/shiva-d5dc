import * as yup from 'yup';

export const expertValidationSchema = yup.object().shape({
  name: yup.string().required(),
  availability: yup.string().required(),
  organization_id: yup.string().nullable(),
});
