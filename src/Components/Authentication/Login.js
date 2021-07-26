import React from 'react';
import { Button, Form, FormGroup, Label, Input,
    Container, Row, Col
} from 'reactstrap';

const Comp = (props)=>(<div style={{border:'1px solid lightgreen'}}>{props.children}</div>)
export default function Login(props){
    return (
        <Container>        
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row inline style={{textAlign:'center'}}>
                    <Col sm={12}>
                        <Button outline color="primary">Ok</Button>                    
                    <Button outline color="secondary">Cancel</Button>
                    </Col>
                </FormGroup>            
            </Form>
            </Container>
    );
}
