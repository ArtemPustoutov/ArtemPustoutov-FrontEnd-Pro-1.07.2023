import * as Yup from 'yup'

 export const meetingValidation = Yup.object({
    eventName: Yup.string()
      .required("This field is required")
      .min(3, "Minimum 3 characters"),
    description: Yup.string()
      .required("This field is required")
      .min(10, "Minimum 10 characters"),
    selectedUser: Yup.string().required("This field is required"),
    selectDate: Yup.string()
})