import { Field, Formik, Form, FormikHelpers } from 'formik'
import css from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';

type Props = {
    handleChangeQuery: (search: string) => void ;
}

type initialValues = {
  query: string;
};


const SearchBar = ({ handleChangeQuery }: Props) => {
    const initialValues: initialValues = {
        query: '',
    }

    const handleSubmit = (values: initialValues, options: FormikHelpers<initialValues>) => {
        const v = values.query.trim()
        if (!v) {
            toast.error('Empty query')
            //alert('error')
            return;
        }
     console.log(values);
     handleChangeQuery(v)
     options.resetForm();
    }

    return(
        <header className={css.box}> 
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={css.form}>
                <Field className={css.field} name='query' placeholder='your query'/>
                <button className={css.btn} type='submit'>Search</button>
                <Toaster />
            </Form>
        </Formik>
        </header>
    )
}

export default SearchBar;