import React, { useState } from 'react'
import { AxiosError } from 'axios';
import { MdInfo } from 'react-icons/md';
import api from '../../services/api';
import { 
    Container, 
    SearchButton, 
    SearchContainer, 
    SearchForm, 
    SearchInput, 
    SearchLabel, 
    SearchText, 
    WarnMessage
} from './styles'

export default function SearchUser() {
    const [search, setSeacrh] = useState('');
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        
        api.get(`/users/${search}`)
        .then(async res => {
            await localStorage.setItem('user_data', JSON.stringify(res.data));
            setError(false);
            window.location.href = '/repos'
        })
        .catch((err: AxiosError) => {
            if (err.response?.status === 404) {
                setError(true);
            }
        });
    }

    return (
        <Container>
            <SearchContainer>
                <img src='/images/principal.svg' alt='Searching' />
                <SearchText>
                    <h1>Procure usuários no GitHub</h1>
                    <p>Pesquise o nome de usuários do GitHub e veja seus repositórios!</p>
                </SearchText>
            </SearchContainer>
            <SearchForm onSubmit={handleSubmit}>
                <h1> Pesquise usuário com o nome </h1>
                <SearchLabel htmlFor='user'> Usuário </SearchLabel>
                <SearchInput 
                    type='text'
                    name='user' 
                    placeholder='Digite o nome do usuário' 
                    onChange={(e) => setSeacrh(e.target.value)}
                    theme={{ borderColor: error ? 'var(--red)' : 'var(--black)' }}
                />
                {error && <WarnMessage> <MdInfo size={30} color='var(--red)' /> Usuário não encontrado! </WarnMessage>}
                <SearchButton type='submit'> Procurar </SearchButton>
            </SearchForm>
        </Container>
    )
}
