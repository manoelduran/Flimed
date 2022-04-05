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
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const { fetchUser } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        try {
            await fetchUser(email, password);
            navigate('home');
        } catch (error: any) {
            if (error) {
                console.log(error.message as string)
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