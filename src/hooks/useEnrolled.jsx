import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useEnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled-classes?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [enrolledClasses, refetch]

}
export default useEnrolledClasses;