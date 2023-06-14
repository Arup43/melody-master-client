import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useAllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-classes`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [allClasses, refetch]

}
export default useAllClasses;