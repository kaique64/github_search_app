import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdSearch, MdWarning } from 'react-icons/md';
import api from '../../services/api';
import { 
    GoBackButton,
    KnowMore, 
    Loading, 
    LoadingContainer, 
    ProfileContainer, 
    ProfileInfo, 
    ProfilePhoto, 
    Repos, 
    ReposContainer, 
    SearchButton, 
    SearchRepos, 
    SearchReposForm, 
    SeeGitHub, 
    WarningMessage
} from './styles';

interface IUserData {
    login: string;
    name: string;
    avatar_url: string;
    public_repos: number;
    html_url: string;
    description?: string;
}

export default function Repositories() {
    const [userData, setUserData] = useState<IUserData>();
    const [repositoryFound, setReposFound] = useState<any>({});
    const [repositories, setRepos] = useState([]);
    const [repositoryName, setReposName] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        if (repositoryName.trim() || e.key === 'Enter') {
            api.get(`/repos/${JSON.parse(localStorage.getItem('user_data') as any).login}/${repositoryName}`)
            .then(res => {
                setReposFound(res.data);
                setLoading(false);
                setError(false);
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 404) {
                    setError(true);
                    setLoading(false);
                    setReposFound({});
                }
            })
            setLoading(true); 
        } else {
            setReposFound({});
            setError(false);
            setLoading(false);
        }
    }

    function goBack() {
        history.push('/');
        localStorage.clear();
    }

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('user_data') as any));
        (async () => {
            api.get(`/users/${JSON.parse(localStorage.getItem('user_data') as any).login}/subscriptions`)
            .then(res => { 
                setRepos(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
            setLoading(true);
        })();
    }, []);

    return (
        <>
            <GoBackButton type='button' onClick={goBack}> 
                <MdKeyboardArrowLeft size={50} color='var(--black)' />
            </GoBackButton>
            <ProfileContainer>
                <ProfilePhoto src={userData?.avatar_url} alt='Avatar' />
                <ProfileInfo>
                    <h1> {userData?.name} </h1>
                    <p> <strong> Perfil: </strong> {userData?.login} </p>
                    <p> <strong> Repositórios: </strong> {userData?.public_repos} </p>
                    <SeeGitHub href={userData?.html_url} target='_blank'> Ver GitHub </SeeGitHub>
                </ProfileInfo>
            </ProfileContainer>

            <SearchReposForm onSubmit={handleSubmit}>
                <SearchRepos
                    type='text'
                    placeholder='Pesquise o repositório'
                    value={repositoryName}
                    onChange={(e) => setReposName(e.target.value)}
                    theme={{ borderColor: error ? 'var(--red)' : 'var(--black)' }}
                />
                <SearchButton type='submit'>
                    <MdSearch size={60} color='var(--white)' /> 
                </SearchButton>
            </SearchReposForm>

            {Object.keys(repositoryFound).length === 0 && error && !loading && (
                <WarningMessage>
                    <MdWarning size={40} color='var(--second-gray)' />
                    <p> Nenhum repositório encontrado! </p>
                </WarningMessage>
            )}

            {Object.keys(repositoryFound).length !== 0 && (
                <ReposContainer>
                    <Repos>
                        <h1> {repositoryFound.name} </h1>
                        {repositoryFound.description ? (
                            <>
                                <h2> Sobre </h2>
                                <p> {repositoryFound.description} </p>
                            </>    
                        ) : null}
                        <KnowMore href={repositoryFound.html_url} target='_blank'> Saiba Mais </KnowMore>
                    </Repos>
                </ReposContainer>
            )}

            {loading && (
                <LoadingContainer>
                    <Loading />
                    <p> Carregando... </p>
                </LoadingContainer>
            )}

            {Object.keys(repositoryFound).length === 0 && !error && !loading && (
                <>
                    {repositories.map((item: IUserData, index: number) => (
                        <ReposContainer key={index}>
                            <Repos>
                                <h1> {item.name} </h1>
                                {item.description ? (
                                    <>
                                        <h2> Sobre </h2>
                                        <p> {item.description} </p>
                                    </>    
                                ) : null}
                                <KnowMore href={item.html_url} target='_blank'> Saiba Mais </KnowMore>
                            </Repos>
                        </ReposContainer>
                    ))}
                </>
            )}
        </>
    )
}
