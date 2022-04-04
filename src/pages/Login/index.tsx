import React, { FormEvent, useState } from 'react';
import Loading from '../../components/Loading';
import LogoSvg from '../../assets/logo.svg';
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
        } catch (error: any) {
            if (error) {
                alert(error.message as string);
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container>
            <Logo src={LogoSvg} alt="Flimed" />
            <Title >Let's enjoy Flimed</Title>
            <Form onSubmit={onSubmit}>
                <EmailInput
                    type='email'
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <PasswordInput
                    type='password'
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <FormButton type="submit">
                    {loading
                        ?
                        <Loading />
                        :
                        "Join"
                    }
                </FormButton>
            </Form>
        </Container>
    );
}

export default Login;