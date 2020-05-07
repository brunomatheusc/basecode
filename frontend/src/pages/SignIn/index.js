import React from "react";
import { Link } from 'react-router-dom';

import { Container, Wrapper, Form } from "./styles";
import { Input, Button } from '../../styles/global';

function SignIn() {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Input type="text" placeholder="E-mail" />
                    <Input type="password" placeholder="Password" />

                    <Button>Login</Button>
                    <Link to="/">Register</Link>
                </Form>

            </Wrapper>
        </Container>
    );
}

export default SignIn;