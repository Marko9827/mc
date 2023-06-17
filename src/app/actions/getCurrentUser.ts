
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nnextauth]'

export default async function getCurrentUser() {

    export async function getSession(){
        return await getServerSession(authOptions);
    }
}