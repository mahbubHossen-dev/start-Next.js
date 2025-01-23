import Container from '@/components/Container';
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// import { useSession } from '@kinde-auth/nextjs';

const page = async () => {
    // const { getUser } = getKindeServerSession()
    // const user = await getUser()

    // const { data: session } = useSession();
    // console.log(session)
    // if (!session) {
    //     return (
    //         <div>
    //             You must be logged in to view this page.
    //         </div>
    //     );
    // }


    return (
        <div>
            <Container>
                <div>
                    <h3>Welcome to your profile!</h3>

                </div>
            </Container>
        </div>
    );
};

export default page;