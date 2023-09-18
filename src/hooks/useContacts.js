import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useContacts = () => {
 
    const {refetch, data:contacts=[] } = useQuery({
        queryKey: ['contacts'],
        queryFn: () =>
          axios.get(`https://contact-management-server-eight.vercel.app/contacts`)
          .then(
            res => {return res.data}
          ),
      })
      return [contacts, refetch ]
};

export default useContacts;