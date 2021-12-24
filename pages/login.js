import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
// WE WILL BE USING NEXTAUTH.JS

const login = ({ providers }) => {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />

            {Object.values(providers).map((provider, i) => {
                return (
                    <div key={i}>
                        <button className="bg-[#18D860] text-white p-5 rounded-lg"
                            onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                            Login with {provider.name}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default login

export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}