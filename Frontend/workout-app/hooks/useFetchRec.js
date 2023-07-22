import { useState, useEffect } from "react";
import axios from 'axios'


const useFetchRec = (muscleTarget, type) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(null)

    let options


    if (type === 'Push' || type === 'Pull') {
         options = {
            method: 'GET',
            url: 'https://musclewiki.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': '283e420b24mshbe984fadbba3a0dp1ffa69jsn6e26686184d9',
                'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
              },
            params: {
              muscle: muscleTarget,
              force: type,
            },
          };
    } else {
         options = {
            method: 'GET',
            url: 'https://musclewiki.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': '283e420b24mshbe984fadbba3a0dp1ffa69jsn6e26686184d9',
                'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
              },
            params: {
              muscle: muscleTarget
            },
          };
    }

      
    
      const fetchData = async () => {
        setisLoading(true)
        try {
            let sl
            const response = await axios.request(options)

            if (response.data.length > 30) {
                sl = response.data.slice(0,30)
            }
    
            setData(sl)
    
            setisLoading(false)
    
        } catch(error) {
            setError(error)
            alert(error)
        } finally {
            setisLoading(false)
        }
      }

      useEffect(() => {
        fetchData()
      }, [])


      const refetch = () => {
        setisLoading(true)
        fetchData()
      }


    return {data, isLoading, error, refetch}
}

export default useFetchRec

