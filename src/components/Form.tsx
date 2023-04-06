import {Form} from 'react-bootstrap';

function UserForm() {
  const data = [{ value:'One', selected:true }, { value: 'Two' }, { value:'Three' }];
  return (
    <Form>
      <Form.Group>
        <Form.Label>Enter the UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter a first name</Form.Label>
        <Form.Control type="text" placeholder="First name"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter a last name</Form.Label>
        <Form.Control type="text" placeholder="Last name"/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Choose a role</Form.Label>
        <Form.Select multiple>
          <option value="ANT">ANT</option>
          <option value="ANT_MANAGER">ANT_MANAGER</option>
          <option value="ANT_OFFICER">ANT_OFFICER</option>
          <option value="DEVELOPER">DEVELOPER</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Choose the borders of the work</Form.Label>
        <Form.Select multiple>
          <option value="1">Белгатой</option>
          <option value="2">Шали</option>
          <option value="3">Урус-Мартан</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Add an avatar</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
}

export default UserForm;