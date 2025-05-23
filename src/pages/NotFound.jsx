import React from 'react'
import Button from '../Components/Button'
import { IoMdHome } from 'react-icons/io'
import { isCookie } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='bg-background w-screen min-h-screen text-center'>
            <div className='__container flex flex-col justify-center items-center min-h-screen gap-5'>
                <div>
                    <h2 className='text-8xl text-theme'>Oops!</h2>
                </div>
                <div className='text-3xl text-primary font-heading'>
                    <h4>404 - Page introuvable</h4>
                    <div className='text-center text-secondary text-base'>
                        <p>
                            Peut-être avez-vous suivi un lien cassé, ou entré une URL qui n'existe pas. <br />
                            Pas de panique, vous pouvez revenir à l’accueil et continuer votre visite !
                        </p>
                    </div>
                </div>
                <div>
                    <Button label='Page d’accueil' href='/#accueil' icon={<IoMdHome />} iscolored />
                </div>
            </div>
        </div>
    )
}

export default NotFound