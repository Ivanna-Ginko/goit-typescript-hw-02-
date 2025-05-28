import { useState, useEffect } from 'react'
import './App.css'
import ImageGallery from './components/imageGallery/ImageGallery'
import { fetchResults } from './services/api'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import toast, { Toaster } from 'react-hot-toast';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'

function App() {


const [results, setResults] = useState([])
const [query, setQuery] = useState('')
const [page, setPage] = useState(1)
const [isLoading, setIsLoading] = useState(false);
const [totalPages, setTotalPages] = useState ();
const [isError, setIsError] = useState (false)
const [modalIsOpen, setModalIsOpen] = useState(false);
const [selected, setSelected] = useState (null)

function openModal() {
  setModalIsOpen(true);
}

function closeModal() {
  setModalIsOpen(false);
}

const handleClick = (imgUrl) => {
  setSelected(imgUrl);
  openModal();
};
 
   useEffect (()=>{
      const abortController = new AbortController();
      const getData = async() => {
        try {
          if(query){
            setIsLoading(true);
            const data = await fetchResults(query, page, abortController.signal);
            setResults(prev => [...prev, ...data.results]);
            setTotalPages(data.total_pages)
          }
        } catch (error) {
          console.log(error);
          setIsError(true);
          toast.error('Please, try again')
        } finally {
          setIsLoading(false);
        }
     }
    getData();
    return () => {
      abortController.abort();
    }
   }, [query, page])

   const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setResults([]);
    setPage(1);
   }

   const nextPage = ()  =>{
      setPage(page+1)
   }
  return (
  <>
    <SearchBar handleChangeQuery={handleChangeQuery}/>
    {isError && <ErrorMessage />}
    <Toaster />
    <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} selected={selected}/>
    <ImageGallery results = {results} handleClick={handleClick}/>
    {isLoading && <Loader />}
    {page < totalPages && !isLoading && <LoadMoreBtn nextPage={nextPage} page={page}/>}

  </>
  )
}

export default App
