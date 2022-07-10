import FormSuccess from "./FormSuccess/FormSuccess";
import { useState, useRef } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from 'yup';

export default function Form() {
  const [isSubmitForm, setisSubmitForm] = useState(false);
  const userName = useRef();
  const validationsSchema = yup.object().shape({
    name: yup.string().min(3, 'Имя содержит менее 3 символов').required('Пожалуйста, заполните это поле'),
    email: yup.string().email(' Введите корректный email').required('Пожалуйста, заполните это поле'),
    theme: yup.string().max(20, 'Не более 20 символов'),
    comment: yup.string().min(10, 'Поле содержит менее 10 символов').max(100, 'Поле содержит более 100 символов')

  })

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          theme: '',
          comment: ''
        }}
        validateOnBlur
        onSubmit={({ name, email, theme, comment }) => {
          const data = {
            'Имя пользователя': name,
            'Email': email,
            'Тема': theme,
            'Комментарий': comment,
          };
          const entries = Object.entries(data);
          const values = entries.map(value => `<b>${value[0]}</b>: ${value[1]}`)
          const string = values.join('%0A');

          axios.post(`https://api.telegram.org/bot5006130607:AAEa6S-01f4GgL-TOymchCQgfQsFI10y2UM/sendMessage?chat_id=-705519397&parse_mode=html&text=${string}`)
            .then((response) => {
              if (response.status === 200) {
                setisSubmitForm(!isSubmitForm);
              }
            })
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={isSubmitForm ? "hidden" : "contacts-form"}>
            <input
              name={'name'}
              ref={userName}
              onChange={handleChange}
              className="input"
              placeholder="Ваше имя*"
              type="text"
              onBlur={handleBlur}
              value={values.name}
              autoComplete='off'
            />
            <label htmlFor={"name"}>{touched.name && errors.name && <span className="error">{errors.name}</span>}</label>
            <input
              name={'email'}
              onChange={handleChange}
              className="input"
              placeholder="Ваш email*"
              type="text"
              onBlur={handleBlur}
              value={values.email}
              autoComplete='off'
            />
            <label className="label-error" htmlFor={"email"}>{touched.email && errors.email && <span className="error">{errors.email}</span>}</label>
            <input
              name={'theme'}
              onChange={handleChange}
              className="input"
              placeholder="Тема"
              type="text"
              onBlur={handleBlur}
              value={values.theme}
              autoComplete='off'
            />
            <label className="label-error" htmlFor={"theme"}>{touched.theme && errors.theme && <span className="error">{errors.theme}</span>}</label>
            <textarea
              name={'comment'}
              onChange={handleChange}
              className="input"
              placeholder="Ваше сообщение"
              type="text"
              onBlur={handleBlur}
              value={values.comment}
              autoComplete='off'
            />
            <label className="label-error" htmlFor={"comment"}>{touched.comment && errors.comment && <span className="error">{errors.comment}</span>}</label>
            <button type={'submit'} className="btn contacts-button" disabled={!isValid}>Отправить</button>
          </form>
        )}
      </Formik>
      <FormSuccess stateForm={isSubmitForm} name={userName} />
    </>
  );
}




