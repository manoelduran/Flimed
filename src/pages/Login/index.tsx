import React, { FormEvent, useEffect, useState } from 'react';
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
    const { fetchUser, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true);
        try {
            await fetchUser(email, password);
            navigate('/home');
        } catch (e: any) {
            console.log(e.message as string);
            if (e.message === "Request failed with status code 400") {
                alert("Invalid User! \ncheck if the email or password are correctly!");
            }
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [])
    return (
        <Container>
            <Logo src={LogoSvg} alt="Flimed" />
            <Title >Let's enjoy Flimed</Title>
            <Form onSubmit={onSubmit}>
                <EmailInput
                    type='email'
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <PasswordInput
                    type='password'
                    placeholder="Password"
                    required
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