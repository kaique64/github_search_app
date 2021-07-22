import React from 'react'
import { NotFound, NotFoundInfo, NotFoundText } from './styles'

export default function NotFound404() {
    return (
        <NotFound>
            <NotFoundInfo>
                <img src='/images/not-found.svg' alt='Not Found' />
                <NotFoundText>
                    <h1> Página não encontrada! </h1>
                    <p> A página que você está procurando não existe </p>
                </NotFoundText>
            </NotFoundInfo>
        </NotFound>
    )
}
