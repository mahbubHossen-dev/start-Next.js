"use client"
import Container from '@/components/Container';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// import { useSession } from '@kinde-auth/nextjs';

const page =  () => {
    const {iseAuthenticated, isLoading} = useKindeBrowserClient()

    if(isLoading){
        return <p className='text-center'>Loading...</p>
    }
    return (
            <div>
                <Container>
                    <div className='text-center'>
                        <h3 className='text-2xl mt-8'>Welcome to your profile!</h3>

                    </div>
                </Container>
            </div>
    );
};

export default page;