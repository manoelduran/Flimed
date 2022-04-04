import React, { FormEvent, Suspense, useState } from 'react';
import Loading from '../../components/Loading';
import {
    Container,
    Logo,
    Title,
    Form,
    EmailInput,
    PasswordInput,
    FormButton
} from './styles';

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        try {
            // const user = await fetchCurrentUser(username, password);
            // if (!user) {
            //     throw new Error("Usuário não encontrado");
            // };
            // navigate('Dashboard');
        } catch (err: any) {
            //     alert(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container>
            <Logo src="/logo.svg" alt="Logo" />
            <Title >Fazer login no TrackCash:</Title>
            <Form onSubmit={onSubmit}>
                <EmailInput
                    type='email'
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <PasswordInput
                    type='password'
                    placeholder="Digite sua Senha"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {loading
                    ?
                    <Loading />
                    :
                    <FormButton type="submit">Acessar o Sistema</FormButton>}
            </Form>
        </Container>
    );
}

export default Login;