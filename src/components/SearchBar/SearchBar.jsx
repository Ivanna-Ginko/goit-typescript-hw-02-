import { Field, Formik, Form } from 'formik'
import css from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ handleChangeQuery }) => {
    const initialValues = {
        query: '',
    }

    const handleSubmit = (values, options) => {
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